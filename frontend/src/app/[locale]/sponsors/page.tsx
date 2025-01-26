import { getAboutSponsors } from '@/api/pages/getAboutSponsors.api';
import { getSponsors } from '@/api/sponsors/getSponsors.api';
// import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Paragraph } from '@/components/ui/Paragraph';
import { SponsorCard } from '@/components/ui/SponsorCard';
import { SponsorCardInfo } from '@/components/ui/SponsorCardInfo';
// import { RouterConfig } from '@/configs/router.config';
import type {
	DynamicMetadata,
	PageType,
} from '@/types/component.types';
import { getBackendImage } from '@/utils/getBackendImage';
import Sponsor5 from '@public/logo.png';
import Line1 from '@public/sponsors/line1.png';
import Line2 from '@public/sponsors/line2.png';
import Line3 from '@public/sponsors/line3.png';
import type { Metadata } from 'next';
import Image from 'next/image';
// import Factory from '@public/facroty.png';
// import Sponsor1 from '@public/sponsors/sponsor1.png';
// import Sponsor2 from '@public/sponsors/sponsor2.png';
// import Sponsor3 from '@public/sponsors/sponsor3.png';
// import Sponsor4 from '@public/sponsors/sponsor4.png';

export const generateMetadata: DynamicMetadata = async ({
	params,
}): Promise<Metadata> => {
	const { locale } = await params;
	const sponsorsPageData = await getAboutSponsors(locale);

	return {
		title: sponsorsPageData.data?.data.attributes.page_title,
		keywords:
			locale === 'en'
				? ['Enersok', 'Enersok company', 'Enersok sponsors']
				: ['Enersok', 'Enersok kompaniyasi', 'Enersok sponsorlar'],
		robots: 'index, follow',
		openGraph: {
			title: sponsorsPageData.data?.data.attributes.page_title,
			locale: locale,
			tags:
				locale === 'en'
					? ['Enersok', 'Enersok company', 'Enersok sponsors']
					: ['Enersok', 'Enersok kompaniyasi', 'Enersok sponsorlar'],
			images: [
				{
					url: getBackendImage(
						sponsorsPageData.data?.data.attributes.heading_picture.data
							.attributes.url,
					),
					width:
						sponsorsPageData.data?.data.attributes.heading_picture.data
							.attributes.width,
					height:
						sponsorsPageData.data?.data.attributes.heading_picture.data
							.attributes.height,
					alt: sponsorsPageData.data?.data.attributes.heading_picture.data
						.attributes.name,
				},
			],
		},
	};
};

