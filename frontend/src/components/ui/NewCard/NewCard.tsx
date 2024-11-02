import { cn } from '@/utils/cn';
import Image, { type StaticImageData } from 'next/image';
import type { FC } from 'react';
import { Heading } from '../Heading';
import { Paragraph } from '../Paragraph';
import Time from '@public/time.svg';

export const NewCard: FC<NewCardProps> = ({
	date,
	time,
	title,
	className,
	image,
}) => {
	return (
		<div
			className={cn(
				className,
				'flex flex-col gap-y-8 items-start text-secondary',
			)}
		>
			<div className="w-full h-full">
				<Image
					src={image}
					alt="Enersok News Image"
					className="max-h-[287px] w-full h-full object-cover object-center rounded-xl"
				/>
			</div>
			<Heading as="h4" className="text-[32px]">
				{title}
			</Heading>
			<div className="flex flex-row gap-x-5 items-center">
				<Paragraph className="text-base !leading-[normal]">{date}</Paragraph>
				<div className="flex flex-row items-center gap-x-1">
					<Image src={Time} alt="Time Enersok News" className="w-4 h-4" />
					<Paragraph className="!leading-[normal]">{time}</Paragraph>
				</div>
			</div>
		</div>
	);
};

interface NewCardProps {
	className?: string;
	title: string;
	date: string;
	time: string;
	image: StaticImageData;
}
