import { getNews } from '@/api/news/getNews.api';
import EmblaCarousel from '@/components/navigation/EmblaSlider';
import { NewCard } from '@/components/ui/NewCard';
import type { Locale } from '@/configs/i18n.config';
import { RouterConfig } from '@/configs/router.config';
import { getBackendImage } from '@/utils/getBackendImage';
import { getOriginSlug } from '@/utils/getOriginSlug.util';

export const MoreNews = async ({ locale }: MoreNewsProps) => {
	const moreNews = await getNews(locale);

	const moreNewsLocale = locale === 'en' ? 'More News' : 'Yangiliklar';
	const allNewsLocale = locale === 'en' ? 'All News' : 'Barcha Yangiliklar';

	return (
		<EmblaCarousel
			autoLoopInterval={7000}
			className="[&>div>div>div]:!flex-[0_0_100%] [&>div>div>div]:sm:!flex-[0_0_50%] [&>div>div>div]:lg:!flex-[0_0_33.3333%] [&>div:nth-of-type(1)]:mb-8 [&>div:nth-of-type(1)>div]:lg:flex [&>div:nth-of-type(1)>div]:hidden [&>a]:sm:hidden [&>a]:block"
			showCounter={false}
			slidesToShow={3}
			controlsPosition="above"
			controlsTitle={moreNewsLocale}
			controlsButton={{
				link: '/news',
				text: allNewsLocale,
			}}
			slides={
				moreNews.data?.data.map((news) => (
					<NewCard
						key={news.id}
						title={news.attributes.preview_title}
						date={news.attributes.preview_date}
						image={{
							width: news.attributes.preview_picture.data.attributes.width,
							height: news.attributes.preview_picture.data.attributes.height,
							url: getBackendImage(
								news.attributes.preview_picture.data.attributes.url,
							),
							name: news.attributes.preview_picture.data.attributes.name,
						}}
						time={news.attributes.preview_time}
						url={RouterConfig.SingleNew(
							locale === 'en'
								? news.attributes.slug
								: getOriginSlug(news.attributes.localizations),
						)}
					/>
				)) || []
			}
		/>
	);
};

interface MoreNewsProps {
	locale: Locale;
}
