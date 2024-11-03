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
import LocationIcon from '@public/location-icon.svg';
import StationImage from '@public/Rectangle 6.png';
import ReliabilityImage from '@public/reliability.svg';
import UzbMap from '@public/uzb-map.png';
import NextImage from 'next/image';
import { CarouselItem } from './_components/CarouselItem';
import { SponsorDonutChart } from './_components/Chart';
import { NewsCarouselItem } from './_components/NewsCarouselItem';



const DashboardPage: PageType = async () => {
	return (
		<>
			{/* Heading */}
			<section className="bg-backgroundImage1 relative overflow-hidden pt-[200px] pb-[80px]">
				<Container>
					<EmblaCarousel
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
					className="absolute bottom-0 right-[-100px] z-[1]"
					priority={true}
				/>
			</section>

			{/* Feature section */}
			<section className="pt-32 pb-64">
				<Container className="flex flex-wrap gap-16 justify-evenly *:text-secondary">
					<div className="flex gap-7 items-center">
						<NextImage src={EcoFriendlyImage} alt="Eco-friendly" />
						<div>
							<Heading size="base" as="h3" className="mb-3 md:text-4xl">
								Eco-Friendly
							</Heading>
							<Paragraph size="sm" className="max-w-80 md:text-lg">
								Steam energy can utilize renewable resources like biomass
							</Paragraph>
						</div>
					</div>
					<div className="flex gap-7 items-center">
						<NextImage src={EnergyImage} alt="Energy" />
						<div>
							<Heading size="base" as="h3" className="mb-3 md:text-4xl">
								Reliability
							</Heading>
							<Paragraph size="sm" className="max-w-80  md:text-lg">
								Steam turbines have long lifespans and can operate continuously
							</Paragraph>
						</div>
					</div>
					<div className="flex gap-7 items-center">
						<NextImage src={ReliabilityImage} alt="Reliability" />
						<div>
							<Heading size="base" as="h3" className="mb-3 md:text-4xl">
								Energy Efficiency
							</Heading>
							<Paragraph size="sm" className="max-w-80 md:text-lg">
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
					<div className="flex flex-col md:flex-col-reverse gap-8 md:gap-20">
						<NextImage
							className="rounded-xl w-full"
							src={StationImage}
							alt="Link"
						/>
						<div>
							<Heading size="3xl" as="h3" className="md:text-[64px] uppercase">
								Enersok FE LLC
							</Heading>
							<Paragraph
								size="sm"
								className="md:text-lg leading-7 mt-6 mb-12 max-w-[590px]"
							>
								Enersok FE LLC was formed in 2022 by the Consortium of
								Electricite De France (EDF), Nebras Power (Qatar), Sojitz
								Corporation and Kyuden International (Japan), Enersok FE LLC was
								formed in 2022 by the Consortium of Electricite De France (EDF),
								Nebras Power (Qatar), Sojitz Corporation and Kyuden
								International (Japan)
							</Paragraph>
							<Link className="flex gap-3 items-center" href={'#'}>
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
								className="md:text-2xl border-b border-black md:pb-6 md:mb-6"
							>
								Power Plant with capacity
							</Heading>
							<span className="text-6xl flex items-center justify-between">
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
			<section className="my-72">
				<Container
					className={cn(
						'flex flex-col items-center gap-12 *:text-secondary',
						'md:flex-row',
					)}
				>
					<div className="*:text-secondary">
						<Heading as="h3" size="3xl" className={cn('md:text-6xl')}>
							SPONSORS
						</Heading>
						<Paragraph
							size="sm"
							className={cn('max-w-[590px] mt-4', 'md:text-lg')}
						>
							Enersok FE LLC was formed in 2022 by the Consortium of Electricite
							De France (EDF), Nebras Power (Qatar), Sojitz Corporation and
							Kyuden International (Japan), Enersok FE LLC
						</Paragraph>
						<div>
							<Heading as="h3" size="sm" className="mt-16">
								owned by
							</Heading>
							<ul className="flex flex-col gap-y-6 mt-11">
								<li className="border-b border-borderColor flex justify-between">
									<div className="flex gap-4">
										<span className="size-[22px] rounded-[50%] bg-red-600 inline-block" />
										<Paragraph size="sm" className={cn('md:text-lg')}>
											EDF
										</Paragraph>
									</div>
									<span>33.3%</span>
								</li>
								<li className="border-b border-borderColor flex justify-between">
									<div className="flex gap-4">
										<span className="size-[22px] rounded-[50%] bg-green-600 inline-block" />
										<Paragraph size="sm" className={cn('md:text-lg')}>
											Nebras Power
										</Paragraph>
									</div>
									<span>33.3%</span>
								</li>
							</ul>
						</div>
					</div>
					{/* Chart */}
					<div className='flex justify-center overflow-hidden'>
						<SponsorDonutChart />
					</div>
				</Container>
			</section>

			{/* Location section */}
			<section className='py-60 bg-[#1375A4]'>
				<Container className='flex justify-between'>
					<div className='*:text-white'>
						<Heading as="h3" size="3xl" className="md:text-[64px] uppercase max-w-[600px] xl:text-6xl leading-8">
							We and our projects are on the map
						</Heading>
						<Paragraph size="sm" className="max-w-[590px] mt-6 xl:text-lg leading-7">
							Enersok FE LLC was formed in 2022 by the Consortium of Electricite De France (EDF), Nebras Power (Qatar), Sojitz Corporation and Kyuden International (Japan), Enersok FE LLC
						</Paragraph>
						<div className='mt-36 flex flex-col'>
							<div className='flex items-center gap-5'>
								<NextImage src={LocationIcon} alt="location" />
								<Paragraph

									className='max-w-96'>
									8A Afrosiyob St., Mirabad District, Tashkent city, Uzbekistan, Dmaar Business Center
								</Paragraph>
							</div>
							<hr className='my-5 max-w-[450px]' />
							<div className='flex items-center gap-5'>
								<NextImage src={LocationIcon} alt="location" />
								<Paragraph>
									Shirin City, Syrdarya region, Uzbekistan
								</Paragraph>
							</div>
						</div>
					</div>
					<div className='relative'>
						<NextImage src={UzbMap} alt='map' />
					</div>
				</Container>
			</section>

			{/* News Carousel section */}
			<section className='py-48'>
				<Container>
					<Heading as='h3' size='3xl' className='md:text-[64px] uppercase *:text-secondary'>
						News
					</Heading>
					<EmblaCarousel
						autoLoopInterval={100000}
						showCounter={false}
						slidesToShow={1}
						controlsPosition='above'
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
			<section className='bg-backgroundImage1 pt-[150px] pb-[120px] relative overflow-hidden'>
				<Container className='grid grid-cols-[1fr,0.8fr]'>
					<div className='*:text-secondary z-10'>
						<Heading as='h3' size='3xl' className='md:text-[64px] !leading-[normal] max-w-[780px] uppercase'>
							Join Our Community by Following Us on Social Media
						</Heading>
						<div>
							<Heading as='h3' size='xl' className='mt-16'>
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
										<svg
											className='fill-[#198ABF] group-hover:fill-white'
											width="24" height="25" viewBox="0 0 24 25" xmlns="http://www.w3.org/2000/svg">
											<path d="M0.312899 2.16413L0.751222 2.37866C0.299058 3.30251 0.467184 4.38167 1.17559 5.11957C2.1043 6.08692 3.64806 6.08596 4.57304 5.11935L4.93429 5.46504L4.57305 5.11935C5.28432 4.37607 5.44929 3.30719 4.99584 2.38601L4.99584 2.38601C4.79265 1.97321 4.32708 1.51011 3.93992 1.32507L0.312899 2.16413ZM0.312899 2.16413L0.751223 2.37866M0.312899 2.16413L0.751223 2.37866M23.5 24.0708H24L23.9998 19.7532C23.9997 16.9928 23.9795 14.6553 23.9524 14.2791C23.794 12.0721 23.3103 10.6619 22.3657 9.65223M23.5 24.0708L23.4998 19.7532C23.4997 16.9797 23.4791 14.6679 23.4537 14.315L23.4537 14.3149C23.2988 12.158 22.8322 10.8827 22.0006 9.99383L22.3657 9.65223M23.5 24.0708L23.5 24.5708M23.5 24.0708H21.5147H19.5293M22.3657 9.65223L22.0006 9.99382C21.4489 9.40421 20.6978 9.00372 19.6344 8.78265C19.3769 8.72913 18.8549 8.68879 18.3052 8.67692C17.7509 8.66496 17.2541 8.68393 17.0396 8.7243L16.9471 8.23292L17.0395 8.7243C15.7116 8.97408 14.5994 9.69286 13.9198 10.7118C13.9198 10.7118 13.9198 10.7118 13.9198 10.7118M22.3657 9.65223L13.9198 10.7118M13.9198 10.7118L13.7009 11.04L12.8032 12.386L12.7849 10.7682L12.7724 9.65469L12.7654 9.03548H10.869H8.97834V16.5531V24.0708H10.9637H12.949L12.9492 20.3627C12.9493 17.7623 12.9676 15.9363 13.0016 15.5733L13.9198 10.7118ZM23.5 24.5708L13.0016 15.5732C13.0862 14.6708 13.3006 13.9137 13.6931 13.3274C14.0947 12.7276 14.6597 12.3416 15.3685 12.1533C15.632 12.0833 15.9602 12.046 16.267 12.0358C16.5722 12.0256 16.8985 12.0407 17.1561 12.0957C17.5897 12.1882 17.9665 12.3364 18.2881 12.5827C18.6111 12.8302 18.8457 13.1518 19.0332 13.5404M23.5 24.5708H21.5147H19.5293V24.0708M23.5 24.5708L19.0293 24.0708H19.5293M19.5293 24.0708V20.2153C19.5293 17.591 19.5243 16.1747 19.4643 15.3071C19.434 14.8683 19.3885 14.5481 19.3156 14.2707C19.2416 13.9891 19.1443 13.7706 19.0332 13.5404M19.0332 13.5404L18.5829 13.7577L19.0332 13.5405C19.0332 13.5405 19.0332 13.5404 19.0332 13.5404ZM0.751223 2.37866C1.03721 1.79433 1.71618 1.26255 2.34687 1.12663L0.751223 2.37866ZM4.8718 16.5656L4.88293 24.0708H2.87474H0.865808V16.5844C0.865808 14.3886 0.869372 12.3891 0.875107 10.9367C0.877975 10.2103 0.881384 9.62143 0.885155 9.21341C0.885693 9.15515 0.886238 9.10068 0.886788 9.05012C0.965343 9.04912 1.05271 9.04825 1.14796 9.0475C1.59786 9.04398 2.21555 9.04345 2.89206 9.04677L4.86068 9.05647L4.8718 16.5656ZM2.34688 1.12662C2.88402 1.01087 3.41505 1.07429 3.93989 1.32505L2.34688 1.12662Z" />
										</svg>
									</a>
								</li>
							</ul>
						</div>
					</div>
					{/* TODO: Fix position of the images */}
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
					className="absolute bottom-0 right-[-100px] z-[1]"
					priority={true}
				/>
			</section>
		</>
	);
};

export default DashboardPage;
