import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { RouterConfig } from '@/configs/router.config';
import type { PageType } from '@/types/component.types';
import Image from 'next/image';
import Factory from '@public/facroty.png';
import { NewCard } from '@/components/ui/NewCard';
import News from '@public/news.png';

const NewsPage: PageType = () => {
    return (
        <>
            <section className='bg-backgroundImage1 relative'>
                <Container className='pt-[164px] pb-5'>
                    <Breadcrumbs
                        textHome={'Main'}
                        textPage={'News'}
                        urlHome={RouterConfig.Home}
                        urlPage={RouterConfig.News}
                    />
                    <Heading className='!leading-[normal] text-secondary uppercase pt-[170px] pb-[105px] text-[100px]'>
                        Our news
                    </Heading>
                </Container>
                <Image
                    src={Factory}
                    alt="Banner Enersok"
                    className='absolute bottom-0 right-[122px]'
                    priority={true}
                />
            </section>
            <section>
                <Container className='flex flex-col gap-y-20 py-16'>
                    <div className='grid grid-cols-3 gap-x-5'>
                        <NewCard
                            title='Enersok FE LLC was formed in 2022'
                            date='05.08. 2024'
                            image={News}
                            time='5 min'
                        />
                        <NewCard
                            title='Enersok FE LLC was formed in 2022'
                            date='05.08. 2024'
                            image={News}
                            time='5 min'
                        />
                        <NewCard
                            title='Enersok FE LLC was formed in 2022'
                            date='05.08. 2024'
                            image={News}
                            time='5 min'
                        />
                    </div>
                    <div className='grid grid-cols-2 gap-x-5'>
                        <NewCard
                            title='Enersok FE LLC was formed in 2022'
                            date='05.08. 2024'
                            image={News}
                            time='5 min'
                            className='[&>div>img]:max-h-[385px]'
                        />
                        <NewCard
                            title='Enersok FE LLC was formed in 2022'
                            date='05.08. 2024'
                            image={News}
                            time='5 min'
                            className='[&>div>img]:max-h-[385px]'
                        />
                    </div>
                    <div className='grid grid-cols-3 gap-x-5'>
                        <NewCard
                            title='Enersok FE LLC was formed in 2022'
                            date='05.08. 2024'
                            image={News}
                            time='5 min'
                        />
                        <NewCard
                            title='Enersok FE LLC was formed in 2022'
                            date='05.08. 2024'
                            image={News}
                            time='5 min'
                        />
                        <NewCard
                            title='Enersok FE LLC was formed in 2022'
                            date='05.08. 2024'
                            image={News}
                            time='5 min'
                        />
                    </div>
                </Container>
            </section>
        </>
    )
}

export default NewsPage;