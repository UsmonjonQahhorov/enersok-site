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
			<section className="bg-backgroundImage1 relative">
				<Container className="pt-[164px] pb-5 relative z-10">
					<Breadcrumbs
						textHome={'Main'}
						textPage={'News'}
						urlHome={RouterConfig.Home}
						urlPage={RouterConfig.News}
					/>
					<Heading className="!leading-[normal] text-secondary uppercase py-8 lg:pt-[170px] lg:pb-[105px] text-[32px] lg:text-[100px]">
						Our news
					</Heading>
				</Container>
				<Image
					src={Factory}
					alt="Banner Enersok"
					className="absolute hidden lg:block bottom-0 right-[122px]"
					priority={true}
				/>
			</section>
			<section>
				<Container className="flex flex-col gap-y-20 py-12 sm:py-16">
					<div className="hidden lg:grid lg:grid-cols-3 gap-x-5">
						<NewCard
							title="Enersok FE LLC was formed in 2022"
							date="05.08. 2024"
							image={{
								width: News.width,
								height: News.height,
								url: News.src,
								name: 'News',
							}}
							time="5 min"
							url=''
						/>
						<NewCard
							title="Enersok FE LLC was formed in 2022"
							date="05.08. 2024"
							image={{
								width: News.width,
								height: News.height,
								url: News.src,
								name: 'News',
							}}
							time="5 min"
							url=''
						/>
						<NewCard
							title="Enersok FE LLC was formed in 2022"
							date="05.08. 2024"
							image={{
								width: News.width,
								height: News.height,
								url: News.src,
								name: 'News',
							}}
							time="5 min"
							url=''
						/>
					</div>
					<div className="hidden lg:grid lg:grid-cols-2 gap-x-5">
						<NewCard
							title="Enersok FE LLC was formed in 2022"
							date="05.08. 2024"
							image={{
								width: News.width,
								height: News.height,
								url: News.src,
								name: 'News',
							}}
							time="5 min"
							className="[&>div>img]:max-h-[385px]"
							url=''
						/>
						<NewCard
							title="Enersok FE LLC was formed in 2022"
							date="05.08. 2024"
							image={{
								width: News.width,
								height: News.height,
								url: News.src,
								name: 'News',
							}}
							time="5 min"
							className="[&>div>img]:max-h-[385px]"
							url=''
						/>
					</div>
					<div className="hidden lg:grid lg:grid-cols-3 gap-x-5">
						<NewCard
							title="Enersok FE LLC was formed in 2022"
							date="05.08. 2024"
							image={{
								width: News.width,
								height: News.height,
								url: News.src,
								name: 'News',
							}}
							time="5 min"
							url=''
						/>
						<NewCard
							title="Enersok FE LLC was formed in 2022"
							date="05.08. 2024"
							image={{
								width: News.width,
								height: News.height,
								url: News.src,
								name: 'News',
							}}
							time="5 min"
							url=''
						/>
						<NewCard
							title="Enersok FE LLC was formed in 2022"
							date="05.08. 2024"
							image={{
								width: News.width,
								height: News.height,
								url: News.src,
								name: 'News',
							}}
							time="5 min"
							url=''
						/>
					</div>
					<div className='grid grid-cols-1 sm:grid-cols-2 gap-y-12 sm:gap-5 lg:hidden'>
						<NewCard
							title="Enersok FE LLC was formed in 2022"
							date="05.08. 2024"
							image={{
								width: News.width,
								height: News.height,
								url: News.src,
								name: 'News',
							}}
							time="5 min"
							url=''
						/>
						<NewCard
							title="Enersok FE LLC was formed in 2022"
							date="05.08. 2024"
							image={{
								width: News.width,
								height: News.height,
								url: News.src,
								name: 'News',
							}}
							time="5 min"
							url=''
						/>
						<NewCard
							title="Enersok FE LLC was formed in 2022"
							date="05.08. 2024"
							image={{
								width: News.width,
								height: News.height,
								url: News.src,
								name: 'News',
							}}
							time="5 min"
							url=''
						/>
						<NewCard
							title="Enersok FE LLC was formed in 2022"
							date="05.08. 2024"
							image={{
								width: News.width,
								height: News.height,
								url: News.src,
								name: 'News',
							}}
							time="5 min"
							url=''
						/>
						<NewCard
							title="Enersok FE LLC was formed in 2022"
							date="05.08. 2024"
							image={{
								width: News.width,
								height: News.height,
								url: News.src,
								name: 'News',
							}}
							time="5 min"
							url=''
						/>
						<NewCard
							title="Enersok FE LLC was formed in 2022"
							date="05.08. 2024"
							image={{
								width: News.width,
								height: News.height,
								url: News.src,
								name: 'News',
							}}
							time="5 min"
							url=''
						/>
						<NewCard
							title="Enersok FE LLC was formed in 2022"
							date="05.08. 2024"
							image={{
								width: News.width,
								height: News.height,
								url: News.src,
								name: 'News',
							}}
							time="5 min"
							url=''
						/>
					</div>
				</Container>
			</section>
		</>
	);
};

export default NewsPage;
