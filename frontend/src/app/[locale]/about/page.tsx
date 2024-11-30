import { getDevelopments } from '@/api/developments/getDevelopments.api';
import { getAboutPage } from '@/api/pages/getAboutPage.api';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Paragraph } from '@/components/ui/Paragraph';
import { RouterConfig } from '@/configs/router.config';
import type { DynamicMetadata, PageType, RenderBehavior } from '@/types/component.types';
import { cn } from '@/utils/cn';
import { getBackendImage } from '@/utils/getBackendImage';
import { getBlurImage } from '@/utils/getBlurImage';
import About1 from '@public/about-icons/about1.svg';
import About2 from '@public/about-icons/about2.svg';
import Markdown from 'markdown-to-jsx';
import type { Metadata } from 'next';
import Image from 'next/image';
// import Factory from '@public/facroty.png';
// import Banner from '@public/vacancy-banner.png';
// import AboutBanner1 from '@public/about.png';
// import AboutBanner2 from '@public/about2.jpg';
// import Development from '@public/development.png';

export const dynamic: RenderBehavior = 'force-static'

export const generateMetadata: DynamicMetadata = async ({
	params,
}): Promise<Metadata> => {
	const { locale } = await params;
	const aboutPageData = await getAboutPage(locale);

	return {
		title: aboutPageData.data?.data.attributes.page_title,
		description: aboutPageData.data?.data.attributes.heading_section_text,
		openGraph: {
			title: aboutPageData.data?.data.attributes.page_title,
			description: aboutPageData.data?.data.attributes.heading_section_text,
			images: [
				{
					url: getBackendImage(aboutPageData.data?.data.attributes.heading_section_picture.data.attributes.url),
					width: aboutPageData.data?.data.attributes.heading_section_picture.data.attributes.width,
					height: aboutPageData.data?.data.attributes.heading_section_picture.data.attributes.height,
					alt: aboutPageData.data?.data.attributes.heading_section_picture.data.attributes.name,
				},
			]
		}
	};
};

