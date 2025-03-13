import { getGRMSubmissionPage } from '@/api/pages/getGRMSubmissionPage.api';
import { GrmSubmissionForm } from '@/components/form/GrmSubmissionForm';
// import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Paragraph } from '@/components/ui/Paragraph';
// import { RouterConfig } from '@/configs/router.config';
import type {
	DynamicMetadata,
	PageType,
} from '@/types/component.types';
import { getBackendImage } from '@/utils/getBackendImage';
import type { Metadata } from 'next';
import Image from 'next/image';
// import Factory from '@public/factory2.png';
// import Banner from '@public/submission-banner.png';

export const generateMetadata: DynamicMetadata = async ({
	params,
}): Promise<Metadata> => {
	const { locale } = await params;
	const grmSubmissionPageData = await getGRMSubmissionPage(locale);

	return {
		title: grmSubmissionPageData.data?.data.attributes.page_title,
		description: grmSubmissionPageData.data?.data.attributes.about_text,
		robots: 'index, follow',
		keywords:
			locale === 'en'
				? ['Enersok', 'Enersok company', 'Enersok GRM submission']
				: ['Enersok', 'Enersok kompaniyasi', "Enersok GRM jo'natish"],
		openGraph: {
			title: grmSubmissionPageData.data?.data.attributes.page_title,
			description: grmSubmissionPageData.data?.data.attributes.about_text,
			locale: locale,
			tags:
				locale === 'en'
					? ['Enersok', 'Enersok company', 'Enersok GRM submission']
					: ['Enersok', 'Enersok kompaniyasi', "Enersok GRM jo'natish"],
			images: [
				{
					url: getBackendImage(
						grmSubmissionPageData.data?.data.attributes.form_picture.data
							.attributes.url,
					),
					width:
						grmSubmissionPageData.data?.data.attributes.form_picture.data
							.attributes.width,
					height:
						grmSubmissionPageData.data?.data.attributes.form_picture.data
							.attributes.height,
					alt: grmSubmissionPageData.data?.data.attributes.form_picture.data
						.attributes.name,
				},
			],
		},
	};
};

const GRMSubmissionPage: PageType = async ({ params }) => {
	const { locale } = await params;
	// const breadcrumHomeLocale = locale === 'en' ? 'Main' : 'Asosiy';
	// const breadcrumPageLocale =
	// 	locale === 'en' ? 'GRM Submission' : "GRM Jo'natish";
	const formNameLocale =
		locale === 'en' ? 'Your full name' : "To’liq ism-sharifiningiz";
	const formEmailLocale =
		locale === 'en' ? 'Your e-mail' : 'Elektron pochta manzilingiz ';
	const formPhoneLocale =
		locale === 'en' ? 'Your phone' : 'Telefon raqamingiz';
	const formMessageLocale = locale === 'en' ? 'Message' : 'Murojaat mazmuni';
	const formSubmitLocale =
		locale === 'en' ? 'Submit the form' : "Jo’natish";

	const grmSubmissionPageData = await getGRMSubmissionPage(locale);

	return (
		<>
			<section className="bg-backgroundImage1 relative overflow-hidden">
				<Container className="pt-[104px] sm:pt-[164px] pb-5 relative z-10">
					{/* <Breadcrumbs
						textHome={breadcrumHomeLocale}
						textPage={breadcrumPageLocale}
						urlHome={RouterConfig.Home}
						urlPage={RouterConfig.GRMSubmission}
					/> */}
					<Heading className="!leading-[normal] text-secondary uppercase pt-[32px] lg:pt-[75px] text-5xl lg:text-[100px]">
						{grmSubmissionPageData.data?.data.attributes.heading_title}
					</Heading>
					<Paragraph className="w-full text-sm lg:text-2xl pb-7 py-[30px] text-secondary">
						{grmSubmissionPageData.data?.data.attributes.about_text}
					</Paragraph>
					<div className="lg:grid lg:grid-cols-[6fr,4fr] gap-x-7 pb-8 md:pb-[80px]">
						<GrmSubmissionForm
							email={formEmailLocale}
							message={formMessageLocale}
							name={formNameLocale}
							phone={formPhoneLocale}
							sumbmit={formSubmitLocale}
						/>
						<div className="rounded-xl hidden lg:block">
							<Image
								src={getBackendImage(
									grmSubmissionPageData.data?.data.attributes.form_picture.data
										.attributes.url,
								)}
								width={
									grmSubmissionPageData.data?.data.attributes.form_picture.data
										.attributes.width
								}
								height={
									grmSubmissionPageData.data?.data.attributes.form_picture.data
										.attributes.height
								}
								alt={
									grmSubmissionPageData.data?.data.attributes.form_picture.data
										.attributes.name || ''
								}
								quality={100}
								className="w-full h-full object-cover object-center rounded-xl"
							/>
						</div>
					</div>
				</Container>
				<Image
					src={getBackendImage(
						grmSubmissionPageData.data?.data.attributes.background_image.data
							.attributes.url,
					)}
					width={
						grmSubmissionPageData.data?.data.attributes.background_image.data
							.attributes.width
					}
					height={
						grmSubmissionPageData.data?.data.attributes.background_image.data
							.attributes.height
					}
					alt={
						grmSubmissionPageData.data?.data.attributes.background_image.data
							.attributes.name || ''
					}
					className="absolute bottom-[-100px] right-[-100px] rotate-x-180 z-[1] bg-blend-darken opacity-80"
					priority={true}
				/>
				<Image
					src={getBackendImage(
						grmSubmissionPageData.data?.data.attributes.background_image.data
							.attributes.url,
					)}
					width={
						grmSubmissionPageData.data?.data.attributes.background_image.data
							.attributes.width
					}
					height={
						grmSubmissionPageData.data?.data.attributes.background_image.data
							.attributes.height
					}
					alt="Banner Enersok"
					className="absolute bottom-[-20px] left-[-100px] z-[1] bg-blend-darken opacity-80"
					priority={true}
				/>
			</section>
		</>
	);
};

export default GRMSubmissionPage;
