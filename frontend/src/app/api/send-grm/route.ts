import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
export async function POST(req: NextRequest) {
	try {
		const { name, email, phone, message } = (await req.json()) as FormData;

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
			to: 'grievance@enersok.uz',
			subject: 'Новая заявка с формы GRM Submission',
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
}