const AboutCompanyPage: PageType = async ({ params }) => {
	const { locale } = await params;
	const breadcrumHomeLocale = locale === 'en' ? 'Main' : 'Asosiy';
	const breadcrumAboutCompanyLocale =
		locale === 'en' ? 'About Company' : 'Kompaniya haqida';

	const aboutPageData = await getAboutPage(locale);
	const aboutPageDevelopmentData = await getDevelopments(locale);

	const headingBlurImage = await getBlurImage(
		getBackendImage(aboutPageData.data?.data.attributes.heading_section_picture.data.attributes.url))

	const infoBlurImage = await getBlurImage(
		getBackendImage(aboutPageData.data?.data.attributes.info_section_picture.data.attributes.url))
	
	const infoFirstBlurImage = await getBlurImage(
		getBackendImage(aboutPageData.data?.data.attributes.info_section_first_picture.data.attributes.url))

	const infoSecondBlurImage = await getBlurImage(
		getBackendImage(aboutPageData.data?.data.attributes.info_section_second_picture.data.attributes.url))

	return (
		<>
			{/* Hero Section */}
			<section className="bg-backgroundImage1 relative overflow-hidden">
				<Container className="pt-[104px] sm:pt-[164px] pb-8 xl:pb-11 grid grid-cols-1 xl:grid-cols-2 items-center relative z-10">
					<div>
						<Breadcrumbs
							textHome={breadcrumHomeLocale}
							textPage={breadcrumAboutCompanyLocale}
							urlHome={RouterConfig.Home}
							urlPage={RouterConfig.AboutCompany}
						/>
						<Image
							src={
								getBackendImage(
									aboutPageData.data?.data.attributes.heading_section_picture.data.attributes.url,
								)
							}
							alt="Careers Banner Enersok"
							width={
								aboutPageData.data?.data.attributes.heading_section_picture.data
									.attributes.width
							}
							height={
								aboutPageData.data?.data.attributes.heading_section_picture.data
									.attributes.height
							}
							placeholder='blur'
							blurDataURL={headingBlurImage}
							className="object-cover block my-8 xl:my-0 max-h-[250px] lg:max-h-[350px] sm:max-h-[350px] xl:hidden object-center rounded-xl h-full"
							priority={true}
						/>
						<Heading className="!leading-[normal] text-secondary uppercase xl:pt-[175px] pb-8 text-5xl lg:text-[100px]">
							{aboutPageData.data?.data.attributes.heading_section_title}
						</Heading>
						<Paragraph className="text-base lg:text-lg font-normal text-secondary mb-3 lg:pb-[140px] lg:pr-[15%]">
							{aboutPageData.data?.data.attributes.heading_section_text}
						</Paragraph>
					</div>
					<div className="relative hidden xl:block z-10 pl-14 min-h-[664px] max-h-[664px] h-full">
						<Image
							placeholder='blur'
							blurDataURL={headingBlurImage}
							src={getBackendImage(
								aboutPageData.data?.data.attributes.heading_section_picture.data
									.attributes.url,
							)}
							width={
								aboutPageData.data?.data.attributes.heading_section_picture.data
									.attributes.width
							}
							height={
								aboutPageData.data?.data.attributes.heading_section_picture.data
									.attributes.height
							}
							alt="Careers Banner Enersok"
							className="object-cover object-center rounded-xl min-h-[664px] max-h-[664px] h-full"
							priority={true}
						/>
					</div>
				</Container>
				<Image
					src={getBackendImage(
						aboutPageData.data?.data.attributes
							.heading_section_background_picture.data.attributes.url,
					)}
					width={
						aboutPageData.data?.data.attributes
							.heading_section_background_picture.data.attributes.width
					}
					height={
						aboutPageData.data?.data.attributes
							.heading_section_background_picture.data.attributes.height
					}
					alt="Banner Enersok"
					className="absolute hidden lg:block bottom-0 right-[-100px] z-[1] bg-blend-multiply opacity-40"
					priority={true}
				/>
			</section>

			{/* About Company */}
			<section>
				<Container className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-[84px] py-20 lg:py-[162px]">
					<div className="rounded-xl w-full max-h-[250px] sm:max-h-[350px] lg:max-h-full h-full">
						<Image
							src={getBackendImage(
								aboutPageData.data?.data.attributes.info_section_picture.data
									.attributes.url,
							)}
							width={
								aboutPageData.data?.data.attributes.info_section_picture.data
									.attributes.width
							}
							height={
								aboutPageData.data?.data.attributes.info_section_picture.data
									.attributes.height
							}
							alt="About Enersok"
							className="object-cover object-center w-full h-full rounded-xl"
							placeholder='blur'
							blurDataURL={infoBlurImage}
						/>
					</div>
					<div>
						<Heading
							as="h2"
							className="text-[32px] lg:text-[64px] text-secondary uppercase !leading-[normal] py-8 lg:py-10"
						>
							{aboutPageData.data?.data.attributes.info_section_title}
						</Heading>
						<div className="flex flex-col gap-y-6 lg:gap-y-11 text-secondary lg:pb-20">
							<article className="text-sm lg:text-lg prose">
								<Markdown>
									{aboutPageData.data?.data.attributes.info_section_text || ''}
								</Markdown>
							</article>
							{/* <Paragraph className="text-sm lg:text-lg">
								The electricity produced will be sold to Uzbek state-owned power
								company JSC National Electricity Grid of Uzbekistan for a
								duration of 25 years.
							</Paragraph>
							<Paragraph className="text-sm lg:text-lg">
								It will be one of the nation’s largest power generating
								facilities upon completion and will be instrumental in helping
								the country meet its growing energy demands from both industry
								and residential sectors.
							</Paragraph> */}
						</div>
					</div>
				</Container>
			</section>

			{/* Developments */}
			<section>
				<Container className="pb-[140px]">
					<Heading
						as="h2"
						className="lg:w-2/5 text-secondary text-[32px] lg:text-[64px] !leading-[normal] pb-8 lg:pb-[50px]"
					>
						{aboutPageData.data?.data.attributes.development_section_title}
					</Heading>
					<div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-y-[42px] sm:gap-x-5">
						{/* <div className="flex flex-col pl-5 border-l-[1px] border-solid border-secondaryOpacity3 gap-y-8 h-fit">
							<Heading as="h4" className="text-[32px] lg:text-[80px] text-button1 uppercase">
								2022
							</Heading>
							<Paragraph className='text-sm lg:text-2xl text-secondary relative before:absolute before:top-[8px] before:left-[-24px] before:content-["_"] before:w-2 before:h-2 before:bg-green-500 before:rounded-full'>
								Establishment of the Company
							</Paragraph>
							<Paragraph className='text-sm lg:text-2xl text-secondary relative before:absolute before:top-[8px] before:left-[-24px] before:content-["_"] before:w-2 before:h-2 before:bg-green-500 before:rounded-full'>
								Establishment of the Company
							</Paragraph>
							<div className="w-full h-full rounded-xl">
								<Image
									src={Development}
									alt="Development 1 Eneksok"
									className="rounded-xl w-full max-h-[208px] object-cover object-center"
								/>
							</div>
						</div> */}
						{aboutPageDevelopmentData.data?.data.map((development, index) => (
							<div
								key={development.id}
								className={cn(
									'flex flex-col pl-5 border-l-[1px] border-solid border-secondaryOpacity3 gap-y-8 h-fit',
									{
										'mt-0 lg:mt-[100px]': index % 2 !== 0,
									},
								)}
							>
								<Heading
									as="h3"
									className="text-[32px] break-all lg:text-[80px] text-button1 uppercase"
								>
									{development.attributes.development_year}
								</Heading>
								{development.attributes.features.data.map((feature) => (
									<Paragraph
										key={feature.id}
										className='text-sm lg:text-2xl text-secondary relative before:absolute before:top-[8px] before:left-[-24px] before:content-["_"] before:w-2 before:h-2 before:bg-green-500 before:rounded-full'
									>
										{feature.attributes.info_text}
									</Paragraph>
								))}
								<div className="w-full h-full min-h-[208px] max-h-[208px] rounded-xl">
									<Image
										src={getBackendImage(
											development.attributes.development_picture.data.attributes
												.url,
										)}
										width={
											development.attributes.development_picture.data.attributes
												.width
										}
										height={
											development.attributes.development_picture.data.attributes
												.height
										}
										alt="Development 1 Eneksok"
										className="rounded-xl w-full h-full min-h-[208px] max-h-[208px] object-cover object-center"
									/>
								</div>
							</div>
						))}
					</div>
				</Container>
			</section>

			{/* Vision and Objective */}
			<section>
				<Container className="grid grid-cols-1 lg:grid-cols-2 gap-y-[18px] lg:gap-x-5 pb-20 lg:pb-[200px]">
					<div className="bg-backgroundImage5 py-6 px-4 lg:p-8 rounded-xl flex flex-col justify-between">
						<div>
							<Heading
								as="h2"
								className="text-[32px] xl:text-[64px] text-secondary uppercase pb-6 lg:pb-8 border-b-[1px] border-solid border-secondaryOpacity3"
							>
								{aboutPageData.data?.data.attributes.info_section_first_title}
							</Heading>
							<div className="pt-6 lg:pt-8 pb-4 flex flex-col">
								<div className="flex w-fit min-w-12 h-12 items-center justify-center bg-primary rounded-xl">
									<Image src={About1} alt="AFs1 Enersok" />
								</div>
							</div>
							<Paragraph className="text-secondary text-sm lg:text-2xl !leading-[normal] pb-8 lg:pb-[120px]">
								{aboutPageData.data?.data.attributes.info_section_first_text}
							</Paragraph>
						</div>
						<div className="w-full h-fit rounded-xl max-h-[150px] sm:max-h-[200px] lg:max-h-[283px]">
							<Image
								src={getBackendImage(
									aboutPageData.data?.data.attributes.info_section_first_picture
										.data.attributes.url,
								)}
								quality={100}
								width={
									aboutPageData.data?.data.attributes.info_section_first_picture
										.data.attributes.width
								}
								height={
									aboutPageData.data?.data.attributes.info_section_first_picture
										.data.attributes.height
								}
								placeholder='blur'
								blurDataURL={infoFirstBlurImage}
								alt={aboutPageData.data?.data.attributes.info_section_first_picture.data.attributes.name || ''}
								className="w-full max-h-[150px] sm:max-h-[200px] lg:max-h-[283px] object-cover object-center rounded-xl"
							/>
						</div>
					</div>
					<div className="bg-backgroundImage5 py-6 px-4 lg:p-8 rounded-xl flex flex-col justify-between">
						<div>
							<Heading
								as="h2"
								className="text-[32px] xl:text-[64px] text-secondary uppercase pb-6 lg:pb-8 border-b-[1px] border-solid border-secondaryOpacity3"
							>
								{aboutPageData.data?.data.attributes.info_section_second_title}
							</Heading>
							<div className="pt-6 lg:pt-8 pb-4 flex flex-col">
								<div className="flex w-fit min-w-12 h-12 items-center justify-center bg-button1 rounded-xl">
									<Image src={About2} alt="AFs1 Enersok" />
								</div>
							</div>
							<Paragraph className="text-secondary text-sm lg:text-2xl !leading-[normal] pb-8 lg:pb-[120px]">
								{aboutPageData.data?.data.attributes.info_section_second_text}
							</Paragraph>
						</div>
						<div className="w-full h-fit rounded-xl max-h-[150px] sm:max-h-[200px] lg:max-h-[283px]">
							<Image
								src={getBackendImage(
									aboutPageData.data?.data.attributes
										.info_section_second_picture.data.attributes.url,
								)}
								width={
									aboutPageData.data?.data.attributes
										.info_section_second_picture.data.attributes.width
								}
								height={
									aboutPageData.data?.data.attributes
										.info_section_second_picture.data.attributes.height
								}
								placeholder='blur'
								blurDataURL={infoSecondBlurImage}
								alt="Banner2 Eneksok"
								className="w-full max-h-[150px] sm:max-h-[200px] lg:max-h-[283px] object-center rounded-xl"
							/>
						</div>
					</div>
				</Container>
			</section>
		</>
	);
};

export default AboutCompanyPage;
