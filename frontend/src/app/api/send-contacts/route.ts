import { RECAPTCHA_SECRET_KEY } from '@/configs/env.config';
import { http } from '@/utils/http';
import type { NextApiResponse } from 'next';
import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest, res: NextApiResponse) {

    try {
        const { name, email, phone, message, gRecaptchaToken } = (await req.json()) as FormData;

        if (!name || !email || !phone || !message || !gRecaptchaToken) {
            return NextResponse.json(
                { success: false, error: "Missing required fields" },
                { status: 400 },
            );
        }

        const secretKey = RECAPTCHA_SECRET_KEY;
        if (!secretKey) {
            // If the secret key is not found, log an error and return an appropriate response.
            console.error("RECAPTCHA_SECRET_KEY is not set in environment variables.");
            return NextResponse.json(
                { success: false, error: "Server configuration error" },
                { status: 500 },
            );
        }

        const formData = `secret=${secretKey}&response=${gRecaptchaToken}`;

        const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: formData,
        })

        const recaptchaResponse = await response.json() as RecaptchaResponseData;

        if (recaptchaResponse?.success && recaptchaResponse.score > 0.5) {
            const transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 465,
                secure: true,
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS,
                },
            });

            await transporter.verify();

            const mailOptions = {
                from: process.env.EMAIL_USER,
                to: 'info@enersok.uz',
                subject: 'Новая заявка с формы Contact Us',
                html: `
                <h3>Информация о заявке:</h3>
                <p><strong>Имя:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Телефон:</strong> ${phone}</p>
                <p><strong>Сообщение:</strong> ${message}</p>
              `,
            };

            await transporter.sendMail(mailOptions);
            return NextResponse.json(
                { message: 'Email успешно отправлен' },
                { status: 200 },
            );
        }

        return NextResponse.json(
            { error: 'Ошибка при отправке email' },
            { status: 500 },
        );


    } catch (_error) {
        return NextResponse.json(
            { error: 'Ошибка при отправке email' },
            { status: 500 },
        );
    }
}

interface FormData {
    name: string;
    email: string;
    phone: string;
    message: string;
    gRecaptchaToken: string;
}

interface RecaptchaResponseData {
    success: boolean;
    score: number;
    error?: string;
}