import { cn } from '@/utils/cn';
import Link from 'next/link';
import type { FC } from 'react';
import { Paragraph } from '../Paragraph';
import Document from './../../../../public/document.svg';
import Download from './../../../../public/download.svg';
import Image from 'next/image';

export const DownloadFile: FC<DownloadFileProps> = ({
    className,
    text,
    url
}) => {
    return (
        <div className={cn(className, 'p-8 border-[1px] border-solid border-secondaryOpacity3 rounded-xl flex justify-between items-center')}>
            <div className='w-full flex gap-x-8 justify-start items-center'>
                <Image
                    src={Document}
                    alt={'Enersok Document'}
                />
                <Paragraph>{text}</Paragraph>
            </div>
            <Link className='p-6 rounded-full bg-download' href={url} target='_blank'>
                <Image
                    src={Download}
                    alt={'Enersok Download File'}
                />
            </Link>
        </div>
    )
}

interface DownloadFileProps {
    className?: string;
    url: string;
    text: string;
}