import { NextResponse } from 'next/server';
import type { IncomingMessage } from 'node:http';
import { Readable } from 'node:stream';
import formidable, { type File } from 'formidable';
import nodemailer from 'nodemailer';
import { RECAPTCHA_SECRET_KEY } from '@/configs/env.config';
import { http } from '@/utils/http';

export const config = {
	api: {
		bodyParser: false,
	},
};

async function toNodeStream(req: Request): Promise<IncomingMessage> {
	const buffer = Buffer.from(await req.arrayBuffer());
	const stream = new Readable();
	stream._read = () => {
		// No-op because the stream is already populated
	};
	stream.push(buffer);
	stream.push(null);

	return Object.assign(stream, {
		headers: Object.fromEntries(req.headers),
		method: req.method,
		url: req.url,
	}) as IncomingMessage;
}

async function parseForm(
	req: IncomingMessage,
): Promise<{ fields: formidable.Fields; files: formidable.Files }> {
	const form = formidable({ multiples: false, keepExtensions: true });

	return new Promise((resolve, reject) => {
		form.parse(req, (err, fields, files) => {
			if (err) reject(err);
			else resolve({ fields, files });
		});
	});
}

export async function POST(req: Request) {

	const secretKey = RECAPTCHA_SECRET_KEY;
	if (!secretKey) {
		// If the secret key is not found, log an error and return an appropriate response.
		console.error("RECAPTCHA_SECRET_KEY is not set in environment variables.");
		return NextResponse.json(
			{ success: false, error: "Server configuration error" },
			{ status: 500 },
		);
	}

	try {
		const nodeReq = await toNodeStream(req);

		const { fields, files } = await parseForm(nodeReq);

		const { name, email, phone, message, gRecaptchaToken } = fields;
		const fileData = files.file;

		const formData = `secret=${secretKey}&response=${gRecaptchaToken}`;

		const response = await http<RecaptchaResponseData>("https://www.google.com/recaptcha/api/siteverify", {
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			},
			body: formData,
		})

		if (response.data?.success && response.data.score > 0.5) {
			let file: File | undefined = undefined;

			if (fileData) {
				if (Array.isArray(fileData)) {
					file = fileData[0];
				} else {
					file = fileData;
				}
			}

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

			const mailOptions: nodemailer.SendMailOptions = {
				from: process.env.EMAIL_USER,
				to: 'lola.tadjiyeva@enersok.uz ',
				subject: 'Новая заявка с формы карьеры',
				html: `
        <h3>Информация о заявке:</h3>
        <p><strong>ФИО:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Телефон:</strong> ${phone}</p>
        <p><strong>Сообщение:</strong> ${message}</p>
      `,
			};

			if (file) {
				mailOptions.attachments = [
					{
						filename: file.originalFilename || 'attachment',
						path: file.filepath,
					},
				];
			}

			await transporter.sendMail(mailOptions);

			return NextResponse.json(
				{ message: 'Письмо успешно отправлено' },
				{ status: 200 },
			);
		}

	} catch (error) {
		console.error('Ошибка:', error);
		return NextResponse.json(
			{ error: 'Ошибка отправки письма' },
			{ status: 500 },
		);
	}
}

interface RecaptchaResponseData {
	success: boolean;
	score: number;
	error?: string;
}
