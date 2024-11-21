import { Heading } from "@/components/ui/Heading";
import { Paragraph } from "@/components/ui/Paragraph";
import { cn } from "@/utils/cn";
import NextImage from 'next/image';
import type { Image } from '@/types/shared.types';
import TimeImage from '@public/time.svg';
import News from '@public/news.png';
import { Link } from "@/i18n/routing";
import { Time } from "@/utils/time";
import { RouterConfig } from "@/configs/router.config";

export const NewsCarouselItem = ({ data }: NewsCarouselItemProps) => {
     function truncateString(str: string, maxLength: number) {
          if (str.length <= maxLength) {
               return str;
          }

          return str.slice(0, maxLength) + '...';
     }

     return (
          <div
               className="xl:flex gap-8 md:gap-10 h-full"
          >
               <article className='mb-[52px] md:mb-10 xl:mb-0'>
                    <Link href={RouterConfig.SingleNew(data?.[0]?.slug ?? '')} className={cn("flex flex-col items-center text-secondary h-full")}>
                         <NextImage
                              src={data?.[0]?.image?.url ?? News.src}
                              width={data?.[0]?.image?.width ?? News.width}
                              height={data?.[0]?.image?.height ?? News.height}
                              alt={data?.[0]?.image?.name ?? 'News Image'}
                              className="min-h-[200px] max-h-[200px] md:max-h-[370px] md:min-h-[370px] lg:min-w-[716px] w-full h-full object-cover object-center rounded-t-xl"
                         />
                         <div className="flex flex-col bg-backgroundImage1 w-full h-full rounded-b-xl px-6 pt-6 md:pt-8">
                              <Heading as="h4" className="text-2xl text-wrap md:text-[32px] overflow-hidden">
                                   {data?.[0]?.title}
                              </Heading>
                              <div className="flex flex-row gap-x-5 items-center my-4 md:my-6 xl:mb-0 xl:mt-6">
                                   <Paragraph className="text-base !leading-[normal]">
                                        {Time(data?.[0]?.date).format('DD.MM. YYYY')}
                                   </Paragraph>
                                   <div className="flex flex-row items-center gap-x-1">
                                        <NextImage src={TimeImage} alt="Time Enersok News" className="w-4 h-4" />
                                        <Paragraph className="!leading-[normal]">
                                             {data?.[0]?.time}
                                        </Paragraph>
                                   </div>
                              </div>
                         </div>
                    </Link>
               </article>

               <div className="flex flex-col gap-10">
                    {
                         data.slice(1).map((item) => (
                              <article
                                   key={item.image.url}
                              >
                                   <Link href={RouterConfig.SingleNew(item.slug)} className={cn(
                                        'flex gap-6 items-center text-secondary',
                                   )}>
                                        <NextImage
                                             src={item.image.url}
                                             width={item.image.width}
                                             height={item.image.height}
                                             alt="Enersok News Image"
                                             className="hidden md:block min-h-[140px] max-h-[140px] max-w-60 w-full h-full object-cover object-center rounded-xl"
                                        />
                                        <div className="flex flex-col">
                                             <Heading as="h4" className="text-2xl md:text-[28px] text-wrap xl:max-w-[400px]">
                                                  {truncateString(item.title, 30)}
                                             </Heading>
                                             <div className="flex flex-row gap-x-5 items-center mt-3 md:mt-6">
                                                  <Paragraph className="text-base !leading-[normal]">
                                                       {Time(item.date).format('DD.MM. YYYY')}
                                                  </Paragraph>
                                                  <div className="flex flex-row items-center gap-x-1">
                                                       <NextImage src={TimeImage} alt="Time Enersok News" className="w-4 h-4" />
                                                       <Paragraph className="!leading-[normal]">
                                                            {item.time}
                                                       </Paragraph>
                                                  </div>
                                             </div>
                                        </div>
                                   </Link>
                              </article>
                         ))
                    }
               </div>
          </div>
     )
}

export interface NewsCarouselItemProps {
     data: New[]
}

interface New {
     title: string;
     date: Date;
     time: string;
     image: Image;
     slug: string;
}