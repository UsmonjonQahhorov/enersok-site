import type { FC } from 'react';
import { TextInput } from '@/components/input/TextInput/TextInput';
import { InputBase } from '@/components/input/InputBase';
import { Textarea } from '@/components/input/TextArea';
import { Button } from '@/components/ui/Button';
import { cn } from '@/utils/cn';
import { FileInput } from '@/components/input/FileInput';

export const CareerForm: FC<CareerFormProps> = ({
	email,
	message,
	name,
	phone,
	sumbmit,
	className,
	file,
}) => {
	return (
		<form
			className={cn(
				className,
				'p-12 h-fit bg-backgroundImage2 [&>div:nth-last-of-type(1)]:w-[40%] flex flex-col gap-y-12 rounded-xl',
			)}
		>
			<TextInput
				placeholder={name}
				required={true}
				className="bg-transparent"
			/>
			<InputBase
				type="email"
				placeholder={email}
				required={true}
				className="bg-transparent"
			/>
			<InputBase
				type="tel"
				placeholder={phone}
				required={true}
				pattern="[+]{1}[0-9]{7,15}"
				className="bg-transparent"
			/>
			<Textarea
				placeholder={message}
				required={true}
				className="bg-transparent"
			/>
			<FileInput placeholder={file} className="bg-transparent" />
			<Button type="submit" className="w-fit hover:bg-button1/80 duration-300">
				{sumbmit}
			</Button>
		</form>
	);
};

interface CareerFormProps {
	className?: string;
	name: string;
	email: string;
	phone: string;
	message: string;
	sumbmit: string;
	file: string;
}
