import { cn } from '@/utils/cn';
import NextImage from 'next/image';
import type { FC } from 'react';
import { Heading } from '../Heading';
import { Paragraph } from '../Paragraph';
import type { Image } from '@/types/shared.types';

export const EmployeeCard: FC<EmployeeCardProps> = ({
	image,
	job,
	name,
	className,
}) => {
	return (
		<article className={cn(className, 'flex flex-col gap-y-3')}>
			<div className="rounded-xl w-full h-full">
				<NextImage
					src={image.url}
					alt={image.name}
					width={image.width}
					height={image.height}
					className="object-cover object-center rounded-xl min-h-[348px] md:min-h-[371px] w-full h-full"
				/>
			</div>
			<Heading
				as="h5"
				className="pt-5 text-2xl md:text-[32px] leading-[34px] font-normal text-secondary hover:text-primary duration-300"
			>
				{name}
			</Heading>
			<Paragraph className="text-sm md:text-base leading-[18px] font-normal text-secondary hover:text-primary duration-300">
				{job}
			</Paragraph>
		</article>
	);
};

interface EmployeeCardProps {
	className?: string;
	image: Image;
	name: string;
	job: string;
}
