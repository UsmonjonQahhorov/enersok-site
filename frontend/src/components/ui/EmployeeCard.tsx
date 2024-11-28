'use client';
import { cn } from '@/utils/cn';
import NextImage from 'next/image';
import type { FC } from 'react';
import { Heading } from './Heading';
import { Paragraph } from './Paragraph';
import type { Image } from '@/types/shared.types';
import Email from '@public/footer-icons/email2.svg';
import Link from 'next/link';

export const EmployeeCard: FC<EmployeeCardProps> = ({
	image,
	job,
	name,
	className,
	email,
}) => {
	return (
		<article className={cn(className, 'flex flex-col gap-y-3')}>
			<div className="rounded-xl w-full h-full max-h-[348px] md:max-h-[371px] min-h-[348px] md:min-h-[371px]">
				<NextImage
					src={image.url}
					alt={image.name}
					width={image.width}
					height={image.height}
					className="object-cover object-center rounded-xl max-h-[348px] md:max-h-[371px] min-h-[348px] md:min-h-[371px] w-full h-full"
				/>
			</div>
			<Heading
				as="h3"
				className="pt-5 text-2xl md:text-[32px] leading-[34px] font-normal text-secondary hover:text-primary duration-300"
			>
				{name}
			</Heading>
			<Paragraph className="text-sm md:text-base leading-[18px] font-normal text-secondary">
				{job}
			</Paragraph>
			<Link
				className="flex items-end gap-x-1"
				target="_blank"
				href={`mailto:${email}`}
			>
				<NextImage src={Email} alt="Email Icon" className="w-4 h-4" />
				<Paragraph className="text-secondary text-sm !leading-[normal] hover:text-primary duration-300">
					{email}
				</Paragraph>
			</Link>
		</article>
	);
};

interface EmployeeCardProps {
	className?: string;
	image: Image;
	name: string;
	job: string;
	email: string;
}
