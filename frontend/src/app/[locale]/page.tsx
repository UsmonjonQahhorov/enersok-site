import { Heading } from '@/components/ui/Heading';
import { Paragraph } from '@/components/ui/Paragraph';
import type { PageType } from '@/types/component.types';
import EcoFriendlyImage from '@public/ecoFriendly.svg';
import EnergyImage from '@public/energy.svg';
import NextImage from 'next/image';
import ReliabilityImage from '@public/reliability.svg';
import { Container } from '@/components/ui/Container';
import { Link } from '@/i18n/routing';
import LinkImage from '@public/link.svg';
import StationImage from '@public/Rectangle 6.png';
import PeopelsImage from '@public/image (1).png';
import EnergyIcon from '@public/energy-icon.svg';
import { cn } from '@/utils/cn';
import EmblaCarousel from '@/components/navigation/EmblaSlider/EmblaSlider';
import { CarouselItem } from './_components/CarouselItem';

const DashboardPage: PageType = async () => {

	return (
		<>
			<section className='bg-backgroundImage1 relative overflow-hidden pt-[200px] pb-[100px]'>
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
			</section>
			{/* Feature section */}
			<section className='pt-32 pb-64'>
				<Container className='flex flex-wrap gap-16 justify-evenly *:text-secondary'>
					<div className='flex gap-7 items-center'>
						<NextImage src={EcoFriendlyImage} alt='Eco-friendly' />
						<div>
							<Heading
								size='base'
								as='h3'
								className='mb-3 md:text-4xl'
							>
								Eco-Friendly
							</Heading>
							<Paragraph size='sm' className='max-w-80 md:text-lg'>
								Steam energy can utilize renewable resources like biomass
							</Paragraph>
						</div>
					</div>
					<div className='flex gap-7 items-center'>
						<NextImage src={EnergyImage} alt='Energy' />
						<div>
							<Heading
								size='base'
								as='h3'
								className='mb-3 md:text-4xl'
							>
								Reliability
							</Heading>
							<Paragraph size='sm' className='max-w-80  md:text-lg'>
								Steam turbines have long lifespans and can operate continuously
							</Paragraph>
						</div>
					</div>
					<div className='flex gap-7 items-center'>
						<NextImage src={ReliabilityImage} alt='Reliability' />
						<div>
							<Heading
								size='base'
								as='h3'
								className='mb-3 md:text-4xl'
							>
								Energy Efficiency
							</Heading>
							<Paragraph size='sm' className='max-w-80 md:text-lg'>
								Steam allows for high energy conversion efficiency with minimal losses
							</Paragraph>
						</div>
					</div>
				</Container>
			</section>

			{/* About section */}
			<section>
				<Container className='flex flex-col lg:flex-row justify-between *:text-secondary gap-y-16 lg:gap-x-36 lg:gap-y-0'>
					<div className='flex flex-col md:flex-col-reverse gap-8 md:gap-20'>
						<NextImage className='rounded-xl w-full' src={StationImage} alt='Link' />
						<div>
							<Heading
								size='3xl'
								as='h3'
								className='md:text-6xl'
							>
								Enersok FE LLC
							</Heading>
							<Paragraph
								size='sm'
								className='md:text-lg leading-7 mt-6 mb-12 max-w-[590px]'
							>
								Enersok FE LLC was formed in 2022 by the Consortium of Electricite De France (EDF), Nebras Power (Qatar), Sojitz Corporation and Kyuden International (Japan), Enersok FE LLC was formed in 2022 by the Consortium of Electricite De France (EDF), Nebras Power (Qatar), Sojitz Corporation and Kyuden International (Japan)
							</Paragraph>
							<Link
								className='flex gap-3 items-center'
								href={'#'}
							>
								Read more
								<span>
									<NextImage src={LinkImage} alt='Link' />
								</span>
							</Link>
						</div>
					</div>
					<div>
						<NextImage src={PeopelsImage} alt='Peopels' />
						<div className='bg-backgroundImage1 py-8 px-4 rounded-xl md:px-12 md:py-20'>
							<Heading
								size='lg'
								as='h3'
								className='md:text-2xl border-b border-black md:pb-6 md:mb-6'
							>
								Power Plant with capacity
							</Heading>
							<span className='text-6xl flex items-center justify-between'>
								1,6 GW
								<NextImage src={EnergyIcon} alt='Energy' />
							</span>
							<Paragraph
								size='sm'
								className='md:text-lg leading-5 mt-12 max-w-[590px]'
							>
								Entered into public-private partnership agreement for construction of a Gas Combined Cycle Power Plant with capacity of 1,6 GW in Syrdarya region, Uzbekistan (On March 25, 2022)
							</Paragraph>
						</div>
					</div>
				</Container>
			</section>

			{/* Sponsors */}
			<section className='my-72'>
				<Container
					className={cn('flex flex-col items-center gap-12 *:text-secondary',
						'md:flex-row'
					)}
				>
					<div className='*:text-secondary'>
						<Heading
							as='h3'
							size='3xl'
							className={cn('md:text-6xl',)}
						>
							SPONSORS
						</Heading>
						<Paragraph
							size='sm'
							className={cn('max-w-[590px] mt-4',
								'md:text-lg'
							)}
						>
							Enersok FE LLC was formed in 2022 by the Consortium of Electricite De France (EDF), Nebras Power (Qatar), Sojitz Corporation and Kyuden International (Japan), Enersok FE LLC
						</Paragraph>
						<div>
							<Heading
								as='h3'
								size='sm'
								className='mt-16'
							>
								owned by
							</Heading>
							<ul className='flex flex-col gap-y-6 mt-11'>
								<li className='border-b border-borderColor flex justify-between'>
									<div className='flex gap-4'>
										<span
											className='size-[22px] rounded-[50%] bg-red-600 inline-block'
										/>
										<Paragraph
											size='sm'
											className={cn('md:text-lg')}
										>
											EDF
										</Paragraph>
									</div>
									<span>
										33.3%
									</span>
								</li>
								<li className='border-b border-borderColor flex justify-between'>
									<div className='flex gap-4'>
										<span
											className='size-[22px] rounded-[50%] bg-green-600 inline-block'
										/>
										<Paragraph
											size='sm'
											className={cn('md:text-lg')}
										>
											Nebras Power
										</Paragraph>
									</div>
									<span>
										33.3%
									</span>
								</li>
							</ul>
						</div>
					</div>
					{/* Chart */}
					<div>

					</div>
				</Container>
			</section>
		</>
	);
};

export default DashboardPage;
