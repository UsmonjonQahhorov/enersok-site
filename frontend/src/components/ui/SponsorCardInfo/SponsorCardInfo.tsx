import type { Image } from '@/types/shared.types';
import { cn } from '@/utils/cn';
import IconLink from '@public/sponsors/link.svg';
import NextImage from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';
import { Heading } from '../Heading';
import { Paragraph } from '../Paragraph';

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
				'grid grid-cols-[1fr,3fr] gap-x-[100px] pb-12 border-b-[1px] border-solid border-secondaryOpacity3',
			)}
		>
			<div className="max-h-[150px] w-full bg-[#F8F8F8] rounded-xl flex items-center justify-center">
				<NextImage
					src={image.url}
					alt={'Sponsor Image Enersok'}
					className="max-h-[60px] w-auto h-full"
				/>
			</div>
			<div className="flex flex-col gap-y-8">
				<Heading as="h4" className="text-5xl text-secondary">
					{title}
				</Heading>
				<Paragraph className="text-lg text-secondary">{text}</Paragraph>
				<div className="flex flex-row gap-x-2 items-center">
					<NextImage src={IconLink} alt="Link Icon Enersok" className="w-6 h-6" />
					<Link
						className="text-2xl text-secondary !leading-[normal]"
						href={url}
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
