import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import type { PageType } from '@/types/component.types';
import Image from 'next/image';
import Factory from '@public/facroty.png';
import Banner from '@public/vacancy-banner.png';
import AboutBanner1 from '@public/about.png';
import AboutBanner2 from '@public/about2.jpg';
import Development from '@public/development.png';
import About1 from '@public/about-icons/about1.svg';
import About2 from '@public/about-icons/about2.svg';
import { RouterConfig } from '@/configs/router.config';
import { Paragraph } from '@/components/ui/Paragraph';

const AboutCompanyPage: PageType = () => {
    return (
        <>
            <section className='bg-backgroundImage1 relative overflow-hidden'>
                <Container className='pt-[164px] pb-11 grid grid-cols-2'>
                    <div>
                        <Breadcrumbs
                            textHome={'Main'}
                            textPage={'About Company'}
                            urlHome={RouterConfig.Home}
                            urlPage={RouterConfig.AboutCompany}
                        />
                        <Heading className='!leading-[normal] text-secondary uppercase pt-[175px] pb-8 text-[100px]'>
                            About Company
                        </Heading>
                        <Paragraph className='text-lg font-normal text-secondary mb-3 pb-[140px] pr-[15%]'>Enersok FE LLC was formed in 2022 by the Consortium of Electricite De France (EDF), Nebras Power (Qatar), Sojitz Corporation and Kyuden International (Japan), which entered into public-private partnership agreement for construction of a Gas Combined Cycle Power Plant with capacity of 1,6 GW in Syrdarya region, Uzbekistan (On March 25, 2022). </Paragraph>
                    </div>
                    <div className='relative z-10 pl-14'>
                        <Image
                            src={Banner}
                            alt='Careers Banner Enersok'
                            className='object-cover object-center rounded-xl h-full'
                            priority={true}
                        />
                    </div>
                </Container>
                <Image
                    src={Factory}
                    alt="Banner Enersok"
                    className='absolute bottom-0 right-[-100px] z-[1]'
                    priority={true}
                />
            </section>
            <section>
                <Container className='grid grid-cols-2 gap-x-[84px] py-[162px]'>
                    <div className='rounded-xl w-full h-full'>
                        <Image
                            src={AboutBanner1}
                            alt='About Enersok'
                            className='object-cover object-center w-full h-full rounded-xl'
                        />
                    </div>
                    <div>
                        <Heading as='h3' className='text-[64px] text-secondary uppercase !leading-[normal] py-10'>New Power Plant in Uzbekistan</Heading>
                        <div className='flex flex-col gap-y-11 text-secondary pb-20'>
                            <Paragraph className='text-lg'>The key purpose of the Company is to carry out construction,  operation and maintenance activities in future. The commercial operation date is expected in 2026.</Paragraph>
                            <Paragraph className='text-lg'>The electricity produced will be sold to Uzbek state-owned power company JSC National Electricity Grid of Uzbekistan for a duration of 25 years.</Paragraph>
                            <Paragraph className='text-lg'>It will be one of the nation’s largest power generating facilities upon completion and will be instrumental in helping the country meet its growing energy demands from both industry and residential sectors.</Paragraph>
                        </div>
                    </div>
                </Container>
            </section>
            <section>
                <Container className='pb-[140px]'>
                    <Heading as='h3' className='w-2/5 text-secondary text-[64px] !leading-[normal] pb-[50px]'>VIEW AT ENERSOK DEVELOPMENT</Heading>
                    <div className='grid grid-cols-4 gap-x-5'>
                        <div className='flex flex-col pl-5 border-l-[1px] border-solid border-secondaryOpacity3 gap-y-8 h-fit'>
                            <Heading as='h4' className='text-[80px] text-button1 uppercase'>2022</Heading>
                            <Paragraph className='text-2xl text-secondary relative before:absolute before:top-[8px] before:left-[-24px] before:content-["_"] before:w-2 before:h-2 before:bg-green-500 before:rounded-full'>Establishment of the Company</Paragraph>
                            <Paragraph className='text-2xl text-secondary relative before:absolute before:top-[8px] before:left-[-24px] before:content-["_"] before:w-2 before:h-2 before:bg-green-500 before:rounded-full'>Establishment of the Company</Paragraph>
                            <div className='w-full h-full rounded-xl'>
                                <Image
                                    src={Development}
                                    alt='Development 1 Eneksok'
                                    className='rounded-xl w-full max-h-[208px] object-cover object-center'
                                />
                            </div>
                        </div>
                        <div className='flex flex-col pl-5 border-l-[1px] border-solid border-secondaryOpacity3 gap-y-8 mt-[100px] h-fit'>
                            <Heading as='h4' className='text-[80px] text-button1 uppercase'>2023</Heading>
                            <Paragraph className='text-2xl text-secondary relative before:absolute before:top-[8px] before:left-[-24px] before:content-["_"] before:w-2 before:h-2 before:bg-green-500 before:rounded-full'>Start of Construction of Combined-cycle Gas Turbine Station</Paragraph>
                            <Paragraph className='text-2xl text-secondary relative before:absolute before:top-[8px] before:left-[-24px] before:content-["_"] before:w-2 before:h-2 before:bg-green-500 before:rounded-full'>Start of Construction of Combined-cycle Gas Turbine Station</Paragraph>
                            <div className='w-full h-full rounded-xl'>
                                <Image
                                    src={Development}
                                    alt='Development 1 Eneksok'
                                    className='rounded-xl w-full max-h-[208px] object-cover object-center'
                                />
                            </div>
                        </div>
                        <div className='flex flex-col pl-5 border-l-[1px] border-solid border-secondaryOpacity3 gap-y-8 h-fit'>
                            <Heading as='h4' className='text-[80px] text-button1 uppercase'>2026</Heading>
                            <Paragraph className='text-2xl text-secondary relative before:absolute before:top-[8px] before:left-[-24px] before:content-["_"] before:w-2 before:h-2 before:bg-green-500 before:rounded-full'>Commercial Operation Start</Paragraph>
                            <Paragraph className='text-2xl text-secondary relative before:absolute before:top-[8px] before:left-[-24px] before:content-["_"] before:w-2 before:h-2 before:bg-green-500 before:rounded-full'>Commercial Operation Start</Paragraph>
                            <Paragraph className='text-2xl text-secondary relative before:absolute before:top-[8px] before:left-[-24px] before:content-["_"] before:w-2 before:h-2 before:bg-green-500 before:rounded-full'>Commercial Operation Start</Paragraph>
                            <div className='w-full h-full rounded-xl'>
                                <Image
                                    src={Development}
                                    alt='Development 1 Eneksok'
                                    className='rounded-xl w-full max-h-[208px] object-cover object-center'
                                />
                            </div>
                        </div>
                        <div className='flex flex-col pl-5 border-l-[1px] border-solid border-secondaryOpacity3 gap-y-8 mt-[100px] h-fit'>
                            <Heading as='h4' className='text-[80px] text-button1 uppercase'>Future</Heading>
                            <Paragraph className='text-2xl text-secondary relative before:absolute before:top-[8px] before:left-[-24px] before:content-["_"] before:w-2 before:h-2 before:bg-green-500 before:rounded-full'>Establishment of the Company</Paragraph>
                            <Paragraph className='text-2xl text-secondary relative before:absolute before:top-[8px] before:left-[-24px] before:content-["_"] before:w-2 before:h-2 before:bg-green-500 before:rounded-full'>Establishment of the Company</Paragraph>
                            <div className='w-full h-full rounded-xl'>
                                <Image
                                    src={Development}
                                    alt='Development 1 Eneksok'
                                    className='rounded-xl w-full max-h-[208px] object-cover object-center'
                                />
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
            <section>
                <Container className='grid grid-cols-2 gap-x-5 pb-[200px]'>
                    <div className='bg-backgroundImage5 p-8 rounded-xl flex flex-col justify-between'>
                        <div>
                            <Heading as='h3' className='text-[64px] text-secondary uppercase pb-8 border-b-[1px] border-solid border-secondaryOpacity3'>Our Vision</Heading>
                            <div className='pt-8 pb-4 flex flex-col'>
                                <div className='flex w-fit min-w-12 h-12 items-center justify-center bg-button1 rounded-xl'>
                                    <Image
                                        src={About1}
                                        alt='AFs1 Enersok'
                                    />
                                </div>
                            </div>
                            <Paragraph className='text-secondary text-2xl !leading-[normal] pb-[120px]'>to be activily part of uzbek energy transition by building and operating a reliable and efficiant asset</Paragraph>
                        </div>
                        <div className='w-full h-fit rounded-xl'>
                            <Image
                                src={AboutBanner2}
                                alt='Banner2 Eneksok'
                                className='w-full max-h-[283px] object-cover object-center rounded-xl'
                            />
                        </div>
                    </div>
                    <div className='bg-backgroundImage5 p-8 rounded-xl flex flex-col justify-between'>
                        <div>
                            <Heading as='h3' className='text-[64px] text-secondary uppercase pb-8 border-b-[1px] border-solid border-secondaryOpacity3'>Our Objective</Heading>
                            <div className='pt-8 pb-4 flex flex-col'>
                                <div className='flex w-fit min-w-12 h-12 items-center justify-center bg-button1 rounded-xl'>
                                    <Image
                                        src={About2}
                                        alt='AFs1 Enersok'
                                    />
                                </div>
                            </div>
                            <Paragraph className='text-secondary text-2xl !leading-[normal] pb-[120px]'>to reach c.o.d. in safety (hse), on time, according to the budget and with high level of performances</Paragraph>
                        </div>
                        <div className='w-full h-fit rounded-xl'>
                            <Image
                                src={AboutBanner2}
                                alt='Banner2 Eneksok'
                                className='w-full max-h-[283px] object-cover object-center rounded-xl'
                            />
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default AboutCompanyPage;