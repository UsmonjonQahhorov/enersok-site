import type { FC } from 'react';
import { TextInput } from '@/components/input/TextInput/TextInput';
import { InputBase } from '@/components/input/InputBase';
import { Textarea } from '@/components/input/TextArea';
import { Button } from '@/components/ui/Button';
import { cn } from '@/utils/cn';

export const GrmSubmissionForm: FC<GrmSubmissionFormProps> = ({
	email,
	message,
	name,
	phone,
	sumbmit,
	className,
}) => {
	return (
		<form
			className={cn(
				className,
				'p-[32px_16px_16px] md:p-12 bg-white flex flex-col gap-y-10 rounded-xl',
			)}
		>
			<TextInput placeholder={name} required={true} />
			<InputBase type="email" placeholder={email} required={true} />
			<InputBase
				type="tel"
				placeholder={phone}
				required={true}
				pattern="[+]{1}[0-9]{7,15}"
			/>
			<Textarea placeholder={message} required={true} />
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
