import { cn } from '@/utils/cn';
import Image, { type StaticImageData } from 'next/image';
import type { FC } from 'react';
import { Heading } from '../Heading';
import { Paragraph } from '../Paragraph';

export const EmployeeCard: FC<EmployeeCardProps> = ({
    image,
    job,
    name,
    className,
    alt
}) => {
    return (
        <div className={cn(className, 'flex flex-col gap-y-3')}>
            <div className='rounded-xl w-full h-full'>
                <Image
                    src={image}
                    alt={alt}
                    className='object-cover rounded-xl min-h-[371px] w-full h-full'
                />
            </div>
            <Heading as='h5' className='pt-5 text-[32px] leading-[34px] font-normal text-secondary hover:text-secondary/85'>{name}</Heading>
            <Paragraph className='text-base leading-[18px] font-normal text-secondary hover:text-secondary/85'>{job}</Paragraph>
        </div>
    )
}

interface EmployeeCardProps {
    className?: string;
    image: StaticImageData;
    alt: string;
    name: string;
    job: string;
}