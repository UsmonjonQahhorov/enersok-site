import { Button } from '@/components/ui/Button';
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

const DashboardPage: PageType = async () => {

	return (
		<>

			{/* Feature section */}
			<section className='py-40'>
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
				<Container className='grid grid-cols-1 *:text-secondary lg:grid-cols-2 gap-y-16 lg:gap-x-36 lg:gap-y-0'>
					<div className='flex flex-col md:flex-col-reverse gap-8 md:gap-20'>
						<NextImage className='rounded-xl' src={StationImage} alt='Link' />
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
							<span className='text-6xl'>
								1,6 GW
							</span>
							<Paragraph
								size='sm'
								className='md:text-lg leading-5 mt-12'
							>
								Entered into public-private partnership agreement for construction of a Gas Combined Cycle Power Plant with capacity of 1,6 GW in Syrdarya region, Uzbekistan (On March 25, 2022)
							</Paragraph>
						</div>
					</div>
				</Container>
			</section>
		</>
	);
};

export default DashboardPage;
