import { cn } from '@/utils/cn';
import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';

export const SocialIcon: FC<SocialIconProps> = ({
    alt,
    src,
    className,
    color = 'white',
}) => {
    return (
        <Link className={cn(className, 'w-12 h-12 rounded-full border flex justify-center items-center')} target='_blank' href={src}>
            <Image
                src={src}
                alt={alt}
                className={cn(
                    'w-[13px] height-[13px]',
                    {
                        'fill-white': color === 'white',
                        'fill-black': color === 'black'
                    }
                )}
            />
        </Link>
    )
}

interface SocialIconProps {
    className?: string;
    src: string;
    alt: string;
    color?: 'white' | 'black';
}