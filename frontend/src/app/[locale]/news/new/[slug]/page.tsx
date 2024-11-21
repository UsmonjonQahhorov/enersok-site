import { getSingleNews } from '@/api/news/getSingleNews.api';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Paragraph } from '@/components/ui/Paragraph';
import { SocialIcon } from '@/components/ui/SocialIcon';
import { RouterConfig } from '@/configs/router.config';
import { redirect } from '@/i18n/routing';
import type { DynamicMetadata, PageType } from '@/types/component.types';
import { cn } from '@/utils/cn';
import { getBackendImage } from '@/utils/getBackendImage';
import { Time } from '@/utils/time';
import LinkedIn from '@public/socials/linked-in.svg';
import Telegram from '@public/socials/telegram.svg';
import TimeIcon from '@public/time.svg';
import Image from 'next/image';
import { Suspense } from 'react';
import { MoreNews } from './_components/MoreNews';
import Markdown from 'markdown-to-jsx';
import type { Metadata } from 'next';
// import Banner from '@public/image (1).png';
// import News from '@public/news.png';

export const generateMetadata: DynamicMetadata = async ({ params }): Promise<Metadata> => {

	const { locale, slug } = await params;

	const singleNewsPageData = await getSingleNews(slug ?? '', locale);

	return {
		title: singleNewsPageData.data?.previewTitle,
		description: singleNewsPageData.data?.newsDescription,
	}
}

