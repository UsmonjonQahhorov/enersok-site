import { cn } from '@/utils/cn';
import Link from 'next/link';
import type { FC } from 'react';

export const Breadcrumbs: FC<BreadcrumbsProps> = ({
    className,
    textHome,
    textPage,
    urlHome,
    urlPage
}) => {
    return (
        <div className={cn(className, 'flex flex-row gap-x-3 items-center')}>
            <Link className='text-sm leading-[15px]' href={urlHome}>{textHome}</Link>
            <span className='w-[17px] h-[1px] bg-secondary' />
            <Link className='text-sm leading-[15px]' href={urlPage}>{textPage}</Link>
        </div>
    )
}

interface BreadcrumbsProps {
    className?: string;
    urlHome: string;
    urlPage: string;
    textHome: string;
    textPage: string;
}