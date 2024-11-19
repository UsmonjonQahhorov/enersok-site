import { Heading } from '@/components/ui/Heading';
import { Paragraph } from '@/components/ui/Paragraph';
import NextImage from 'next/image';
import PeopelsImage from '@public/image (3).png';
import { cn } from '@/utils/cn';
import type { Image } from '@/types/shared.types';

export const CarouselItem = ({ description, image, title }: CarouselItemProps) => {
	return (
		<div className="flex flex-col-reverse gap-y-8 md:grid md:grid-cols-[0.5fr,0.5fr] gap-x-4 lg:gap-x-0 justify-between items-center *:text-secondary min-h-96 cursor-pointer">
			<div>
				<Heading
					as="h1"
					className={cn('text-[54px] md:text-4xl 2xl:text-6xl font-semibold uppercase', 'lg:text-5xl')}
				>
					{title}
					<span className="text-base md:text-3xl mx-2 md:mx-6">FE LLC</span>
				</Heading>
				<Paragraph size="sm" className="md:text-lg mt-4 md:mt-8 max-w-[600px]">
					{description}
				</Paragraph>
			</div>
			<div className='rounded-xl w-full overflow-hidden'>
				<NextImage
					src={image.url}
					width={image.width}
					height={image.height}
					alt={image.name}
					className='object-cover w-full max-h-[250px] sm:max-h-[350px] md:max-h-[650px] object-center rounded-xl'
				/>
			</div>
		</div>
	);
};

interface CarouselItemProps {
	image: Image;
	title: string;
	description: string;
}
