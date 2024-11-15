import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Paragraph } from '@/components/ui/Paragraph';
import { RouterConfig } from '@/configs/router.config';
import type { PageType } from '@/types/component.types';
import Image from 'next/image';
import Time from '@public/time.svg';
import Banner from '@public/image (1).png';
import News from '@public/news.png';
import Telegram from '@public/socials/telegram.svg';
import LinkedIn from '@public/socials/linked-in.svg';
import { SocialIcon } from '@/components/ui/SocialIcon';
import { cn } from '@/utils/cn';
import EmblaCarousel from '@/components/navigation/EmblaSlider/EmblaSlider';
import { NewCard } from '@/components/ui/NewCard';

const SingleNewPage: PageType = () => {
	return (
		<>
			<section className="bg-backgroundImage1 relative">
				<Container className="pt-[104px] sm:pt-[164px] pb-5 flex flex-col items-center">
					<Breadcrumbs
						textHome={'Main'}
						textPage={'News'}
						urlHome={RouterConfig.Home}
						urlPage={RouterConfig.News}
						className="self-start"
					/>
					<Heading className="!leading-[normal] text-wrap text-secondary uppercase py-8 lg:pt-[75px] lg:pb-[35px] text-[32px] lg:text-[80px] xl:w-3/4">
						Entered into public-private partnership
					</Heading>
					<div className="w-full xl:w-3/4 flex flex-row gap-x-6 relative pb-[137px] lg:pb-[253px]">
						<Paragraph>05.08. 2024</Paragraph>
						<div className="flex flex-row gap-x-2 items-center">
							<Image src={Time} alt="Time Icon Enersok" className="w-4 h-4" />
							<Paragraph className="!leading-[normal]">5 min</Paragraph>
						</div>
						<div className="absolute top-14 w-full h-full min-h-[200px] sm:min-h-[350px] lg:min-h-[525px] rounded-xl">
							<Image
								src={Banner}
								alt="Banner Enersok"
								className="w-full h-full object-cover object-center rounded-xl"
							/>
						</div>
					</div>
				</Container>
			</section>
			<section>
				<Container className="pt-[155px] sm:pt-[305px] lg:pt-[405px] flex flex-col items-center">
					<div
						className={cn(
							'xl:w-3/4 pb-[26px] flex flex-col gap-y-6 text-secondary',
							'[&>p]:lg:text-xl [&>p]:lg:pb-6 [&>p]:text-wrap',
							'[&>p]:text-base [&>p]:pb-6',
							'[&>h1]:lg:text-7xl [&>h2]:lg:text-6xl [&>h3]:lg:text-5xl [&>h4]:lg:text-4xl [&>h5]:lg:text-3xl [&>h6]:lg:text-2xl',
							'[&>h1]:text-5xl [&>h2]:text-4xl [&>h3]:text-[32px] [&>h4]:text-2xl [&>h5]:text-xl [&>h6]:text-lg',
							'[&>ul>li]:relative [&>ul>li]:lg:text-xl [&>ul>li]:text-base [&>ul>li]:pb-3 [&>ul>li]:pl-[18px] [&>ul>li]:whitespace-pre-line [&>ul>li]:before:absolute [&>ul>li]:before:w-[9px] [&>ul>li]:before:h-[9px] [&>ul>li]:before:left-0 [&>ul>li]:before:top-[7px] [&>ul>li]:before:rounded-full [&>ul>li]:before:bg-button1 [&>ul>li]:text-wrap',
							'[&>blockquote]:p-12 [&>blockquote]:rounded-xl [&>blockquote]:bg-[#F2F7FA] [&>blockquote]:lg:text-3xl [&>blockquote]:text-2xl [&>blockquote]:text-wrap',
						)}
					>
						<p>
							In 2022, Enersok FE LLC was established as a result of a
							collaboration between four international corporations. The
							consortium that founded Enersok FE LLC consists of Electricite De
							France (EDF), a French energy giant, Nebras Power from Qatar, and
							Japanese corporations Sojitz Corporation and Kyuden International.
							Each of these participants brings extensive experience and
							influence in the energy sector, providing a strong foundation for
							the development of the new company.
						</p>
						<h3>Key Members of the Consortium</h3>
						<ul>
							<li>
								<b>Electricite De France (EDF)</b> – One of the largest energy
								players in the world. The French corporation specializes in
								electricity production, including nuclear, hydroelectric, and
								renewable energy.
							</li>
							<li>
								<b>Nebras Power</b> – A Qatari company that invests in global
								energy projects, focusing on long-term sustainability.
							</li>
							<li>
								<b>Sojitz Corporation</b> – A diversified Japanese corporation
								actively involved in various industries, including energy and
								infrastructure.
							</li>
							<li>
								<b>Kyuden International</b> – The international branch of
								Japan's Kyushu Electric Power, engaged in the development of
								energy projects worldwide.
							</li>
						</ul>
						<p>
							In 2022, Enersok FE LLC was established as a result of a
							collaboration between four international corporations. The
							consortium that founded Enersok FE LLC consists of Electricite De
							France (EDF), a French energy giant, Nebras Power from Qatar, and
							Japanese corporations Sojitz Corporation and Kyuden International.
							Each of these participants brings extensive experience and
							influence in the energy sector, providing a strong foundation for
							the development of the new company.
						</p>
						<blockquote>
							In 2022, Enersok FE LLC was established as a result of a
							collaboration between four international corporations. The
							consortium that founded Enersok FE LLC consists of Electricite De
							France (EDF), a French energy giant
						</blockquote>
						<p>
							Corporation and Kyuden International. Each of these participants
							brings extensive experience and influence in the energy sector,
							providing a strong foundation for the development of the new
							company.
						</p>
					</div>
					<div className="w-full xl:w-3/4 flex flex-row items-center gap-x-3 pt-[54px] pb-20 lg:pt-[65px] lg:pb-[148px] border-t-[1px] border-solid border-secondaryOpacity3">
						<Paragraph className="pr-3 text-xl text-secondary">Share</Paragraph>
						<SocialIcon
							src={Telegram}
							url="https://t.me/SYRDARYA_CCGT_2"
							alt="Enersok Telegram"
							black={true}
						/>
						<SocialIcon
							src={LinkedIn}
							url="http://www.linkedin.com/company/enersok-fe-llc"
							alt="Enersok LinkedIn"
							black={true}
						/>
					</div>
				</Container>
			</section>
			<section className='bg-backgroundImage1'>
				<Container className='py-12 lg:py-[169px]'>
					<EmblaCarousel
						autoLoopInterval={100000}
						className='[&>div>div>div]:!flex-[0_0_100%] [&>div>div>div]:sm:!flex-[0_0_50%] [&>div>div>div]:lg:!flex-[0_0_33.3333%] [&>div:nth-of-type(1)]:mb-8 [&>div:nth-of-type(1)>div]:lg:flex [&>div:nth-of-type(1)>div]:hidden [&>a]:sm:hidden [&>a]:block'
						showCounter={false}
						slidesToShow={3}
						controlsPosition='above'
						controlsTitle='More news'
						controlsButton={{
							link: '/news',
							text: 'All news',
						}}
						slides={[
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
							/>,
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
							/>,
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
							/>,
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
							/>,
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
							/>,
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
							/>,
						]}
					/>
				</Container>
			</section>
		</>
	);
};

export default SingleNewPage;
