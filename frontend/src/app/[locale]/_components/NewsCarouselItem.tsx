import { Heading } from "@/components/ui/Heading";
import { Paragraph } from "@/components/ui/Paragraph";
import { cn } from "@/utils/cn";
import NextImage from 'next/image';
import type { Image } from '@/types/shared.types';
import Time from '@public/time.svg';
import News from '@public/news.png';
import { Link } from "@/i18n/routing";

export const NewsCarouselItem = ({ data }: NewsCarouselItemProps) => {
     return (
          <div className="flex gap-10">
               <article>
                    <Link href={"/"} className={cn("flex flex-col items-center text-secondary h-full")}>
                         <NextImage
                              src={News}
                              alt="Enersok News Image"
                              className="max-h-[360px] min-w-[760px] w-full h-full object-cover object-center rounded-t-xl"
                         />
                         <div className="flex flex-col bg-backgroundImage1 w-full h-full rounded-b-xl px-6 pt-8">
                              <Heading as="h4" className="text-[32px]">
                                   Entered into public-private partnership
                              </Heading>
                              <div className="flex flex-row gap-x-5 items-center mt-6">
                                   <Paragraph className="text-base !leading-[normal]">05.08. 2024</Paragraph>
                                   <div className="flex flex-row items-center gap-x-1">
                                        <NextImage src={Time} alt="Time Enersok News" className="w-4 h-4" />
                                        <Paragraph className="!leading-[normal]">05.08. 2024</Paragraph>
                                   </div>
                              </div>
                         </div>
                    </Link>
               </article>

               <div className="flex flex-col gap-10">
                    <article>
                         <Link href={"/"} className={cn(
                              'flex gap-6 items-center text-secondary',
                         )}>
                              <NextImage
                                   src={News}
                                   alt="Enersok News Image"
                                   className="max-h-[287px] max-w-60 w-full h-full object-cover object-center rounded-xl"
                              />
                              <div className="flex flex-col">
                                   <Heading as="h4" className="text-[32px] max-w-[400px]">
                                        Entered into public-private partnership
                                   </Heading>
                                   <div className="flex flex-row gap-x-5 items-center mt-6">
                                        <Paragraph className="text-base !leading-[normal]">05.08. 2024</Paragraph>
                                        <div className="flex flex-row items-center gap-x-1">
                                             <NextImage src={Time} alt="Time Enersok News" className="w-4 h-4" />
                                             <Paragraph className="!leading-[normal]">05.08. 2024</Paragraph>
                                        </div>
                                   </div>
                              </div>
                         </Link>
                    </article>
                    <article>
                         <Link href={"/"} className={cn(
                              'flex gap-6 items-center text-secondary',
                         )}>
                              <NextImage
                                   src={News}
                                   alt="Enersok News Image"
                                   className="max-h-[287px] max-w-60 w-full h-full object-cover object-center rounded-xl"
                              />
                              <div className="flex flex-col">
                                   <Heading as="h4" className="text-[32px] max-w-[400px]">
                                        Entered into public-private partnership
                                   </Heading>
                                   <div className="flex flex-row gap-x-5 items-center mt-6">
                                        <Paragraph className="text-base !leading-[normal]">05.08. 2024</Paragraph>
                                        <div className="flex flex-row items-center gap-x-1">
                                             <NextImage src={Time} alt="Time Enersok News" className="w-4 h-4" />
                                             <Paragraph className="!leading-[normal]">05.08. 2024</Paragraph>
                                        </div>
                                   </div>
                              </div>
                         </Link>
                    </article>
                    <article>
                         <Link href={"/"} className={cn(
                              'flex gap-6 items-center text-secondary',
                         )}>
                              <NextImage
                                   src={News}
                                   alt="Enersok News Image"
                                   className="max-h-[287px] max-w-60 w-full h-full object-cover object-center rounded-xl"
                              />
                              <div className="flex flex-col">
                                   <Heading as="h4" className="text-[32px] max-w-[400px]">
                                        Entered into public-private partnership
                                   </Heading>
                                   <div className="flex flex-row gap-x-5 items-center mt-6">
                                        <Paragraph className="text-base !leading-[normal]">05.08. 2024</Paragraph>
                                        <div className="flex flex-row items-center gap-x-1">
                                             <NextImage src={Time} alt="Time Enersok News" className="w-4 h-4" />
                                             <Paragraph className="!leading-[normal]">05.08. 2024</Paragraph>
                                        </div>
                                   </div>
                              </div>
                         </Link>
                    </article>
               </div>
          </div>
     )
}

interface NewsCarouselItemProps {
     data?: New[]
}

interface New {
     title: string;
     date: string;
     time: string;
     image: Image;
}