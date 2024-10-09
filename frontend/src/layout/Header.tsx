import Image from 'next/image';
import type { FC } from 'react';
import Logo from './../../public/logo.png';
import { Container } from '@/components/ui/Container';
import { DesktopNavigation } from './components';
import { cn } from '@/utils/cn';

export const Header: FC<HeaderProps> = ({ locale, className }) => {

    return (
        <header className={cn(className, 'py-12 bg-backgroundImage1')}>
            <Container className='flex justify-between items-center'>
                <Image
                    src={Logo}
                    alt='Enersok Header Logo'
                    priority={true}
                    className='w-[205px] h-fit'
                />
                <DesktopNavigation
                    locale={locale}
                />
            </Container>
        </header>
    )
}

interface HeaderProps {
    className?: string;
    locale: string;
}