import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { RouterConfig } from '@/configs/router.config';
import type { PageType } from '@/types/component.types';
import Image from 'next/image';
import Factory from '@public/facroty.png';
import Banner from '@public/vacancy-banner.png';
import { Paragraph } from '@/components/ui/Paragraph';
import { CareerCard } from '@/components/ui/CareerCard';

const CareersPage: PageType = () => {
	return (
		<>
			<section className="bg-backgroundImage1 relative overflow-hidden">
				<Container className="pt-[164px] pb-11 flex lg:grid lg:grid-cols-2">
					<div>
						<Breadcrumbs
							textHome={'Main'}
							textPage={'Careers'}
							urlHome={RouterConfig.Home}
							urlPage={RouterConfig.Careers}
						/>
						<Image
							src={Banner}
							alt="Careers Banner Enersok"
							className="object-cover object-center mt-8 max-h-[250px] md:max-h-[350px] block lg:hidden rounded-xl h-full"
							priority={true}
						/>
						<Heading className="!leading-[normal] text-secondary uppercase py-8 lg:py-[75px] text-[48px] lg:text-[100px]">
							Careers
						</Heading>
						<div className="pt-10 border-t-[1px] border-solid border-secondaryOpacity3 pb-4 lg:pb-40">
							<Heading className="text-base md:text-3xl font-semibold text-secondary mb-3">
								For a brighter future with us!
							</Heading>
							<Paragraph className="text-sm md:text-xl font-normal text-secondary">
								If you're looking for a fulfilling career where your work truly
								matters, we invite you to explore opportunities with us.
								Together, we can create a brighter future!
							</Paragraph>
						</div>
					</div>
					<div className="relative z-10 pl-14 hidden lg:block">
						<Image
							src={Banner}
							alt="Careers Banner Enersok"
							className="object-cover object-center rounded-xl h-full"
							priority={true}
						/>
					</div>
				</Container>
				<Image
					src={Factory}
					alt="Banner Enersok"
					className="absolute hidden lg:block bottom-0 right-[-100px] z-[1]"
					priority={true}
				/>
			</section>
			<section>
				<Container>
					<Paragraph
						className="text-sm md:text-2xl w-full border-b-[1px] lg:border-0 border-secondaryOpacity3 pb-7 whitespace-[10px] py-[50px] text-secondary"
					>
						Construction period started in March 2023 and the COD (Commercial
						Operating Date) should be reach in June 2026. That means the plant
						will be fully operational with two gas turbines and one steam
						turbine in combined cycle configuration.
					</Paragraph>
					<Heading
						as="h3"
						className="text-secondary uppercase font-normal text-[32px] md:text-[64px] pt-20 pb-8"
					>
						Latest Vacancies
					</Heading>
					<div className="grid sm:grid-cols-2 sm:gap-x-4 lg:gap-x-0 lg:grid-cols-1">
						<CareerCard
							title="Finance Controller"
							location="Tashkent Headquarters"
							startDate="01.05.2024"
							endDate="30.08.2024"
							url="/"
						/>
						<CareerCard
							title="HSE Director"
							location="On-site, Syrdarya"
							startDate="25.07.2024"
							endDate="30.08.2024"
							url="/"
						/>
						<CareerCard
							title="Finance Controller"
							location="Tashkent Headquarters"
							startDate="01.05.2024"
							endDate="30.08.2024"
							url="/"
						/>
						<CareerCard
							title="HSE Director"
							location="On-site, Syrdarya"
							startDate="25.07.2024"
							endDate="30.08.2024"
							url="/"
						/>
						<CareerCard
							title="Finance Controller"
							location="Tashkent Headquarters"
							startDate="01.05.2024"
							endDate="30.08.2024"
							url="/"
						/>
						<CareerCard
							title="HSE Director"
							location="On-site, Syrdarya"
							startDate="25.07.2024"
							endDate="30.08.2024"
							url="/"
						/>
						<CareerCard
							title="Finance Controller"
							location="Tashkent Headquarters"
							startDate="01.05.2024"
							endDate="30.08.2024"
							url="/"
						/>
						<CareerCard
							title="HSE Director"
							location="On-site, Syrdarya"
							startDate="25.07.2024"
							endDate="30.08.2024"
							url="/"
						/>
					</div>
				</Container>
			</section>
		</>
	);
};

export default CareersPage;
