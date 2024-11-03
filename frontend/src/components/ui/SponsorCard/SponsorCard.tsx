import type { Image } from '@/types/shared.types';
import { cn } from '@/utils/cn';
import NextImage from 'next/image';
import type { FC } from 'react';
import { Heading } from '../Heading';
import { Paragraph } from '../Paragraph';

export const SponsorCard: FC<SponsorCardProps> = ({
	image,
	text,
	title,
	className,
}) => {
	return (
		<article
			className={cn(
				className,
				'bg-[#F2F7FA] min-h-[213px] px-6 py-3 h-full w-full rounded-xl flex flex-col justify-center items-center hover:shadow-lg duration-200',
			)}
		>
			<NextImage
				src={image.url}
				alt="Sponsor 1 Enersok"
				className="max-h-[40px] w-auto h-full"
			/>
			<Heading as="h5" className="text-xl text-secondary pt-8 pb-3 text-center">
				{title}
			</Heading>
			<Paragraph className="text-2xl font-semibold text-secondary text-center">
				{text}
			</Paragraph>
		</article>
	);
};

interface SponsorCardProps {
	className?: string;
	image: Image;
	title: string;
	text: string;
}
