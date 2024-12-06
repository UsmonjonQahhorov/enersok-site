import NextImage from 'next/image';
import type { Image } from '@/types/shared.types';
import { cn } from '@/utils/cn';

export const CarouselItem = ({ picture, className }: CarouselItemProps) => {
	return (
		<NextImage
			src={picture.url}
			width={picture.width}
			height={picture.height}
			alt={picture.name}
			className={cn(
				'max-h-[320px] w-full rounded-xl h-full aspect-auto',
				className,
			)}
		/>
	);
};

interface CarouselItemProps {
	picture: Image;
	className?: string;
}
