import type { Image } from '@/types/shared.types';
import { cn } from '@/utils/cn';
import { Time } from '@/utils/time';
import TimeIcon from '@public/time.svg';
import NextImage from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';
import { Heading } from './Heading';
import { Paragraph } from './Paragraph';

export const NewCard: FC<NewCardProps> = ({
	date,
	time,
	title,
	className,
	image,
	url,
}) => {
	return (
		<article
			className={cn(
				className,
				'flex flex-col gap-y-3 justify-between sm:gap-y-8 items-start text-secondary',
				// 'flex gap-y-3 justify-start sm:gap-y-8 items-start text-secondary',
			)}
		>
			<div className="flex flex-col items-start gap-y-3 lg:gap-y-4 w-full min-w-full">
				<Link
					href={url}
					className="w-full h-full max-w-[767px] min-h-[200px] sm:min-h-[287px] max-h-[200px] sm:max-h-[287px]"
				>
					<NextImage
						src={image.url}
						width={image.width}
						height={image.height}
						alt="Enersok News Image"
						className="min-h-[200px] sm:min-h-[287px] max-h-[200px] sm:max-h-[287px] w-full h-full object-cover object-center rounded-xl"
					/>
				</Link>
				<Link href={url}>
					<Heading
						as="h4"
						className="text-2xl lg:text-[24px] pt-3 md:pt-0 hover:text-primary duration-300 text-wrap break-all"
					>
						{title}
					</Heading>
				</Link>
			</div>
			<div className="flex flex-row gap-x-5 items-center self-start">
				<Paragraph className="text-xs sm:text-base !leading-[normal]">
					{Time(date).format('DD.MM.YYYY')}
				</Paragraph>
				<div className="flex flex-row items-center gap-x-1">
					<NextImage
						src={TimeIcon}
						alt="Time Enersok News"
						className="w-4 h-4 mb-[2px] sm:mb-0"
					/>
					<Paragraph className="!leading-[normal] text-xs sm:text-base">
						{time}
					</Paragraph>
				</div>
			</div>
		</article>
	);
};

interface NewCardProps {
	className?: string;
	title: string;
	date: Date;
	time: string;
	image: Image;
	url: string;
}
