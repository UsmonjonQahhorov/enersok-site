import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, message, file } = await req.json() as FormData;

    // Настройка Nodemailer
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Проверка подключения
    await transporter.verify();

    // Опции письма
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'smokeemoo@yandex.ru',
      subject: 'Новая заявка с формы карьеры',
      html: `
        <h3>Информация о заявке:</h3>
        <p><strong>Имя:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Телефон:</strong> ${phone}</p>
        <p><strong>Сообщение:</strong> ${message}</p>
        ${file ? `<p><strong>Файл:</strong> ${file}</p>` : ''}
      `,
    };

    // Отправка письма
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email успешно отправлен' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Ошибка при отправке email' }, { status: 500 });
  }
}

// Определение интерфейса для данных формы
interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  file?: string;
}
