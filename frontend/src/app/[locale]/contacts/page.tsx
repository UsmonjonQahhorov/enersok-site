import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import type { PageType } from '@/types/component.types';
import Image from 'next/image';
import Factory from './../../../../public/facroty.png';
import { RouterConfig } from '@/configs/router.config';
import { Map } from '@/components/ui/Map';
import { Paragraph } from '@/components/ui/Paragraph';
import Link from 'next/link';
import { SocialIcon } from '@/components/ui/SocialIcon';
import Telegram from './../../../../public/socials/telegram.svg';
import LinkedIn from './../../../../public/socials/linked-in.svg';

const ContactsPage: PageType = () => {
    return (
        <>
            <section className='bg-backgroundImage1 relative overflow-hidden'>
                <Container className='pt-[164px] pb-5'>
                    <Breadcrumbs
                        textHome={'Main'}
                        textPage={'Contact us'}
                        urlHome={RouterConfig.Home}
                        urlPage={RouterConfig.ContactUs}
                    />
                    <Heading className='!leading-[normal] text-secondary uppercase py-[75px] text-[100px]'>
                        Contact us
                    </Heading>
                </Container>
                <Image
                    src={Factory}
                    alt="Banner Enersok"
                    className='absolute bottom-[-100px] right-[122px] z-[1]'
                    priority={true}
                />
            </section>
            <section>
                <Container className='pt-[95px] pb-[142px] grid grid-cols-[4.5fr,5.5fr] gap-x-[100px] items-center'>
                    <div className='flex flex-col gap-y-8 py-5'>
                        <Heading className='text-secondary text-[48px] pb-6'>GET IN TOUCH WITH US</Heading>
                        <ul className='flex flex-col gap-y-8'>
                            <li>
                                <Paragraph className='text-secondaryOpacity5 text-base font-normal pb-1'>Phone:</Paragraph>
                                <Link className='text-secondary text-2xl font-normal' href={'tel:+998770004594'}>+998 77 000 45 94</Link>
                            </li>
                            <li>
                                <Paragraph className='text-secondaryOpacity5 text-base font-normal pb-1'>Email:</Paragraph>
                                <Link className='text-secondary text-2xl font-normal' href={'mailto:info@enersok.uz'}>info@enersok.uz</Link>
                            </li>
                            <li>
                                <Paragraph className='text-secondaryOpacity5 text-base font-normal pb-1'>Office hours: </Paragraph>
                                <Paragraph className='text-secondary text-2xl font-normal'>From 9:00 to18:00</Paragraph>
                            </li>
                            <li>
                                <Paragraph className='text-secondaryOpacity5 text-base font-normal pb-1'>Address:</Paragraph>
                                <Paragraph className='text-secondary text-2xl font-normal'>8A Afrosiyob St., Mirabad District, Tashkent city, Uzbekistan, Dmaar Business Center</Paragraph>
                            </li>
                        </ul>
                        <ul className='flex gap-x-3'>
                            <li>
                                <SocialIcon
                                    url={'https://t.me/SYRDARYA_CCGT_2'}
                                    src={Telegram}
                                    alt={'Enersok Telegram'}
                                    black={true}
                                />
                            </li>
                            <li>
                                <SocialIcon
                                    url={'http://www.linkedin.com/company/enersok-fe-llc'}
                                    src={LinkedIn}
                                    alt={'Enersok LinkedIn'}
                                    black={true}
                                />
                            </li>
                        </ul>
                    </div>
                    <Map
                        mapUrl='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11989.779237692348!2d69.2715032!3d41.2991861!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bdc89f27f6b%3A0x49989a739be2f0e5!2sDmaar%20plaza!5e0!3m2!1sru!2s!4v1729716140669!5m2!1sru!2s'
                    />
                </Container>
            </section>
        </>
    )
}

export default ContactsPage;