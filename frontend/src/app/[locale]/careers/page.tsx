import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { RouterConfig } from '@/configs/router.config';
import type { PageType } from '@/types/component.types';
import Image from 'next/image';
import Factory from './../../../../public/facroty.png';
import Banner from './../../../../public/vacancy-banner.png';
import { Paragraph } from '@/components/ui/Paragraph';
import { CareerCard } from '@/components/ui/CareerCard';

const CareersPage: PageType = () => {
    return (
        <>
            <section className='bg-backgroundImage1 relative overflow-hidden'>
                <Container className='pt-[164px] pb-11 grid grid-cols-2'>
                    <div>
                        <Breadcrumbs
                            textHome={'Main'}
                            textPage={'Careers'}
                            urlHome={RouterConfig.Home}
                            urlPage={RouterConfig.Careers}
                        />
                        <Heading className='!leading-[normal] text-secondary uppercase py-[75px] text-[100px]'>
                            Careers
                        </Heading>
                        <div className='pt-10 border-t-[1px] border-solid border-secondaryOpacity3 pb-40'>
                            <Heading className='text-3xl font-normal text-secondary mb-3'>For a brighter future with us!</Heading>
                            <Paragraph className='text-xl font-normal text-secondary'>If you're looking for a fulfilling career where your work truly matters, we invite you to explore opportunities with us. Together, we can create a brighter future!</Paragraph>
                        </div>
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
                <Container>
                    <Paragraph size='2xl' className='w-full pb-7 whitespace-[10px] py-[50px] text-secondary'>Construction period started in March 2023 and the COD (Commercial Operating Date) should be reach in June 2026. That means the plant will be fully operational with two gas turbines and one steam turbine in combined cycle configuration.</Paragraph>
                    <Heading className='text-secondary uppercase font-normal text-[64px] pt-20 pb-8'>Latest Vacancies</Heading>
                    <div className='grid grid-cols-1'>
                        <CareerCard
                            title='Finance Controller'
                            location='Tashkent Headquarters'
                            startDate='01.05.2024'
                            endDate='30.08.2024'
                            url='/'
                        />
                        <CareerCard
                            title='HSE Director'
                            location='On-site, Syrdarya'
                            startDate='25.07.2024'
                            endDate='30.08.2024'
                            url='/'
                        />
                        <CareerCard
                            title='Finance Controller'
                            location='Tashkent Headquarters'
                            startDate='01.05.2024'
                            endDate='30.08.2024'
                            url='/'
                        />
                        <CareerCard
                            title='HSE Director'
                            location='On-site, Syrdarya'
                            startDate='25.07.2024'
                            endDate='30.08.2024'
                            url='/'
                        />
                        <CareerCard
                            title='Finance Controller'
                            location='Tashkent Headquarters'
                            startDate='01.05.2024'
                            endDate='30.08.2024'
                            url='/'
                        />
                        <CareerCard
                            title='HSE Director'
                            location='On-site, Syrdarya'
                            startDate='25.07.2024'
                            endDate='30.08.2024'
                            url='/'
                        />
                        <CareerCard
                            title='Finance Controller'
                            location='Tashkent Headquarters'
                            startDate='01.05.2024'
                            endDate='30.08.2024'
                            url='/'
                        />
                        <CareerCard
                            title='HSE Director'
                            location='On-site, Syrdarya'
                            startDate='25.07.2024'
                            endDate='30.08.2024'
                            url='/'
                        />
                    </div>
                </Container>
            </section>
        </>
    )
}

export default CareersPage;
