import { cn } from '@/utils/cn';
import Image, { type StaticImageData } from 'next/image';
import type { FC } from 'react';
import { Heading } from '../Heading';
import { Paragraph } from '../Paragraph';
import Time from '@public/time.svg';
import Link from 'next/link';

export const NewCard: FC<NewCardProps> = ({
	date,
	time,
	title,
	className,
	image,
	url
}) => {
	return (
		<div
			className={cn(
				className,
				'flex flex-col gap-y-8 items-start text-secondary',
			)}
		>
			<Link href={url} className="w-full h-full">
				<Image
					src={image}
					alt="Enersok News Image"
					className="max-h-[287px] w-full h-full object-cover object-center rounded-xl"
				/>
			</Link>
			<Link href={url}>
				<Heading as="h4" className="text-[32px] hover:text-primary duration-300">
					{title}
				</Heading>
			</Link>
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
	url: string;
}
