import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import type { DynamicMetadata, PageType } from '@/types/component.types';
import Image from 'next/image';
import Factory from '@public/facroty.png';
import { RouterConfig } from '@/configs/router.config';
import { Paragraph } from '@/components/ui/Paragraph';
import { CareerForm } from '@/components/form/CareerForm';
import { getVacancy } from '@/api/vacancies/getVanacy.api';
import { redirect } from '@/i18n/routing';
import { Time } from '@/utils/time';
import Markdown from 'markdown-to-jsx';
import type { Metadata } from 'next';

export const generateMetadata: DynamicMetadata = async ({ params }): Promise<Metadata> => {

	const { locale, slug } = await params;

	const aboutPageData = await getVacancy(slug ?? '', locale);

	return {
		title: aboutPageData.data?.vacancyName,
		description: aboutPageData.data?.vacancyDescription,
	}
}

const SingleCareerPage: PageType = async ({ params }) => {
	const { locale, slug } = await params;
	if (!slug) {
		redirect({
			href: RouterConfig.Careers,
			locale,
		});
		return
	}
	const vacancyPageData = await getVacancy(slug, locale);

	if (!vacancyPageData.ok || !vacancyPageData.data) {
		redirect({
			href: RouterConfig.Careers,
			locale,
		});
	}

	const breadcrumbsHomeLocale = locale === 'en' ? 'Main' : 'Asosiy';
	const breadcrumbsPageLocale = locale === 'en' ? 'Careers' : 'Karyera';
	const locationLocale = locale === 'en' ? 'Location' : 'Joylashuv';
	const postingDateLocale = locale === 'en' ? 'Posting Date' : 'E’lon qilingan sana';
	const closingDateLocale = locale === 'en' ? 'Closing Date' : 'Yopilish sanasi';
	const formTitle = locale === 'en' ? 'Send your resume' : 'Sizning rezumeingizni yuboring';
	const email = locale === 'en' ? 'Your e-mail' : 'Sizning elektron pochtangiz';
	const message = locale === 'en' ? 'Message' : 'Xabar';
	const name = locale === 'en' ? 'Your full name' : 'To’liq ismingiz';
	const phone = locale === 'en' ? 'Your phone' : 'Telefon raqamingiz';
	const sumbmit = locale === 'en' ? 'Send your resume' : 'Sizning rezumeingizni yuboring';
	const file = locale === 'en' ? 'File' : 'Fayl';

	return (
		<>
			<section className="bg-backgroundImage1 relative">
				<Container className="pt-[104px] sm:pt-[164px] pb-8 lg:pb-20 relative z-10">
					<Breadcrumbs
						textHome={breadcrumbsHomeLocale}
						textPage={breadcrumbsPageLocale}
						urlHome={RouterConfig.Home}
						urlPage={RouterConfig.Careers}
					/>
					<Heading className="!leading-[normal] text-secondary w-full uppercase py-8 lg:py-[75px] text-5xl lg:text-[100px] lg:pb-16">
						{vacancyPageData.data?.vacancyName}
					</Heading>
					<div className="flex flex-col lg:flex-row gap-y-8 lg:gap-x-16">
						<div className="flex flex-col items-start gap-y-2">
							<Paragraph className="text-secondaryOpacity4 text-sm">
								{locationLocale}
							</Paragraph>
							<Paragraph className="text-xl text-secondary max-w-96 text-pretty">
								{vacancyPageData.data?.vacancyLocation}
							</Paragraph>
						</div>
						<div className="flex flex-row gap-x-8">
							<div className="flex flex-col items-start gap-y-2">
								<Paragraph className="text-secondaryOpacity4 text-sm">
									{postingDateLocale}
								</Paragraph>
								<Paragraph className="text-xl text-secondary">
									{Time(vacancyPageData.data?.vacancyPublishedDate).format('DD.MM.YYYY')}
								</Paragraph>
							</div>
							<div className="flex flex-col items-start gap-y-2">
								<Paragraph className="text-secondaryOpacity4 text-sm">
									{closingDateLocale}
								</Paragraph>
								<Paragraph className="text-xl text-secondary">
									{Time(vacancyPageData.data?.vacancyClosingDate).format('DD.MM.YYYY')}
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
					<article className="flex flex-col gap-y-11 prose *:text-secondary prose-p:text-secondary prose-headings:text-secondary">
						<Markdown className='prose text-wrap'>
							{vacancyPageData.data?.vacancyDescription || ''}
						</Markdown>
						{/* <div className="flex flex-col">
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
						</div> */}
					</article>
					<CareerForm
						text={formTitle}
						email={email}
						message={message}
						name={name}
						phone={phone}
						sumbmit={sumbmit}
						file={file}
					/>
				</Container>
				<CareerForm
					text={formTitle}
					email={email}
					message={message}
					name={name}
					phone={phone}
					sumbmit={sumbmit}
					file={file}
				/>
			</section>
		</>
	);
};

export default SingleCareerPage;
