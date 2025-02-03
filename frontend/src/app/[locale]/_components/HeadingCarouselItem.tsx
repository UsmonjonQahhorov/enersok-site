// import { Heading } from '@/components/ui/Heading';
// import { Paragraph } from '@/components/ui/Paragraph';
import NextImage from 'next/image';
// import { cn } from '@/utils/cn';
import type { Image } from '@/types/shared.types';
import { getDefaultBlurImage } from '@/utils/getBlurImage';
import { cn } from '@/utils/cn';

export const HeadingCarouselItem = ({
	// description,
	image,
	// title,
}: CarouselItemProps) => {
	// const [firstWord, ...remainingWords] = title.split(' ');
	// const firstPart = firstWord;
	// const remainingPart = remainingWords.join(' ');

	return (
		<div className={cn(
			"flex justify-between items-start lg:items-center *:text-secondary lg:min-h-96 cursor-pointer",
			// 'gap-y-8 gap-x-4 lg:gap-x-0 flex-col-reverse'
		)}>
			{/* <div className="w-full">
				<Heading
					as="h1"
					className={cn(
						'text-[44px] md:text-4xl 2xl:text-7xl text-center font-semibold uppercase',
						'lg:text-5xl',
					)}
				>
					{firstPart}
					<span className="text-base md:text-4xl mx-2 md:mx-6">
						{remainingPart}
					</span>
				</Heading>
				<Paragraph size="sm" className="md:text-2xl mt-4 md:mt-8 text-center">
					{description}
				</Paragraph>
			</div> */}
			<div className="rounded-xl w-full h-full max-h-[250px] sm:max-h-[350px] lg:max-h-[600px] min-h-[250px] sm:min-h-[350px] lg:min-h-[600px] overflow-hidden">
				<NextImage
					src={image.url}
					width={image.width}
					height={image.height}
					alt={image.name}
					priority={true}
					className="object-cover max-h-[250px] sm:max-h-[350px] lg:max-h-[600px] min-h-[250px] sm:min-h-[350px] lg:min-h-[600px] w-full h-full object-center rounded-xl"
					placeholder='blur'
					blurDataURL={getDefaultBlurImage}
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
