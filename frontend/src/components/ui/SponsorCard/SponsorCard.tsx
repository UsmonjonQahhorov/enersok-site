import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { FC } from 'react';
import { Heading } from '../Heading';
import { Paragraph } from '../Paragraph';
import { cn } from '@/utils/cn';

export const SponsorCard: FC<SponsorCardProps> = ({
    image,
    text,
    title,
    className
}) => {
    return (
        <div className={cn(className, 'bg-[#F2F7FA] min-h-[213px] px-6 py-3 h-full w-full rounded-xl flex flex-col justify-center items-center')}>
            <Image
                src={image}
                alt='Sponsor 1 Enersok'
                className='max-h-[40px] w-auto h-full'
            />
            <Heading className='text-xl text-secondary pt-8 pb-3 text-center'>{title}</Heading>
            <Paragraph className='text-2xl font-semibold text-secondary text-center'>{text}</Paragraph>
        </div>
    )
}

interface SponsorCardProps {
    className?: string;
    image: StaticImageData;
    title: string;
    text: string;
}