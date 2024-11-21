import { cn } from '@/utils/cn';
import type { FC } from 'react';
import { Heading } from '../Heading';
import { Paragraph } from '../Paragraph';
import Link from 'next/link';
import { Time } from '@/utils/time';

export const CareerCard: FC<CareerCardProps> = ({
	endDate,
	location,
	startDate,
	title,
	url,
	className,
}) => {
	return (
		<article
			className={cn(
				className,
				'flex flex-col h-full lg:h-fit lg:grid lg:grid-cols-[3.5fr,3.5fr,3.5fr,1fr] py-8 text-secondary border-t-[1px] border-solid border-secondaryOpacity3 justify-start items-start lg:items-center',
			)}
		>
			<Heading as="h4" className="font-normal text-2xl md:text-[32px] pb-3 lg:pb-0">
				{title}
			</Heading>
			<div className="flex flex-col items-start justify-center">
				<Paragraph className="text-sm text-secondaryOpacity4 pb-[5px] md:pb-2">
					Location
				</Paragraph>
				<Paragraph className="text-base md:text-xl pb-8 lg:pb-0">{location}</Paragraph>
			</div>
			<div className="flex flex-row gap-x-8 pb-8 lg:pb-0">
				<div className="flex flex-col items-start justify-center">
					<Paragraph className="text-sm text-secondaryOpacity4 pb-2">
						Posting Date
					</Paragraph>
					<Paragraph className="text-xl">
						{Time(startDate).format('DD.MM.YYYY')}
					</Paragraph>
				</div>
				<div className="flex flex-col items-start justify-center">
					<Paragraph className="text-sm text-secondaryOpacity4 pb-2">
						Closing Date
					</Paragraph>
					<Paragraph className="text-xl">
						{Time(endDate).format('DD.MM.YYYY')}
					</Paragraph>
				</div>
			</div>
			<Link
				className="w-full lg:w-fit text-center lg:text-left bg-button1 hover:bg-button1/80 duration-300 text-lg text-white py-4 px-9 rounded-[100px]"
				href={url}
			>
				View
			</Link>
		</article>
	);
};

interface CareerCardProps {
	className?: string;
	title: string;
	location: string;
	startDate: Date;
	endDate: Date;
	url: string;
}
