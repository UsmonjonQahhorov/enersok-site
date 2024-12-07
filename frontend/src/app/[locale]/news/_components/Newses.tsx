import { getNews } from "@/api/news/getNews.api";
import { NewCard } from "@/components/ui/NewCard";
import type { Locale } from "@/configs/i18n.config";
import { RouterConfig } from "@/configs/router.config";
import { getBackendImage } from "@/utils/getBackendImage";
import { getOriginSlug } from "@/utils/getOriginSlug.util";
import { PagePagination } from "./PagePagination";

export const Newses = async ({ page, locale }: NewsesProps) => {

     const newsData = await getNews(locale, page);

     return (
          <>
               <div className="hidden lg:grid lg:grid-cols-3 gap-x-5">
                    {newsData.data?.data.slice(0, 3).map((news) => (
                         <NewCard
                              key={news.id}
                              title={news.attributes.preview_title}
                              date={news.attributes.preview_date}
                              image={{
                                   width: news.attributes.preview_picture.data.attributes.width,
                                   height:
                                        news.attributes.preview_picture.data.attributes.height,
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
                    ))}
               </div>
               <div className="hidden lg:grid lg:grid-cols-2 gap-x-5">
                    {newsData.data?.data.slice(3, 5).map((news) => (
                         <NewCard
                              key={news.id}
                              className="[&>div>a>img]:min-h-[353px] [&>div>a>img]:max-h-[353px] [&>div>a:nth-of-type(1)]:min-h-[353px] [&>div>a:nth-of-type(1)]:max-h-[353px]"
                              title={news.attributes.preview_title}
                              date={news.attributes.preview_date}
                              image={{
                                   width: news.attributes.preview_picture.data.attributes.width,
                                   height:
                                        news.attributes.preview_picture.data.attributes.height,
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
                    ))}
               </div>
               <div className="hidden lg:grid lg:grid-cols-3 gap-x-5">
                    {newsData.data?.data.slice(5, 8).map((news) => (
                         <NewCard
                              key={news.id}
                              title={news.attributes.preview_title}
                              date={news.attributes.preview_date}
                              image={{
                                   width: news.attributes.preview_picture.data.attributes.width,
                                   height:
                                        news.attributes.preview_picture.data.attributes.height,
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
                    ))}
               </div>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-12 sm:gap-5 lg:hidden">
                    {newsData.data?.data.map((news) => (
                         <NewCard
                              key={news.id}
                              title={news.attributes.preview_title}
                              date={news.attributes.preview_date}
                              image={{
                                   width: news.attributes.preview_picture.data.attributes.width,
                                   height:
                                        news.attributes.preview_picture.data.attributes.height,
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
                    ))}
               </div>
               <PagePagination
                    page={page}
                    total={newsData.data?.meta.pagination.pageCount ?? 0}
               />
          </>
     )
}

interface NewsesProps {
     locale: Locale;
     page: number;
}