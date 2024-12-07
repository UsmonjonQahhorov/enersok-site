import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { RouterConfig } from '@/configs/router.config';
import type { DynamicMetadata, PageType } from '@/types/component.types';
import Image from 'next/image';
// import News from '@public/news.png';
import { getNewsPage } from '@/api/pages/getNewsPage.api';
import { getBackendImage } from '@/utils/getBackendImage';
import type { Metadata } from 'next';
import { Newses } from './_components/Newses';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/Skeleton';

export const generateMetadata: DynamicMetadata = async ({
	params,
}): Promise<Metadata> => {
	const { locale } = await params;
	const newsPageData = await getNewsPage(locale);

	return {
		title: newsPageData.data?.data.attributes.page_title,
		robots: 'index, follow',
	};
};

const NewsPage: PageType = async ({ params, searchParams }) => {
	const { locale } = await params;
	const query = await searchParams;
	const page = Number.parseInt(query?.page as string) || 1;

	const breadcrumHomeLocale = locale === 'en' ? 'Main' : 'Asosiy';
	const breadcrumPageLocale = locale === 'en' ? 'News' : 'Yangiliklar';

	const newsPageData = await getNewsPage(locale);

	return (
		<>
			{/* Hero Section */}
			<section className="bg-backgroundImage1 relative">
				<Container className="pt-[104px] sm:pt-[164px] pb-5 relative z-10">
					<Breadcrumbs
						textHome={breadcrumHomeLocale}
						textPage={breadcrumPageLocale}
						urlHome={RouterConfig.Home}
						urlPage={RouterConfig.News}
					/>
					<Heading className="!leading-[normal] text-secondary uppercase py-8 lg:pt-[170px] lg:pb-[105px] text-[32px] lg:text-[100px]">
						{newsPageData.data?.data.attributes.page_title}
					</Heading>
				</Container>
				<Image
					src={getBackendImage(
						newsPageData.data?.data.attributes.heading_picture.data.attributes
							.url,
					)}
					width={
						newsPageData.data?.data.attributes.heading_picture.data.attributes
							.width
					}
					height={
						newsPageData.data?.data.attributes.heading_picture.data.attributes
							.height
					}
					alt={
						newsPageData.data?.data.attributes.heading_picture.data.attributes
							.name || 'News Banner Enersok'
					}
					className="absolute hidden lg:block bottom-0 right-[122px] bg-blend-multiply opacity-40"
					priority={true}
				/>
			</section>
			<section>
				<Container className="flex flex-col gap-y-10 lg:gap-y-20 py-12 sm:py-16">
					<Suspense
						fallback={
							<Skeleton className="w-full h-[300px] sm:h-[400px] bg-slate-300" />
						}
					>
						<Newses locale={locale} page={page} />
					</Suspense>
				</Container>
			</section>
		</>
	);
};

export default NewsPage;
