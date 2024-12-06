import { getContactPage } from '@/api/pages/getContactPage.api';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { GMap } from '@/components/ui/Map';
import { Paragraph } from '@/components/ui/Paragraph';
import { SocialIcon } from '@/components/ui/SocialIcon';
import { RouterConfig } from '@/configs/router.config';
import { Link } from '@/i18n/routing';
import type {
	DynamicMetadata,
	PageType,
} from '@/types/component.types';
import { getBackendImage } from '@/utils/getBackendImage';
import LinkedIn from '@public/socials/linked-in.svg';
import Telegram from '@public/socials/telegram.svg';
import type { Metadata } from 'next';
import Image from 'next/image';
// import Factory from '@public/facroty.png';

export const generateMetadata: DynamicMetadata = async ({
	params,
}): Promise<Metadata> => {
	const { locale } = await params;
	const contactPageData = await getContactPage(locale);

	return {
		title: contactPageData.data?.data.attributes.page_title,
		description: contactPageData.data?.data.attributes.heading_title,
		robots: 'index, follow',
		keywords:
			locale === 'en'
				? ['Enersok', 'Enersok company', 'Enersok contact us']
				: ['Enersok', 'Enersok kompaniyasi', "Enersok biz bilan bog'lanish"],
		openGraph: {
			title: contactPageData.data?.data.attributes.page_title,
			description: contactPageData.data?.data.attributes.heading_title,
			locale: locale,
			images: [
				{
					url: getBackendImage(
						contactPageData.data?.data.attributes.heading_section_picture.data
							.attributes.url,
					),
					width:
						contactPageData.data?.data.attributes.heading_section_picture.data
							.attributes.width,
					height:
						contactPageData.data?.data.attributes.heading_section_picture.data
							.attributes.height,
					alt: contactPageData.data?.data.attributes.heading_section_picture
						.data.attributes.name,
				},
			],
			type: 'website',
			emails: contactPageData.data?.data.attributes.email,
			phoneNumbers: contactPageData.data?.data.attributes.phone,
		},
	};
};

const ContactsPage: PageType = async ({ params }) => {
	const { locale } = await params;
	const breadcrumHomeLocale = locale === 'en' ? 'Main' : 'Asosiy';
	const breadcrumPageLocale =
		locale === 'en' ? 'Contact us' : "Biz bilan bog'lanish";
	const phoneLocale = locale === 'en' ? 'Phone:' : 'Telefon:';
	const emailLocale = locale === 'en' ? 'Email:' : 'Elektron pochta:';
	const addressLocale = locale === 'en' ? 'Address:' : 'Manzil:';
	const workHoursLocale = locale === 'en' ? 'Office hours:' : 'Ish vaqtlari:';

	const contactPageData = await getContactPage(locale);

	return (
		<>
			<section className="bg-backgroundImage1 relative overflow-hidden">
				<Container className="pt-[104px] sm:pt-[164px] md:pb-5 relative z-10">
					<Breadcrumbs
						textHome={breadcrumHomeLocale}
						textPage={breadcrumPageLocale}
						urlHome={RouterConfig.Home}
						urlPage={RouterConfig.ContactUs}
					/>
					<Heading className="!leading-[normal] text-secondary uppercase py-8 md:py-[75px] text-5xl lg:text-[100px]">
						{contactPageData.data?.data.attributes.heading_title}
					</Heading>
				</Container>
				<Image
					src={getBackendImage(
						contactPageData.data?.data.attributes.heading_section_picture.data
							.attributes.url,
					)}
					width={
						contactPageData.data?.data.attributes.heading_section_picture.data
							.attributes.width
					}
					height={
						contactPageData.data?.data.attributes.heading_section_picture.data
							.attributes.height
					}
					alt="Banner Enersok"
					className="absolute hidden lg:block bottom-0 right-[122px] z-[1] bg-blend-multiply opacity-40"
					priority={true}
				/>
			</section>
			<section>
				<Container className="py-[50px] lg:pt-[95px] lg:pb-[142px] flex flex-col lg:grid lg:grid-cols-[4.5fr,5.5fr] gap-y-[50px] lg:gap-x-[100px] items-center">
					<div className="flex flex-col gap-y-8 py-5 w-full">
						<Heading
							as="h2"
							className="text-secondary text-[32px] lg:text-5xl pb-6"
						>
							{contactPageData.data?.data.attributes.social_section_title}
						</Heading>
						<ul className="flex flex-col gap-y-8">
							<li>
								<Paragraph className="text-secondaryOpacity5 text-base font-normal pb-1">
									{phoneLocale}
								</Paragraph>
								<Link
									className="text-secondary text-lg lg:text-2xl font-normal hover:text-primary duration-200"
									href={`tel:${contactPageData.data?.data.attributes.phone}`}
								>
									{contactPageData.data?.data.attributes.phone}
								</Link>
							</li>
							<li>
								<Paragraph className="text-secondaryOpacity5 text-base font-normal pb-1">
									{emailLocale}
								</Paragraph>
								<Link
									className="text-secondary text-lg lg:text-2xl font-normal hover:text-primary duration-200"
									href={`mailto:${contactPageData.data?.data.attributes.email}`}
								>
									{contactPageData.data?.data.attributes.email}
								</Link>
							</li>
							<li>
								<Paragraph className="text-secondaryOpacity5 text-base font-normal pb-1">
									{workHoursLocale}
								</Paragraph>
								<Paragraph className="text-secondary text-lg lg:text-2xl font-normal">
									{contactPageData.data?.data.attributes.work_hours}
								</Paragraph>
							</li>
							<li>
								<Paragraph className="text-secondaryOpacity5 text-base font-normal pb-1">
									{addressLocale}
								</Paragraph>
								<Paragraph className="text-secondary text-lg lg:text-2xl font-normal">
									{contactPageData.data?.data.attributes.address}
								</Paragraph>
							</li>
						</ul>
						<ul className="flex gap-x-3">
							<li>
								<SocialIcon
									url={
										contactPageData.data?.data.attributes.telegram_link || ''
									}
									src={Telegram}
									alt={'Enersok Telegram'}
									black={true}
								/>
							</li>
							<li>
								<SocialIcon
									url={
										contactPageData.data?.data.attributes.linkedIn_link || ''
									}
									src={LinkedIn}
									alt={'Enersok LinkedIn'}
									black={true}
								/>
							</li>
						</ul>
					</div>
					<GMap mapUrl={contactPageData.data?.data.attributes.map_link || ''} />
				</Container>
			</section>
		</>
	);
};

export default ContactsPage;
