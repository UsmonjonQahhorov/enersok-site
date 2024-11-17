import { cn } from '@/utils/cn';
import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';

export const SocialIcon: FC<SocialIconProps> = ({
	alt,
	src,
	className,
	url,
	black = false,
}) => {
	return (
		<Link
			className={cn(
				className,
				'w-12 h-12 rounded-full border flex justify-center items-center',
				{
					'border-secondary': black === true,
				},
			)}
			target="_blank"
			href={url}
		>
			<Image
				src={src}
				alt={alt}
				className={cn('w-[13px] height-[13px]', {
					'brightness-0': black === true,
				})}
			/>
		</Link>
	);
};

interface SocialIconProps {
	className?: string;
	url: string;
	src: string;
	alt: string;
	black?: boolean;
}
