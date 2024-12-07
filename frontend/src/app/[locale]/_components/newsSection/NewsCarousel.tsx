import EmblaCarousel from "@/components/navigation/EmblaSlider"
import type { Locale } from "@/configs/i18n.config";
import { getBackendImage } from "@/utils/getBackendImage";
import { getOriginSlug } from "@/utils/getOriginSlug.util";
import { NewsCarouselItem } from "./NewsCarouselItem";
import { getNews } from "@/api/news/getNews.api";

export const NewsCarousel = async ({ locale }: NewsCarouselProps) => {
     const newsData = await getNews(locale, 1, 8);

     const carouselItems = newsData.data?.data || [];
     const carouselItemsArray = [];
     for (let i = 0; i < carouselItems.length; i += 4) {
          carouselItemsArray.push(carouselItems.slice(i, i + 4));
     }
     const carouselItemsArrayWithKeys = carouselItemsArray.map((items, index) => ({
          key: `carousel-group-${index}`,
          items,
     }));

     const carouselButtonsText =
          locale === 'en' ? 'All News' : 'Barcha Yangiliklar';
     const newsText = locale === 'en' ? 'News' : 'Yangiliklar';
     return (
          <>
               <EmblaCarousel
                    className="[&>a]:mt-10 [&>a]:block [&>a]:md:hidden [&>div:nth-of-type(1)]:mb-8 [&>div:nth-of-type(1)]:md:mb-16 [&>div:nth-of-type(1)>div]:hidden [&>div:nth-of-type(1)>div]:md:flex"
                    autoLoopInterval={7000}
                    showCounter={false}
                    slidesToShow={1}
                    controlsPosition="above"
                    controlsTitle={newsText}
                    controlsButton={{
                         link: '/news',
                         text: carouselButtonsText,
                    }}
                    slides={carouselItemsArrayWithKeys?.map((carouselItems) => (
                         <NewsCarouselItem
                              key={`${carouselItems.key}`}
                              data={carouselItems.items.map((item) => ({
                                   date: item.attributes.preview_date,
                                   time: item.attributes.preview_time,
                                   title: item.attributes.preview_title,
                                   image: {
                                        url: getBackendImage(
                                             item.attributes.preview_picture.data.attributes.url,
                                        ),
                                        width:
                                             item.attributes.preview_picture.data.attributes.width,
                                        height:
                                             item.attributes.preview_picture.data.attributes.height,
                                        name: item.attributes.preview_picture.data.attributes
                                             .name as string,
                                   },
                                   slug:
                                        locale === 'en'
                                             ? item.attributes.slug
                                             : getOriginSlug(item.attributes.localizations),
                              }))}
                         />
                    ))}
               />
          </>
     )
}

interface NewsCarouselProps {
     locale: Locale;
}