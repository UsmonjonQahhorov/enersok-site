import EmblaCarousel from '@/components/navigation/EmblaSlider/EmblaSlider';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Paragraph } from '@/components/ui/Paragraph';
import { Link } from '@/i18n/routing';
import type { PageType } from '@/types/component.types';
import { cn } from '@/utils/cn';
import EcoFriendlyImage from '@public/ecoFriendly.svg';
import EnergyIcon from '@public/energy-icon.svg';
import EnergyImage from '@public/energy.svg';
import Factory from '@public/facroty.png';
import Factory2 from '@public/factory2.png';
import PeopelsImage from '@public/image (1).png';
import Image1 from '@public/image (4).png';
import Image2 from '@public/image (5).png';
import Image3 from '@public/image (6).png';
import Image4 from '@public/image (7).png';
import LinkImage from '@public/link.svg';
import StationImage from '@public/Rectangle 6.png';
import ReliabilityImage from '@public/reliability.svg';
import NextImage from 'next/image';
import { CarouselItem } from './_components/CarouselItem';
import { SponsorDonutChart } from './_components/Chart';
import { NewsCarouselItem } from './_components/NewsCarouselItem';
import { LocationSection } from './_components/LocationSection';

const HomePage: PageType = async () => {

	return (
		<>
			{/* Heading */}
			<section className="bg-backgroundImage1 relative overflow-hidden pt-[104px] sm:pt-[164px] pb-8 md:pb-[80px]">
				<Container>
					<EmblaCarousel
						className='[&>div:nth-of-type(2)]:hidden [&>div:nth-of-type(2)]:md:flex'
						autoLoopInterval={100000}
						slides={[
							<CarouselItem />,
							<CarouselItem />,
							<CarouselItem />,
							<CarouselItem />,
							<CarouselItem />,
							<CarouselItem />,
							<CarouselItem />,
							<CarouselItem />,
							<CarouselItem />,
						]}
						showCounter={true}
						controlsPosition="below"
					/>
				</Container>
				<NextImage
					src={Factory}
					alt="Banner Enersok"
					className="absolute hidden lg:block bottom-0 right-[-100px] z-[1]"
					priority={true}
				/>
			</section>

			{/* Feature section */}
			<section className="py-20 lg:pt-32 lg:pb-64">
				<Container className="grid xl:grid-cols-2 2xl:grid-cols-3 gap-y-4 gap-x-16 justify-evenly *:text-secondary">
					<div className="flex gap-7 items-center">
						<NextImage src={EcoFriendlyImage} alt="Eco-friendly" />
						<div>
							<Heading size="base" as="h3" className="mb-1 2xl:mb-3 text-2xl 2xl:text-4xl">
								Eco-Friendly
							</Heading>
							<Paragraph size="sm" className="2xl:max-w-80 md:text-lg">
								Steam energy can utilize renewable resources like biomass
							</Paragraph>
						</div>
					</div>
					<div className="flex gap-7 items-center">
						<NextImage src={EnergyImage} alt="Energy" />
						<div>
							<Heading size="base" as="h3" className="mb-1 2xl:mb-3 text-2xl 2xl:text-4xl">
								Reliability
							</Heading>
							<Paragraph size="sm" className="2xl:max-w-80  md:text-lg">
								Steam turbines have long lifespans and can operate continuously
							</Paragraph>
						</div>
					</div>
					<div className="flex gap-7 items-center">
						<NextImage src={ReliabilityImage} alt="Reliability" />
						<div>
							<Heading size="base" as="h3" className="mb-1 2xl:mb-3 text-2xl 2xl:text-4xl">
								Energy Efficiency
							</Heading>
							<Paragraph size="sm" className="2xl:max-w-80 md:text-lg">
								Steam allows for high energy conversion efficiency with minimal
								losses
							</Paragraph>
						</div>
					</div>
				</Container>
			</section>

			{/* About section */}
			<section>
				<Container className="flex flex-col lg:flex-row justify-between *:text-secondary gap-y-16 lg:gap-x-36 lg:gap-y-0">
					<div className="flex flex-col lg:flex-col-reverse gap-8 md:gap-20">
						<NextImage
							className="rounded-xl w-full"
							src={StationImage}
							alt="Link"
						/>
						<div>
							<Heading as="h3" className="text-[32px] md:text-5xl 2xl:text-[64px] uppercase">
								Enersok FE LLC
							</Heading>
							<Paragraph
								size="sm"
								className="md:text-lg leading-7 mt-4 md:mt-6 mb-8 md:mb-12 max-w-[590px]"
							>
								Enersok FE LLC was formed in 2022 by the Consortium of
								Electricite De France (EDF), Nebras Power (Qatar), Sojitz
								Corporation and Kyuden International (Japan), Enersok FE LLC was
								formed in 2022 by the Consortium of Electricite De France (EDF),
								Nebras Power (Qatar), Sojitz Corporation and Kyuden
								International (Japan)
							</Paragraph>
							<Link className="text-xl flex gap-3 items-center" href={'#'}>
								Read more
								<span>
									<NextImage src={LinkImage} alt="Link" />
								</span>
							</Link>
						</div>
					</div>
					<div>
						<NextImage src={PeopelsImage} alt="Peopels" />
						<div className="bg-backgroundImage1 py-8 px-4 rounded-xl md:px-12 md:py-20">
							<Heading
								size="lg"
								as="h3"
								className="md:text-2xl border-b border-black pb-6 mb-6"
							>
								Power Plant with capacity
							</Heading>
							<span className="text-[64px] md:text-6xl flex items-center justify-between">
								1,6 GW
								<NextImage src={EnergyIcon} alt="Energy" />
							</span>
							<Paragraph
								size="sm"
								className="md:text-lg leading-5 mt-12 max-w-[590px]"
							>
								Entered into public-private partnership agreement for
								construction of a Gas Combined Cycle Power Plant with capacity
								of 1,6 GW in Syrdarya region, Uzbekistan (On March 25, 2022)
							</Paragraph>
						</div>
					</div>
				</Container>
			</section>

			{/* Sponsors */}
			<section className="pt-20 pb-14 md:py-20 xl:py-72 relative overflow-hidden">
				<Container
					className={cn(
						'flex flex-col items-center md:gap-12 *:text-secondary z-10 relative',
						'lg:grid lg:grid-cols-[1.3fr,1.7fr]',
					)}
				>
					<div className="*:text-secondary">
						<Heading as="h3" className={cn('text-[32px] md:text-[64px]')}>
							SPONSORS
						</Heading>
						<Paragraph
							size="sm"
							className={cn('max-w-[590px] mt-2 md:mt-5', 'text-sm md:text-lg')}
						>
							Enersok FE LLC was formed in 2022 by the Consortium of Electricite
							De France (EDF), Nebras Power (Qatar), Sojitz Corporation and
							Kyuden International (Japan), Enersok FE LLC
						</Paragraph>
						<div>
							<Heading as="h3" size="xs" className="mt-8 md:mt-16 uppercase">
								owned by
							</Heading>
							<ul className="flex flex-col gap-y-6 mt-11">
								<li className="border-b border-borderColor pb-3 flex justify-between">
									<div className="flex gap-4 items-start">
										<span className="size-[22px] rounded-[50%] bg-[#FF5E11] inline-block" />
										<Paragraph size="sm" className={cn('text-lg md:text-2xl !leading-[normal]')}>
											EDF
										</Paragraph>
									</div>
									<span className='text-lg md:text-2xl !leading-[normal]'>33.3%</span>
								</li>
								<li className="border-b border-borderColor pb-3 flex justify-between">
									<div className="flex gap-4 items-start">
										<span className="size-[22px] rounded-[50%] bg-[#1AAD21] inline-block" />
										<Paragraph size="sm" className={cn('text-lg md:text-2xl !leading-[normal]')}>
											Nebras Power
										</Paragraph>
									</div>
									<span className='text-lg md:text-2xl !leading-[normal]'>33.3%</span>
								</li>
								<li className="border-b border-borderColor pb-3 flex justify-between">
									<div className="flex gap-4 items-start">
										<span className="size-[22px] rounded-[50%] bg-[#00479D] inline-block" />
										<Paragraph size="sm" className={cn('text-lg md:text-2xl !leading-[normal]')}>
											Sojitz
										</Paragraph>
									</div>
									<span className='text-lg md:text-2xl !leading-[normal]'>19%</span>
								</li>
								<li className="border-b border-borderColor pb-3 flex justify-between">
									<div className="flex gap-4 items-start">
										<span className="size-[22px] rounded-[50%] bg-[#93DCFF] inline-block" />
										<Paragraph size="sm" className={cn('text-lg md:text-2xl !leading-[normal]')}>
											Kyuden
										</Paragraph>
									</div>
									<span className='text-lg md:text-2xl !leading-[normal]'>14.3%</span>
								</li>
							</ul>
						</div>
					</div>
					{/* Chart */}
					<div className='flex justify-center overflow-hidden relative mt-6 md:mt-0'>
						<SponsorDonutChart />
					</div>
				</Container>
				<NextImage
					src={Factory2}
					alt="Banner Enersok"
					className="absolute hidden lg:block bottom-0 right-[50px] z-[1]"
					priority={true}
				/>
			</section>

			{/* Location section */}
			<section className='py-16 lg:py-60 bg-[#1375A4]'>
				<LocationSection />
			</section>

			{/* News Carousel section */}
			<section className='py-24 xl:py-48'>
				<Container>
					<EmblaCarousel
						className='[&>a]:mt-10 [&>a]:block [&>a]:md:hidden [&>div:nth-of-type(1)]:mb-8 [&>div:nth-of-type(1)]:md:mb-16 [&>div:nth-of-type(1)>div]:hidden [&>div:nth-of-type(1)>div]:md:flex'
						autoLoopInterval={100000}
						showCounter={false}
						slidesToShow={1}
						controlsPosition='above'
						controlsTitle='News'
						controlsButton={{
							link: '/news',
							text: 'All news',
						}}
						slides={[
							<NewsCarouselItem />,
							<NewsCarouselItem />,
							<NewsCarouselItem />,
							<NewsCarouselItem />,
							<NewsCarouselItem />,
						]}
					/>
				</Container>
			</section>

			{/* Community */}
			<section className='bg-backgroundImage1 pt-16 md:pt-[150px] pb-[120px] relative overflow-hidden'>
				<Container className='flex flex-col-reverse md:grid md:grid-cols-[1fr,0.8fr]'>
					<div className='*:text-secondary z-10'>
						<Heading as='h3' className='mt-6 md:mt-0 text-[32px] text-wrap md:text-4xl xl:text-[64px] !leading-[normal] max-w-[780px] uppercase'>
							Join Our Community by Following Us on Social Media
						</Heading>
						<div>
							<Heading as='h3' className='text-xs md:text-xl mt-10 md:mt-16'>
								Follow us
							</Heading>
							<ul className='flex gap-3 mt-6 items-center'>
								<li>
									<a href="https://t.me/SYRDARYA_CCGT_2"
										className='w-20 h-20 flex items-center justify-center rounded-full bg-white group hover:bg-[#198ABF] transition-all duration-200 ease-in-out'

									>
										<svg
											className='fill-[#198ABF] group-hover:fill-white'
											width="23" height="19" viewBox="0 0 23 19" xmlns="http://www.w3.org/2000/svg">
											<path d="M20.9165 0.340988L1.11449 7.99452C-0.22184 8.48046 -0.22184 9.33086 0.871522 9.57383L5.8524 11.1531L7.79615 16.9844C8.03912 17.5918 7.91764 17.8348 8.52506 17.8348C9.011 17.8348 9.25397 17.5918 9.49694 17.3488C9.61842 17.2274 10.7118 16.134 11.9266 14.9192L17.029 18.6852C18.0009 19.1711 18.6083 18.9282 18.8513 17.8348L22.2528 1.92029C22.6173 0.583957 21.7669 -0.144951 20.9165 0.340988ZM18.3653 3.98553L8.88951 12.6109L8.52506 16.6199L6.5813 10.7887L17.7579 3.74256C18.2438 3.37811 18.7298 3.62108 18.3653 3.98553Z" />
										</svg>
									</a>
								</li>
								<li>
									<a href="https://t.me/SYRDARYA_CCGT_2"
										className='w-20 h-20 flex items-center justify-center rounded-full bg-white group hover:bg-[#198ABF] transition-all duration-200 ease-in-out'

									>
										<svg className='fill-[#198ABF] group-hover:fill-white w-[25] h-[25]' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 310 310" xmlSpace="preserve">
											<g id="XMLID_801_">
												<path id="XMLID_802_" d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73 C77.16,101.969,74.922,99.73,72.16,99.73z"></path>
												<path id="XMLID_803_" d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4 c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"></path>
												<path id="XMLID_804_" d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599 c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319 c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995 C310,145.43,300.549,94.761,230.454,94.761z"></path>
											</g>
										</svg>
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className='grid gap-2 p-4 z-10 grid-cols-3 grid-rows-2'>
						<NextImage
							className="col-start-2 col-span-2 row-start-1 h-full"
							src={Image1} alt="Peoples" />
						<NextImage
							className="col-start-1 row-span-2 place-self-center w-full"
							src={Image2} alt="Peoples" />
						<NextImage
							className="col-start-2 row-start-2 w-full"
							src={Image4} alt="Peoples" />
						<NextImage
							className="col-start-3 row-start-2"
							src={Image3} alt="Peoples" />
					</div>

				</Container>
				<NextImage
					src={Factory2}
					alt="Banner Enersok"
					className="absolute hidden lg:block bottom-0 right-[-100px] z-[1]"
					priority={true}
				/>
			</section>
		</>
	);
};

export default HomePage;
