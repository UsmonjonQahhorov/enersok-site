import { getDevelopments } from "@/api/developments/getDevelopments.api";
import { Heading } from "@/components/ui/Heading";
import { Paragraph } from "@/components/ui/Paragraph";
import type { Locale } from "@/configs/i18n.config";
import { cn } from "@/utils/cn";
import { getBackendImage } from "@/utils/getBackendImage";
import Image from "next/image";

export const Developments = async ({ locale }: DevelopmentsProps) => {
     const aboutPageDevelopmentData = await getDevelopments(locale);

     return (
          <>
               {aboutPageDevelopmentData.data?.data.map((development, index) => (
                    <div
                         key={development.id}
                         className={cn(
                              'flex flex-col pl-5 border-l-[1px] border-solid border-secondaryOpacity3 gap-y-8 h-fit',
                              {
                                   'mt-0 lg:mt-[100px]': index % 2 !== 0,
                              },
                         )}
                    >
                         <Heading
                              as="h3"
                              className="text-[32px] break-all lg:text-[80px] text-button1 uppercase"
                         >
                              {development.attributes.development_year}
                         </Heading>
                         {development.attributes.features.data.map((feature) => (
                              <Paragraph
                                   key={feature.id}
                                   className='text-sm lg:text-2xl text-secondary relative before:absolute before:top-[8px] before:left-[-24px] before:content-["_"] before:w-2 before:h-2 before:bg-green-500 before:rounded-full'
                              >
                                   {feature.attributes.info_text}
                              </Paragraph>
                         ))}
                         <div className="w-full h-full min-h-[208px] max-h-[208px] rounded-xl">
                              <Image
                                   src={getBackendImage(
                                        development.attributes.development_picture.data.attributes
                                             .url,
                                   )}
                                   width={
                                        development.attributes.development_picture.data.attributes
                                             .width
                                   }
                                   height={
                                        development.attributes.development_picture.data.attributes
                                             .height
                                   }
                                   alt="Development 1 Eneksok"
                                   className="rounded-xl w-full h-full min-h-[208px] max-h-[208px] object-cover object-center"
                              />
                         </div>
                    </div>
               ))}
          </>
     )
}

interface DevelopmentsProps {
     locale: Locale;
}