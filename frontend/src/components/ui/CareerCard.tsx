import { cn } from '@/utils/cn';
import type { FC } from 'react';
import { Heading } from './Heading';
import { Paragraph } from './Paragraph';
import { Time } from '@/utils/time';
import { getLocale } from '@/utils/getLocale.util';
import { Link } from '@/i18n/routing';

export const CareerCard: FC<CareerCardProps> = ({
	endDate,
	location,
	startDate,
	title,
	url,
	className,
}) => {
	const locale = getLocale();
	const locationText = locale === 'en' ? 'Location' : 'Joylashuv';
	const postingText = locale === 'en' ? 'Posting Date' : 'E’lon qilingan sana';
	const closingText = locale === 'en' ? 'Closing Date' : 'Yopilish Sanasi';
	const viewText = locale === 'en' ? 'View' : "Ko'rish";

	return (
		<article
			className={cn(
				className,
				'flex flex-col h-full lg:h-fit lg:grid lg:grid-cols-[3.5fr,3.5fr,3.5fr,1fr] py-8 text-secondary border-t-[1px] border-solid border-secondaryOpacity3 justify-start items-start lg:items-center',
			)}
		>
			<Heading
				as="h3"
				className="font-normal text-2xl md:text-[32px] pb-3 lg:pb-0"
			>
				{title}
			</Heading>
			<div className="flex flex-col items-start justify-center">
				<Paragraph className="text-sm text-secondaryOpacity4 pb-[5px] md:pb-2">
					{locationText}
				</Paragraph>
				<Paragraph className="text-base md:text-xl pb-8 lg:pb-0">
					{location}
				</Paragraph>
			</div>
			<div className="flex flex-row gap-x-8 pb-8 lg:pb-0">
				<div className="flex flex-col items-start justify-center">
					<Paragraph className="text-sm text-secondaryOpacity4 pb-2">
						{postingText}
					</Paragraph>
					<Paragraph className="text-xl">
						{Time(startDate).format('DD.MM.YYYY')}
					</Paragraph>
				</div>
				<div className="flex flex-col items-start justify-center">
					<Paragraph className="text-sm text-secondaryOpacity4 pb-2">
						{closingText}
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
				{viewText}
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
