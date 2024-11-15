import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import type { PageType } from '@/types/component.types';
import Image from 'next/image';
import Factory from '@public/facroty.png';
import { RouterConfig } from '@/configs/router.config';
import { Paragraph } from '@/components/ui/Paragraph';
import { CareerForm } from '@/components/form/CareerForm';

const SingleCareerPage: PageType = () => {
	return (
		<>
			<section className="bg-backgroundImage1 relative">
				<Container className="pt-[164px] pb-8 lg:pb-20 relative z-10">
					<Breadcrumbs
						textHome={'Main'}
						textPage={'Careers'}
						urlHome={RouterConfig.Home}
						urlPage={RouterConfig.Careers}
					/>
					<Heading className="!leading-[normal] text-secondary w-1/2 uppercase py-8 lg:py-[75px] text-5xl lg:text-[100px] lg:pb-16">
						Finance Controller
					</Heading>
					<div className="flex flex-col lg:flex-row gap-y-8 lg:gap-x-16">
						<div className="flex flex-col items-start gap-y-2">
							<Paragraph className="text-secondaryOpacity4 text-sm">
								Location
							</Paragraph>
							<Paragraph className="text-xl text-secondary">
								Tashkent Headquarters
							</Paragraph>
						</div>
						<div className="flex flex-row gap-x-8">
							<div className="flex flex-col items-start gap-y-2">
								<Paragraph className="text-secondaryOpacity4 text-sm">
									Posting Date
								</Paragraph>
								<Paragraph className="text-xl text-secondary">
									01.05.2024
								</Paragraph>
							</div>
							<div className="flex flex-col items-start gap-y-2">
								<Paragraph className="text-secondaryOpacity4 text-sm">
									Location
								</Paragraph>
								<Paragraph className="text-xl text-secondary">
									30.08.2024
								</Paragraph>
							</div>
						</div>
					</div>
				</Container>
				<Image
					src={Factory}
					alt="Banner Enersok"
					className="absolute hidden lg:block bottom-[26px] right-[122px]"
					priority={true}
				/>
			</section>
			<section className='[&>form]:flex [&>form]:lg:hidden'>
				<Container className="py-[80px] lg:pt-[100px] lg:pb-[170px] grid lg:grid-cols-2 lg:gap-x-40 [&>form]:hidden [&>form]:lg:flex">
					<div className="flex flex-col gap-y-11">
						<div className="flex flex-col">
							<Heading as="h4" className="text-2xl md:text-4xl text-secondary pb-6">
								Responsibilities:
							</Heading>
							<ul className="flex flex-col [&>li]:text-wrap">
								<li className="text-lg text-secondary pb-1">
									- visual inspection of construction structures with assessment
									of technical condition based on external signs;
								</li>
								<li className="text-lg text-secondary pb-1">
									- visual inspection of construction structures with assessment
									of technical condition based on external signs;
								</li>
								<li className="text-lg text-secondary pb-1">
									- visual inspection of construction structures with assessment
									of technical condition based on external signs;
								</li>
								<li className="text-lg text-secondary pb-1">
									- visual inspection of construction structures with assessment
									of technical condition based on external signs;
								</li>
							</ul>
						</div>
						<div className="flex flex-col">
							<Heading as="h4" className="text-2xl md:text-4xl text-secondary pb-6">
								Requirements:
							</Heading>
							<ul className="flex flex-col [&>li]:text-wrap">
								<li className="text-lg text-secondary pb-1">
									- visual inspection of construction structures with assessment
									of technical condition based on external signs;
								</li>
								<li className="text-lg text-secondary pb-1">
									- visual inspection of construction structures with assessment
									of technical condition based on external signs;
								</li>
								<li className="text-lg text-secondary pb-1">
									- visual inspection of construction structures with assessment
									of technical condition based on external signs;
								</li>
								<li className="text-lg text-secondary pb-1">
									- visual inspection of construction structures with assessment
									of technical condition based on external signs;
								</li>
							</ul>
						</div>
						<div className="flex flex-col">
							<Heading as="h4" className="text-2xl md:text-4xl text-secondary pb-6">
								Working conditions:
							</Heading>
							<ul className="flex flex-col [&>li]:text-wrap">
								<li className="text-lg text-secondary pb-1">
									visual inspection of construction structures with assessment
									of technical condition based on external signs;
								</li>
								<li className="text-lg text-secondary pb-1">
									visual inspection of construction structures with assessment
									of technical condition based on external signs;
								</li>
								<li className="text-lg text-secondary pb-1">
									visual inspection of construction structures with assessment
									of technical condition based on external signs;
								</li>
							</ul>
						</div>
						<div className="flex flex-col">
							<Heading as="h4" className="text-2xl md:text-4xl text-secondary pb-6">
								Key skills:
							</Heading>
							<ul className="flex flex-col [&>li]:text-wrap">
								<li className="text-lg text-secondary pb-1">
									Lyra-Sapr, AutoCAD, Engineering systems, MS Outlook, Team
									work, Quality control
								</li>
							</ul>
						</div>
					</div>
					<CareerForm
						text='Send your resume'
						email="Your e-mail"
						message="Message"
						name="Your full name"
						phone="Your phone"
						sumbmit="Send your resume"
						file="File"
					/>
				</Container>
				<CareerForm
					text='Send your resume'
					email="Your e-mail"
					message="Message"
					name="Your full name"
					phone="Your phone"
					sumbmit="Send your resume"
					file="File"
				/>
			</section>
		</>
	);
};

export default SingleCareerPage;
