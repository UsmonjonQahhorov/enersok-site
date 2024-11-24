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
	const { register, handleSubmit, formState: { errors } } = useForm<CareerFormData>();

	const onSubmit = async (data: CareerFormData) => {
		try {
			const response = await fetch('/api/send-email', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});

			if (response.ok) {
				alert('Форма успешно отправлена');
			} else {
				console.error('Ошибка при отправке формы:', await response.text());
				alert('Произошла ошибка при отправке формы');
			}
		} catch (error) {
			console.error('Неизвестная ошибка при отправке формы:', error);
			alert('Произошла неизвестная ошибка при отправке формы');
		}
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
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
				{...register('name', { required: true })}
				required={true}
				className="bg-transparent"
			/>
			<InputBase
				type="email"
				placeholder={email}
				{...register('email', { required: true })}
				required={true}
				className="bg-transparent"
			/>
			<InputBase
				type="tel"
				placeholder={phone}
				{...register('phone', { required: true })}
				required={true}
				pattern="[+]{1}[0-9]{7,15}"
				className="bg-transparent"
			/>
			<Textarea
				placeholder={message}
				{...register('message', { required: true })}
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
	file?: string;
}