const SingleNewPage: PageType = async ({ params }) => {
	const { locale, slug } = await params;
	if (!slug) {
		redirect({
			href: RouterConfig.Careers,
			locale,
		});
		return
	}
	const singleNewsPageData = await getSingleNews(slug, locale);

	if (!singleNewsPageData.ok || !singleNewsPageData.data) {
		redirect({
			href: RouterConfig.Careers,
			locale,
		});
	}

	const breadcrumbsHomeLocale = locale === 'en' ? 'Main' : 'Asosiy';
	const breadcrumbsPageLocale = locale === 'en' ? 'News' : 'Yangiliklar';

	const hasFullDescription = (singleNewsPageData.data?.newsDescriptionFull?.trim().length ?? 0) > 0;
	const hasDescription = (singleNewsPageData.data?.newsDescription?.trim().length ?? 0) > 0;

	const fullContent = { __html: singleNewsPageData.data?.newsDescriptionFull || '' };

	return (
		<>
			<section className="bg-backgroundImage1 relative">
				<Container className="pt-[104px] sm:pt-[164px] pb-5 flex flex-col items-center">
					<Breadcrumbs
						textHome={breadcrumbsHomeLocale}
						textPage={breadcrumbsPageLocale}
						urlHome={RouterConfig.Home}
						urlPage={RouterConfig.News}
						className="self-start"
					/>
					<Heading className="!leading-[normal] w-full text-wrap text-secondary uppercase py-8 lg:pt-[75px] lg:pb-[35px] text-[32px] lg:text-[80px] xl:w-3/4">
						{singleNewsPageData.data?.previewTitle}
					</Heading>
					<div className="w-full xl:w-3/4 flex flex-row gap-x-6 relative pb-[137px] lg:pb-[253px]">
						<Paragraph>
							{Time(singleNewsPageData.data?.previewDate).format('DD.MM.YYYY')}
						</Paragraph>
						<div className="flex flex-row gap-x-2 items-center">
							<Image src={TimeIcon} alt="Time Icon Enersok" className="w-4 h-4" />
							<Paragraph className="!leading-[normal]">
								{singleNewsPageData.data?.previewTime}
							</Paragraph>
						</div>
						<div className="absolute top-14 w-full h-full max-h-[200px] sm:max-h-[350px] lg:max-h-[525px] min-h-[200px] sm:min-h-[350px] lg:min-h-[525px] rounded-xl">
							<Image
								src={getBackendImage(singleNewsPageData.data?.previewPicture.url)}
								width={singleNewsPageData.data?.previewPicture.width}
								height={singleNewsPageData.data?.previewPicture.height}
								alt={singleNewsPageData.data?.previewPicture.name || 'Enersok'}
								className="w-full h-full max-h-[200px] sm:max-h-[350px] lg:max-h-[525px] min-h-[200px] sm:min-h-[350px] object-cover object-center rounded-xl"
							/>
						</div>
					</div>
				</Container>
			</section>
			<section>
				<Container className="pt-[155px] sm:pt-[305px] lg:pt-[405px] flex flex-col items-center">
					{/* Full Description */}
					{
						hasFullDescription && (
							<article
								className={cn(
									'prose w-full max-w-none',
									'xl:w-3/4 pb-[26px] flex flex-col gap-y-6 text-secondary',
									'[&>p]:lg:text-xl [&>p]:lg:pb-6 [&>p]:text-wrap',
									'[&>p]:text-base [&>p]:pb-6',
									'[&>h1]:lg:text-7xl [&>h2]:lg:text-6xl [&>h3]:lg:text-5xl [&>h4]:lg:text-4xl [&>h5]:lg:text-3xl [&>h6]:lg:text-2xl',
									'[&>h1]:text-5xl [&>h2]:text-4xl [&>h3]:text-[32px] [&>h4]:text-2xl [&>h5]:text-xl [&>h6]:text-lg',
									'[&>ul>li]:relative [&>ul>li]:lg:text-xl [&>ul>li]:text-base [&>ul>li]:pb-3 [&>ul>li]:pl-[18px] [&>ul>li]:whitespace-pre-line [&>ul>li]:before:absolute [&>ul>li]:before:w-[9px] [&>ul>li]:before:h-[9px] [&>ul>li]:before:left-0 [&>ul>li]:before:top-[7px] [&>ul>li]:before:rounded-full [&>ul>li]:before:bg-button1 [&>ul>li]:text-wrap',
									'[&>blockquote]:p-12 [&>blockquote]:rounded-xl [&>blockquote]:bg-[#F2F7FA] [&>blockquote]:lg:text-3xl [&>blockquote]:text-2xl [&>blockquote]:text-wrap',
								)}
								dangerouslySetInnerHTML={hasFullDescription ? fullContent : undefined}
							/>
						)
					}
					{/* Short Description */}
					{
						hasDescription && (
							<Markdown
								className='prose w-full max-w-[1200px] text-pretty'
							>
								{singleNewsPageData.data?.newsDescription || ''}
							</Markdown>)
					}


					{/* <p>
							In 2022, Enersok FE LLC was established as a result of a
							collaboration between four international corporations. The
							consortium that founded Enersok FE LLC consists of Electricite De
							France (EDF), a French energy giant, Nebras Power from Qatar, and
							Japanese corporations Sojitz Corporation and Kyuden International.
							Each of these participants brings extensive experience and
							influence in the energy sector, providing a strong foundation for
							the development of the new company.
						</p>
						<h3>Key Members of the Consortium</h3>
						<ul>
							<li>
								<b>Electricite De France (EDF)</b> – One of the largest energy
								players in the world. The French corporation specializes in
								electricity production, including nuclear, hydroelectric, and
								renewable energy.
							</li>
							<li>
								<b>Nebras Power</b> – A Qatari company that invests in global
								energy projects, focusing on long-term sustainability.
							</li>
							<li>
								<b>Sojitz Corporation</b> – A diversified Japanese corporation
								actively involved in various industries, including energy and
								infrastructure.
							</li>
							<li>
								<b>Kyuden International</b> – The international branch of
								Japan's Kyushu Electric Power, engaged in the development of
								energy projects worldwide.
							</li>
						</ul>
						<p>
							In 2022, Enersok FE LLC was established as a result of a
							collaboration between four international corporations. The
							consortium that founded Enersok FE LLC consists of Electricite De
							France (EDF), a French energy giant, Nebras Power from Qatar, and
							Japanese corporations Sojitz Corporation and Kyuden International.
							Each of these participants brings extensive experience and
							influence in the energy sector, providing a strong foundation for
							the development of the new company.
						</p>
						<blockquote>
							In 2022, Enersok FE LLC was established as a result of a
							collaboration between four international corporations. The
							consortium that founded Enersok FE LLC consists of Electricite De
							France (EDF), a French energy giant
						</blockquote>
						<p>
							Corporation and Kyuden International. Each of these participants
							brings extensive experience and influence in the energy sector,
							providing a strong foundation for the development of the new
							company.
						</p> */}
					<div className="w-full xl:w-3/4 flex flex-row items-center gap-x-3 pt-[54px] pb-20 lg:pt-[65px] lg:pb-[148px] border-t-[1px] border-solid border-secondaryOpacity3">
						<Paragraph className="pr-3 text-xl text-secondary">Share</Paragraph>
						<SocialIcon
							src={Telegram}
							url="https://t.me/SYRDARYA_CCGT_2"
							alt="Enersok Telegram"
							black={true}
						/>
						<SocialIcon
							src={LinkedIn}
							url="http://www.linkedin.com/company/enersok-fe-llc"
							alt="Enersok LinkedIn"
							black={true}
						/>
					</div>
				</Container>
			</section>
			<section className='bg-backgroundImage1'>
				<Container className='py-12 lg:py-[169px]'>
					<Suspense>
						<MoreNews locale={locale} />
					</Suspense>
				</Container>
			</section>
		</>
	);
};

export default SingleNewPage;
