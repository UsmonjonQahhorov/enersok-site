import type { Image } from '@/types/shared.types';
import { cn } from '@/utils/cn';
import NextImage from 'next/image';
import type { FC } from 'react';
import { Heading } from './Heading';
import { Paragraph } from './Paragraph';
import { getDefaultBlurImage } from '@/utils/getBlurImage';

export const SponsorCard: FC<SponsorCardProps> = async ({
	image,
	text,
	title,
	className,
}) => {

	return (
		<article
			className={cn(
				className,
				'bg-[#F2F7FA] min-h-[85px] md:min-h-[213px] px-6 py-3 h-full w-full rounded-xl flex flex-row md:flex-col justify-start md:justify-center items-center hover:shadow-lg duration-200',
			)}
		>
			<NextImage
				src={image.url}
				width={image.width}
				height={image.height}
				alt="Sponsor 1 Enersok"
				className="max-w-[62px] md:max-w-[102px] lg:max-w-full lg:max-h-[40px] w-full lg:w-auto h-auto lg:h-full"
				placeholder="blur"
				blurDataURL={getDefaultBlurImage}
			/>
			<div className="ml-3 md:ml-0 pl-3 md:pl-0 border-l-[1px] md:border-l-0 border-secondaryOpacity3 flex flex-col md:block">
				<Heading
					as="h3"
					className="text-sm lg:text-xl text-secondary md:pt-8 md:pb-3 text-left md:text-center"
				>
					{title}
				</Heading>
				<Paragraph className="text-base lg:text-2xl font-semibold text-secondary text-left md:text-center">
					{text}
				</Paragraph>
			</div>
		</article>
	);
};

interface SponsorCardProps {
	className?: string;
	image: Image;
	title: string;
	text: string;
}
