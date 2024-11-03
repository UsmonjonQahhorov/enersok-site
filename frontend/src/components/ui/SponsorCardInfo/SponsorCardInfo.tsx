import { cn } from '@/utils/cn';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { FC } from 'react';
import { Paragraph } from '../Paragraph';
import { Heading } from '../Heading';
import Link from 'next/link';
import IconLink from '@public/sponsors/link.svg';

export const SponsorCardInfo: FC<SponsorCardInfoProps> = ({
	image,
	linkText,
	text,
	title,
	url,
	className,
}) => {
	return (
		<div
			className={cn(
				className,
				'grid grid-cols-[1fr,3fr] gap-x-[100px] pb-12 border-b-[1px] border-solid border-secondaryOpacity3',
			)}
		>
			<div className="max-h-[150px] w-full bg-[#F8F8F8] rounded-xl flex items-center justify-center hover:shadow-lg duration-200">
				<Image
					src={image}
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
					<Image src={IconLink} alt="Link Icon Enersok" className="w-6 h-6" />
					<Link
						className="text-2xl text-secondary hover:text-primary duration-200 !leading-[normal]"
						href={url}
					>
						{linkText}
					</Link>
				</div>
			</div>
		</div>
	);
};

interface SponsorCardInfoProps {
	className?: string;
	image: StaticImageData;
	title: string;
	text: string;
	url: string;
	linkText: string;
}
