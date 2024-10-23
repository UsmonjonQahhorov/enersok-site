import Image from 'next/image';
import type { FC } from 'react';
import Logo from './../../public/logo-white.png';
import Telegram from './../../public/socials/telegram.svg';
import LinkedIn from './../../public/socials/linked-in.svg';
import Email from './../../public/footer-icons/email.svg';
import Phone from './../../public/footer-icons/phone.svg';
import Time from './../../public/footer-icons/time.svg';
import Location from './../../public/footer-icons/location.svg';
import { cn } from '@/utils/cn';
import Link from 'next/link';
import { Paragraph } from '@/components/ui/Paragraph';
import { Container } from '@/components/ui/Container';
import { RouterConfig } from '@/configs/router.config';
import { SocialIcon } from '@/components/ui/SocialIcon';

export const Footer: FC<FooterProps> = ({
    className
}) => {
    return (
        <footer className={cn(className, 'bg-footer')}>
            <Container className='flex flex-col'>
                <div className={'w-full grid grid-cols-[1fr,1fr,2fr] gap-x-80 py-24 border-b border-[rgba(255,_255,_255,_0.12)]'}>
                    <Link href={RouterConfig.Home}>
                        <Image
                            src={Logo}
                            alt='Enersok Footer Logo'
                            priority={true}
                            className='w-[195px] h-fit'
                        />
                    </Link>
                    <ul className='flex flex-col text-left gap-y-1'>
                        <li>
                            <Link className='text-2xl text-white font-normal' href={RouterConfig.AboutCompany}>About Company</Link>
                        </li>
                        <li>
                            <Link className='text-2xl text-white font-normal' href={RouterConfig.AboutSponsors}>About Sponsors </Link>
                        </li>
                        <li>
                            <Link className='text-2xl text-white font-normal' href={RouterConfig.ProjectDetails}>Project</Link>
                        </li>
                        <li>
                            <Link className='text-2xl text-white font-normal' href={RouterConfig.OpenData}>Open Data</Link>
                        </li>
                        <li>
                            <Link className='text-2xl text-white font-normal' href={RouterConfig.News}>News</Link>
                        </li>
                        <li>
                            <Link className='text-2xl text-white font-normal' href={RouterConfig.Careers}>Careers</Link>
                        </li>
                        <li>
                            <Link className='text-2xl text-white font-normal' href={RouterConfig.ContactUs}>Contacts</Link>
                        </li>
                    </ul>
                    <ul className='flex flex-col gap-y-4'>
                        <li>
                            <Link className={'flex flex-row items-start gap-x-1'} href={'tel:+998770004594'}>
                                <Image
                                    alt='Phone Enersok'
                                    src={Phone}
                                    width={16}
                                    height={16}
                                    className='w-4 h-4'
                                />
                                <span className='w-full text-white text-base leading-5'>+998 77 000 45 94</span>
                            </Link>
                        </li>
                        <li>
                            <Link className={'flex flex-row items-start gap-x-1'} href={'mailto:info@enersok.uz'}>
                                <Image
                                    alt='Email Enersok'
                                    src={Email}
                                    width={16}
                                    height={16}
                                    className='w-4 h-4'
                                />
                                <span className='w-full text-white text-base leading-5'>info@enersok.uz</span>
                            </Link>
                        </li>
                        <li className='w-full'>
                            <Link className={'flex flex-row items-start gap-x-1'} href={'https://yandex.uz/maps/-/CDXJyC1C'}>
                                <Image
                                    alt='Adress Enersok'
                                    src={Location}
                                    className='w-4 h-4'
                                />
                                <span className='w-full text-white text-base leading-5'>8A Afrosiyob St., Mirabad District, Tashkent city, Uzbekistan, Dmaar Business Center</span>
                            </Link>
                        </li>
                        <li>
                            <Paragraph className={'flex flex-row items-start gap-x-1'}>
                                <Image
                                    alt='Time Work Enersok'
                                    src={Time}
                                    width={16}
                                    height={16}
                                    className='w-4 h-4'
                                />
                                <span className='w-full text-white text-base leading-5'>Office hours: Monday - Friday From 9:00 to 18:00</span>
                            </Paragraph>
                        </li>
                    </ul>
                </div>
                <div className='pt-4 pb-[100px] flex justify-between items-center'>
                    <Paragraph size='sm' className='text-white '>© 2024 Enersok</Paragraph>
                    <ul className='flex gap-x-3'>
                        <li>
                            <SocialIcon
                                url={'https://t.me/SYRDARYA_CCGT_2'}
                                src={Telegram}
                                alt={'Enersok Telegram'}
                            />
                        </li>
                        <li>
                            <SocialIcon
                                url={'http://www.linkedin.com/company/enersok-fe-llc'}
                                src={LinkedIn}
                                alt={'Enersok LinkedIn'}
                            />
                        </li>
                    </ul>
                </div>
            </Container>
        </footer>
    )
}

interface FooterProps {
    className?: string;
}