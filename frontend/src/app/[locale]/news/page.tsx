import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { RouterConfig } from '@/configs/router.config';
import type { DynamicMetadata, PageType } from '@/types/component.types';
import Image from 'next/image';
// import Factory from '@public/facroty.png';
import { NewCard } from '@/components/ui/NewCard';
// import News from '@public/news.png';
import { getNews } from '@/api/news/getNews.api';
import { getNewsPage } from '@/api/pages/getNewsPage.api';
import { getBackendImage } from '@/utils/getBackendImage';
import { getOriginSlug } from '@/utils/getOriginSlug.util';
import type { Metadata } from 'next';
import { PagePagination } from './_components/PagePagination';

export const generateMetadata: DynamicMetadata = async ({ params }): Promise<Metadata> => {

	const { locale } = await params;
	const newsPageData = await getNewsPage(locale);

	return {
		title: newsPageData.data?.data.attributes.page_title,
	}
}

const NewsPage: PageType = async ({ params, searchParams }) => {
	const { locale } = await params;
	const query = await searchParams;
	const page = Number.parseInt(query?.page as string) || 1;

	const breadcrumHomeLocale = locale === 'en' ? 'Main' : 'Asosiy';
	const breadcrumPageLocale = locale === 'en' ? 'News' : 'Yangiliklar';

	const newsPageData = await getNewsPage(locale);
	const newsData = await getNews(locale, page);

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
					src={getBackendImage(newsPageData.data?.data.attributes.heading_picture.data.attributes.url)}
					width={newsPageData.data?.data.attributes.heading_picture.data.attributes.width}
					height={newsPageData.data?.data.attributes.heading_picture.data.attributes.height}
					alt={newsPageData.data?.data.attributes.heading_picture.data.attributes.name || 'News Banner Enersok'}
					className="absolute hidden lg:block bottom-0 right-[122px]"
					priority={true}
				/>
			</section>
			<section>
				<Container className="flex flex-col gap-y-20 py-12 sm:py-16">
					<div className="hidden lg:grid lg:grid-cols-3 gap-x-5">
						{
							newsData.data?.data.slice(0, 3).map((news) => (
								<NewCard
									key={news.id}
									title={news.attributes.preview_title}
									date={news.attributes.preview_date}
									image={{
										width: news.attributes.preview_picture.data.attributes.width,
										height: news.attributes.preview_picture.data.attributes.height,
										url: getBackendImage(news.attributes.preview_picture.data.attributes.url),
										name: news.attributes.preview_picture.data.attributes.name,
									}}
									time={news.attributes.preview_time}
									url={RouterConfig.SingleNew(locale === 'en' ? news.attributes.slug : getOriginSlug(news.attributes.localizations))}
								/>
							))
						}
					</div>
					<div className="hidden lg:grid lg:grid-cols-2 gap-x-5">
						{
							newsData.data?.data.slice(3, 5).map((news) => (
								<NewCard
									key={news.id}
									title={news.attributes.preview_title}
									date={news.attributes.preview_date}
									image={{
										width: news.attributes.preview_picture.data.attributes.width,
										height: news.attributes.preview_picture.data.attributes.height,
										url: getBackendImage(news.attributes.preview_picture.data.attributes.url),
										name: news.attributes.preview_picture.data.attributes.name,
									}}
									time={news.attributes.preview_time}
									url={RouterConfig.SingleNew(locale === 'en' ? news.attributes.slug : getOriginSlug(news.attributes.localizations))}
								/>
							))
						}
					</div>
					<div className="hidden lg:grid lg:grid-cols-3 gap-x-5">
						{
							newsData.data?.data.slice(5, 8).map((news) => (
								<NewCard
									key={news.id}
									title={news.attributes.preview_title}
									date={news.attributes.preview_date}
									image={{
										width: news.attributes.preview_picture.data.attributes.width,
										height: news.attributes.preview_picture.data.attributes.height,
										url: getBackendImage(news.attributes.preview_picture.data.attributes.url),
										name: news.attributes.preview_picture.data.attributes.name,
									}}
									time={news.attributes.preview_time}
									url={RouterConfig.SingleNew(locale === 'en' ? news.attributes.slug : getOriginSlug(news.attributes.localizations))}
								/>
							))
						}
					</div>
					<div className='grid grid-cols-1 sm:grid-cols-2 gap-y-12 sm:gap-5 lg:hidden'>
						{
							newsData.data?.data.map((news) => (
								<NewCard
									key={news.id}
									title={news.attributes.preview_title}
									date={news.attributes.preview_date}
									image={{
										width: news.attributes.preview_picture.data.attributes.width,
										height: news.attributes.preview_picture.data.attributes.height,
										url: getBackendImage(news.attributes.preview_picture.data.attributes.url),
										name: news.attributes.preview_picture.data.attributes.name,
									}}
									time={news.attributes.preview_time}
									url={RouterConfig.SingleNew(locale === 'en' ? news.attributes.slug : getOriginSlug(news.attributes.localizations))}
								/>
							))
						}
					</div>
					<PagePagination
						page={page}
						total={newsData.data?.meta.pagination.pageCount ?? 0}
					/>
				</Container>
			</section>
		</>
	);
};

export default NewsPage;
