import { Heading } from '@/components/ui/Heading';
import { Paragraph } from '@/components/ui/Paragraph';
import type { Image } from '@/types/shared.types';
import NextImage from 'next/image';
// import LocationPosition from '@public/location-position-black.svg';
import { cn } from '@/utils/cn';
// import Factory from '@public/about.png';

export const LocationHoverCard = ({
	className,
	companyName,
	image,
	location,
}: LocationHoverCardProps) => {
	return (
		<article
			className={cn(
				'flex items-center gap-3 md:gap-6 rounded-xl bg-white p-2 pr-5 md:pr-12 sm:w-[80%] md:sm:w-[80%] md:max-w-[450px]',
				className,
			)}
		>
			<NextImage
				src={image.url}
				width={image.width}
				height={image.height}
				alt={image.name}
				className="max-w-36 h-full rounded-xl"
			/>
			<div className="*:text-secondary flex flex-col gap-4">
				<Heading as="h4" className="text-lg sm:text-2xl uppercase">
					{companyName}
				</Heading>
				<Paragraph className="text-xs sm:text-sm flex flex-row items-center gap-3">
					{/* <NextImage src={LocationPosition} alt="Location Position" /> */}
					{location}
				</Paragraph>
			</div>
		</article>
	);
};

interface LocationHoverCardProps {
	companyName: string;
	location: string;
	image: Image;
	className?: string;
}
