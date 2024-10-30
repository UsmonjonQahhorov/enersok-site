import { cn } from '@/utils/cn';
import type { FC } from 'react';
import { Heading } from '../Heading';
import { Paragraph } from '../Paragraph';
import Link from 'next/link';

export const CareerCard: FC<CareerCardProps> = ({
    endDate,
    location,
    startDate,
    title,
    url,
    className
}) => {
    return (
        <div className={cn(className, 'grid grid-cols-[3.5fr,3.5fr,3.5fr,1fr] py-8 text-secondary border-t-[1px] border-solid border-secondaryOpacity3 items-center')}>
            <Heading as='h4' className='font-normal text-[32px]'>{title}</Heading>
            <div className='flex flex-col items-start justify-center'>
                <Paragraph className='text-sm text-secondaryOpacity4 pb-2'>Location</Paragraph>
                <Paragraph className='text-xl'>{location}</Paragraph>
            </div>
            <div className='flex flex-row gap-x-8'>
                <div className='flex flex-col items-start justify-center'>
                    <Paragraph className='text-sm text-secondaryOpacity4 pb-2'>Posting Date</Paragraph>
                    <Paragraph className='text-xl'>{startDate}</Paragraph>
                </div>
                <div className='flex flex-col items-start justify-center'>
                    <Paragraph className='text-sm text-secondaryOpacity4 pb-2'>Closing Date</Paragraph>
                    <Paragraph className='text-xl'>{endDate}</Paragraph>
                </div>
            </div>
            <Link className='w-fit bg-button1 text-lg text-white py-4 px-9 rounded-[100px]' href={url}>
                View
            </Link>
        </div>
    )
}

interface CareerCardProps {
    className?: string;
    title: string;
    location: string;
    startDate: string;
    endDate: string;
    url: string;
}