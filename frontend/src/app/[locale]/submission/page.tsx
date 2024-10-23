import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { RouterConfig } from '@/configs/router.config';
import type { PageType } from '@/types/component.types';
import Image from 'next/image';
import Factory from './../../../../public/factory2.png';
import Banner from './../../../../public/submission-banner.png';
import { Paragraph } from '@/components/ui/Paragraph';
import { GrmSubmissionForm } from '@/components/form/GrmSubmissionForm';

const GRMSubmissionPage: PageType = () => {
    return (
        <>
            <section className='bg-backgroundImage1 relative overflow-hidden'>
                <Container className='pt-[164px] pb-5 relative z-10'>
                    <Breadcrumbs
                        textHome={'Main'}
                        textPage={'GRM Submission'}
                        urlHome={RouterConfig.Home}
                        urlPage={RouterConfig.GRMSubmission}
                    />
                    <Heading className='!leading-[normal] text-secondary uppercase pt-[75px] text-[100px]'>
                        GRM Submission
                    </Heading>
                    <Paragraph size='2xl' className='w-full pb-7 py-[30px] text-secondary'>Construction period started in March 2023 and the COD (Commercial Operating Date) should be reach in June 2026. That means the plant will be fully operational with two gas turbines and one steam turbine in combined cycle configuration.</Paragraph>
                    <div className='grid grid-cols-[6fr,4fr] gap-x-7 pb-[80px]'>
                        <GrmSubmissionForm
                            email='Your e-mail'
                            message='Message'
                            name='Your full name'
                            phone='Your phone'
                            sumbmit='Submit the form'
                        />
                        <div className='rounded-xl'>
                            <Image
                                src={Banner}
                                alt='Submission Enersok'
                                className='w-full h-full object-cover object-center rounded-xl'
                            />
                        </div>
                    </div>
                </Container>
                <Image
                    src={Factory}
                    alt="Banner Enersok"
                    className='absolute bottom-[-100px] right-[-100px] rotate-x-180 z-[1]'
                    priority={true}
                />
                <Image
                    src={Factory}
                    alt="Banner Enersok"
                    className='absolute bottom-[-20px] left-[-100px] z-[1]'
                    priority={true}
                />
            </section>
        </>
    )
}

export default GRMSubmissionPage;