import type { Image } from '@/types/shared.types';
import { cn } from '@/utils/cn';
import IconLink from '@public/sponsors/link.svg';
import NextImage from 'next/image';
import type { FC } from 'react';
import { Heading } from './Heading';
import { Paragraph } from './Paragraph';
import { Link } from '@/i18n/routing';

export const SponsorCardInfo: FC<SponsorCardInfoProps> = ({
	image,
	linkText,
	text,
	title,
	url,
	className,
}) => {
	return (
		<article
			className={cn(
				className,
				'grid lg:grid-cols-[1fr,3fr] lg:gap-x-[100px] lg:pb-12 lg:border-b-[1px] border-solid border-secondaryOpacity3',
			)}
		>
			<div className="min-h-[150px] lg:max-h-[150px] w-full bg-[#badded] mb-3 lg:mb-0 rounded-xl flex items-center justify-center">
				<NextImage
					src={image.url}
					width={image.width}
					height={image.height}
					alt={'Sponsor Image Enersok'}
					className="max-h-[70px] lg:max-h-[60px] w-auto h-full"
				/>
			</div>
			<div className="flex flex-col gap-y-3 lg:gap-y-8">
				<Heading as="h3" className="text-2xl lg:text-5xl text-secondary">
					{title}
				</Heading>
				<Paragraph className="text-sm lg:text-lg text-secondary">
					{text}
				</Paragraph>
				<div className="flex flex-row gap-x-2 items-center">
					<NextImage
						src={IconLink}
						alt="Link Icon Enersok"
						className="w-6 h-6"
					/>
					<Link
						className="text-base lg:text-2xl text-secondary hover:text-primary duration-200 !leading-[normal]"
						href={url}
						target="_blank"
					>
						{linkText}
					</Link>
				</div>
			</div>
		</article>
	);
};

interface SponsorCardInfoProps {
	className?: string;
	image: Image;
	title: string;
	text: string;
	url: string;
	linkText: string;
}