const AboutSponsorsPage: PageType = async ({ params }) => {
	const { locale } = await params;

	// const breadcrumHomeLocale = locale === 'en' ? 'Main' : 'Asosiy';
	// const breadcrumPageLocale =
	// 	locale === 'en' ? 'About Sponsors' : 'Sponsorlar haqida';
	const holdingCompanyLocale =
		locale === 'en' ? 'Holding Сompany' : 'Holding kompaniya';
	const projectCompanyLocale =
		locale === 'en' ? 'Project Сompany' : 'Loyiha kompaniyasi';

	const sponsorsPageData = await getAboutSponsors(locale);
	const sponsors = await getSponsors(locale);

	return (
		<>
			{/* Hero Section */}
			<section className="bg-backgroundImage1 relative">
				<Container className="pt-[104px] sm:pt-[164px] lg:pb-5 relative z-10">
					{/* <Breadcrumbs
						textHome={breadcrumHomeLocale}
						textPage={breadcrumPageLocale}
						urlHome={RouterConfig.Home}
						urlPage={RouterConfig.AboutSponsors}
					/> */}
					<Heading className="!leading-[normal] w-1/2 text-secondary uppercase py-8 lg:py-[75px] text-5xl lg:text-[100px]">
						{sponsorsPageData.data?.data.attributes.heading_title}
					</Heading>
				</Container>
				<Image
					src={getBackendImage(
						sponsorsPageData.data?.data.attributes.heading_picture.data
							.attributes.url,
					)}
					width={
						sponsorsPageData.data?.data.attributes.heading_picture.data
							.attributes.width
					}
					height={
						sponsorsPageData.data?.data.attributes.heading_picture.data
							.attributes.height
					}
					alt={
						sponsorsPageData.data?.data.attributes.heading_picture.data
							.attributes.name || 'Enersok'
					}
					className="absolute hidden lg:block bottom-0 right-[122px] bg-blend-multiply opacity-40"
					priority={true}
				/>
			</section>

			{/* About Sponsors Section */}
			<section>
				<Container className="pt-12 pb-[110px] lg:pt-[133px] lg:pb-[160px]">
					<div className="w-full">
						<Heading
							as="h2"
							className="text-[32px] lg:text-[64px] pb-[18px] lg:pb-0 text-secondary uppercase"
						>
							{sponsorsPageData.data?.data.attributes.about_section_title}
						</Heading>
						<Paragraph className="text-sm lg:text-lg text-secondary">
							{sponsorsPageData.data?.data.attributes.about_section_text}
						</Paragraph>
					</div>
					<div className="pt-[136px] md:pt-20">
						<div className="w-full grid grid-cols-[0.1fr,0.9fr] md:flex md:flex-col items-start md:items-center relative">
							<Heading
								as="h2"
								className="text-2xl hidden md:block text-secondary absolute top-[-12px] px-4 bg-white -translate-x-1/2 left-[50%]"
							>
								{sponsorsPageData.data?.data.attributes.sponsors_section_title}
							</Heading>
							<Image
								src={Line1}
								alt="Line1 Enersok"
								className="pb-3 px-4 hidden md:block"
							/>
							<Image
								src={Line3}
								alt="Line3 Enersok"
								className="block md:hidden h-[88%] mt-10"
							/>
							<div className="grid md:grid-cols-4 gap-y-[10px] md:gap-x-3">
								<Heading
									as="h2"
									className="text-2xl absolute -top-[48px] text-secondary md:hidden"
								>
									{
										sponsorsPageData.data?.data.attributes
											.sponsors_section_title
									}
								</Heading>
								{sponsors.data?.data.map((sponsor) => (
									<SponsorCard
										image={{
											width:
												sponsor.attributes.sponsor_logo.data.attributes.width,
											height:
												sponsor.attributes.sponsor_logo.data.attributes.height,
											url: getBackendImage(
												sponsor.attributes.sponsor_logo.data.attributes.url,
											),
											name: sponsor.attributes.sponsor_logo.data.attributes
												.name,
										}}
										title={sponsor.attributes.sponsor_name}
										text={`${sponsor.attributes.sponsor_value}%`}
										key={sponsor.id}
									/>
								))}

								<div className="flex md:hidden flex-col md:items-center">
									<Heading
										as="h2"
										className="text-base lg:text-2xl text-left md:text-center pt-6 pb-3 md:py-3"
									>
										{holdingCompanyLocale}
									</Heading>
									<div className="min-h-[83px] lg:min-h-[116px] w-full md:min-w-[343px] bg-[#F2F7FA] rounded-xl flex justify-center items-center px-3 hover:shadow-lg duration-200">
										<Paragraph className="text-center text-2xl lg:text-[32px] text-[#5055E6]">
											NEKS Energy B.V.
										</Paragraph>
									</div>
									<span className="w-[2px] h-[73px] bg-black hidden md:block" />
								</div>
								<div className="flex md:hidden flex-col md:items-center">
									<Heading
										as="h2"
										className="text-base lg:text-2xl text-left md:text-center pt-8 pb-3 md:py-3"
									>
										{projectCompanyLocale}
									</Heading>
									<div className="min-h-[83px] lg:min-h-[116px] w-full md:min-w-[343px] bg-[#F2F7FA] rounded-xl flex justify-center items-center px-3 hover:shadow-lg duration-200">
										<Image
											src={Sponsor5}
											alt="Sponsor5 Enersok"
											className="max-h-[34px] lg:max-h-[47px] w-auto"
										/>
									</div>
								</div>
							</div>
							<Image
								className="md:w-11/12 xl:w-4/5 hidden md:block"
								src={Line2}
								alt="Line2 Enersok"
							/>
							<div className="hidden md:flex flex-col items-center">
								<Heading
									as="h2"
									className="text-base lg:text-2xl text-center py-3"
								>
									Holding Сompany
								</Heading>
								<div className="min-h-[83px] lg:min-h-[116px] min-w-[343px] bg-[#F2F7FA] rounded-xl flex justify-center items-center px-3 hover:shadow-lg duration-200">
									<Paragraph className="text-center text-[32px] text-[#5055E6]">
										NEKS Energy B.V.
									</Paragraph>
								</div>
								<span className="w-[2px] h-[73px] bg-black" />
							</div>
							<div className="hidden md:flex flex-col items-center">
								<Heading
									as="h2"
									className="text-base lg:text-2xl text-center py-3"
								>
									Project Сompany
								</Heading>
								<div className="min-h-[83px] lg:min-h-[116px] min-w-[343px] bg-[#F2F7FA] rounded-xl flex justify-center items-center px-3 hover:shadow-lg duration-200">
									<Image
										src={Sponsor5}
										alt="Sponsor5 Enersok"
										className="max-h-[34px] lg:max-h-[47px] w-auto"
									/>
								</div>
							</div>
						</div>
					</div>
				</Container>
			</section>

			{/* Sponsors Section */}
			<section>
				<Container className="pb-12 lg:pb-36">
					<Heading
						as="h3"
						className="text-[32px] lg:text-[64px] text-secondary uppercase pb-12 lg:pb-28"
					>
						{sponsorsPageData.data?.data.attributes.sponsors_section_title}
					</Heading>
					<div className="flex flex-col gap-y-12">
						{sponsors.data?.data.map((sponsor) => (
							<SponsorCardInfo
								image={{
									width: sponsor.attributes.sponsor_logo.data.attributes.width,
									height:
										sponsor.attributes.sponsor_logo.data.attributes.height,
									url: getBackendImage(
										sponsor.attributes.sponsor_logo.data.attributes.url,
									),
									name: sponsor.attributes.sponsor_logo.data.attributes.name,
								}}
								title={sponsor.attributes.sponsor_name}
								text={sponsor.attributes.about_sponsor}
								linkText={sponsor.attributes.sponsor_website_link}
								url={sponsor.attributes.sponsor_website_link}
								key={sponsor.id}
							/>
						))}
					</div>
				</Container>
			</section>
		</>
	);
};

export default AboutSponsorsPage;
