import { Heading } from '@/components/ui/Heading';
import { Paragraph } from '@/components/ui/Paragraph';
import NextImage from 'next/image';
import PeopelsImage from '@public/image (3).png';
import { cn } from '@/utils/cn';

export const CarouselItem = () => {
	return (
		<div className="flex justify-between items-center *:text-secondary min-h-96 cursor-pointer">
			<div>
				<Heading
					size="3xl"
					as="h1"
					className={cn('md:text-6xl font-semibold', 'lg:text-7xl')}
				>
					Enersok
					<span className="text-3xl mx-6">FE LLC</span>
				</Heading>
				<Paragraph size="sm" className="md:text-lg mt-8 max-w-[600px]">
					Enersok FE LLC was formed in 2022 by the Consortium of Electricite De
					France (EDF), Nebras Power (Qatar), Sojitz Corporation and Kyuden
					International (Japan)
				</Paragraph>
			</div>
			<NextImage
				src={PeopelsImage}
				alt="Slide 1"
			/>
		</div>
	);
};

// TODO: Integrate the CarouselItemProps interface
interface CarouselItemProps {
	src: string;
	alt: string;
	title: string;
	description: string;
}
