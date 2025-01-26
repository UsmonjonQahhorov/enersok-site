'use client';
import type { FC } from 'react';
import { TextInput } from '@/components/input/TextInput';
import { InputBase } from '@/components/input/InputBase';
import { Textarea } from '@/components/input/TextArea';
import { Button } from '@/components/ui/Button';
import { cn } from '@/utils/cn';
import { useForm } from 'react-hook-form';
import { useReCaptcha } from 'next-recaptcha-v3';

const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const phonePattern = /^[+]{1}[0-9]{7,15}$/;

export const GrmSubmissionForm: FC<GrmSubmissionFormProps> = ({
	email,
	message,
	name,
	phone,
	sumbmit,
	className,
}) => {
	const { executeRecaptcha } = useReCaptcha();
	const { register, handleSubmit, reset } = useForm<GrmSubmissionFormData>();
	const onSubmit = async (data: GrmSubmissionFormData) => {
		if (!executeRecaptcha) {
			console.error('ReCAPTCHA not available');
			return;
		}
		const gRecaptchaToken = await executeRecaptcha('/api/send-career');
		try {
			const response = await fetch('/api/send-grm', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					...data,
					gRecaptchaToken,
				}),
			});
			if (response.ok) {
				console.log('Форма успешно отправлена');
				reset();
			} else {
				console.error('Ошибка при отправке формы:', await response.text());
				console.log('Произошла ошибка при отправке формы');
			}
		} catch (error) {
			console.error('Неизвестная ошибка при отправке формы:', error);
			console.log('Произошла неизвестная ошибка при отправке формы');
		}
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className={cn(
				className,
				'p-[32px_16px_16px] md:p-12 bg-white flex flex-col gap-y-10 rounded-xl',
			)}
		>
			<TextInput
				placeholder={name}
				{...register('name', { required: 'Имя обязательно' })}
				required={true}
				className="bg-transparent"
			/>
			<InputBase
				type="email"
				placeholder={email}
				{...register('email', {
					required: 'Email обязателен',
					pattern: {
						value: emailPattern,
						message: 'Введите корректный email',
					},
				})}
				required={true}
				className="bg-transparent"
			/>
			<InputBase
				type="tel"
				placeholder={phone}
				{...register('phone', {
					required: 'Телефон обязателен',
					pattern: {
						value: phonePattern,
						message: 'Введите корректный номер телефона',
					},
				})}
				required={true}
				className="bg-transparent"
			/>
			<Textarea
				placeholder={message}
				{...register('message', { required: 'Сообщение обязательно' })}
				required={true}
				className="bg-transparent"
			/>
			<Button type="submit" className="w-full md:w-fit hover:bg-button1/80">
				{sumbmit}
			</Button>
		</form>
	);
};

interface GrmSubmissionFormProps {
	className?: string;
	name: string;
	email: string;
	phone: string;
	message: string;
	sumbmit: string;
}

interface GrmSubmissionFormData {
	name: string;
	email: string;
	phone: string;
	message: string;
}
