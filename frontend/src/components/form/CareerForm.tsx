'use client';
import type { FC } from 'react';
import { TextInput } from '@/components/input/TextInput';
import { InputBase } from '@/components/input/InputBase';
import { Textarea } from '@/components/input/TextArea';
import { Button } from '@/components/ui/Button';
import { cn } from '@/utils/cn';
import { FileInput } from '@/components/input/FileInput';
import { Heading } from '@/components/ui/Heading';
import { useForm } from 'react-hook-form';

const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const phonePattern = /^[+]{1}[0-9]{7,15}$/;

export const CareerForm: FC<CareerFormProps> = ({
	email,
	message,
	name,
	phone,
	sumbmit,
	className,
	file,
	text,
}) => {
	const {
		register,
		handleSubmit,
		reset, // метод для сброса формы
	} = useForm<CareerFormData>();

	const onSubmit = async (data: CareerFormData) => {
		try {
			const formData = new FormData();
			formData.append('name', data.name);
			formData.append('email', data.email);
			formData.append('phone', data.phone);
			formData.append('message', data.message);

			// Проверяем наличие файла
			const fileInput =
				document.querySelector<HTMLInputElement>('input[type="file"]');
			if (fileInput?.files?.[0]) {
				formData.append('file', fileInput.files[0]);
			}

			const response = await fetch('/api/send-career', {
				method: 'POST',
				body: formData,
			});

			if (response.ok) {
				console.log('Форма успешно отправлена');
				reset(); // Сбрасываем данные формы
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
			encType="multipart/form-data"
			className={cn(
				className,
				'px-6 py-12 md:p-12 h-fit bg-backgroundImage2 [&>div:nth-last-of-type(1)]:w-[70%] md:[&>div:nth-last-of-type(1)]:w-[40%] flex flex-col gap-y-12 lg:rounded-xl',
			)}
		>
			<Heading
				as="h4"
				className="uppercase text-secondary text-[32px] lg:text-5xl"
			>
				{text}
			</Heading>
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
			<FileInput
				placeholder={file}
				{...register('file')}
				className="bg-transparent"
			/>
			<Button
				type="submit"
				className="w-full md:w-fit hover:bg-button1/80 duration-300"
			>
				{sumbmit}
			</Button>
		</form>
	);
};

interface CareerFormProps {
	className?: string;
	text: string;
	name: string;
	email: string;
	phone: string;
	message: string;
	sumbmit: string;
	file: string;
}

interface CareerFormData {
	name: string;
	email: string;
	phone: string;
	message: string;
	file?: File;
}
