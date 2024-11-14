import { cn } from '@/utils/cn';
import NextImage from 'next/image';
import type { FC } from 'react';
import { Heading } from '../Heading';
import { Paragraph } from '../Paragraph';
import Time from '@public/time.svg';
import type { Image } from '@/types/shared.types';
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
		<article
			className={cn(
				className,
				'flex flex-col gap-y-3 sm:gap-y-8 items-start text-secondary',
			)}
		>
			<Link href={url} className="w-full h-full">
				<NextImage
					src={image.url}
					width={image.width}
					height={image.height}
					alt="Enersok News Image"
					className="max-h-[200px] sm:max-h-[287px] w-full h-full object-cover object-center rounded-xl"
				/>
			</Link>
			<Link href={url}>
				<Heading as="h4" className="text-2xl lg:text-[32px] pt-3 md:pt-0 hover:text-primary duration-300">
					{title}
				</Heading>
			</Link>
			<div className="flex flex-row gap-x-5 items-center">
				<Paragraph className="text-xs sm:text-base !leading-[normal]">{date}</Paragraph>
				<div className="flex flex-row items-center gap-x-1">
					<NextImage src={Time} alt="Time Enersok News" className="w-4 h-4 mb-[2px] sm:mb-0" />
					<Paragraph className="!leading-[normal] text-xs sm:text-base">{time}</Paragraph>
				</div>
			</div>
		</article>
	);
};

interface NewCardProps {
	className?: string;
	title: string;
	date: string;
	time: string;
	image: Image;
	url: string;
}
