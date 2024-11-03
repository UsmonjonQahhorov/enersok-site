import { Heading } from "@/components/ui/Heading";
import { Paragraph } from "@/components/ui/Paragraph";
import type { Image } from "@/types/shared.types";
import NextImage from "next/image"
import LocationPosition from '@public/location-position-black.svg';
import Factory from '@public/about.png';
import { cn } from "@/utils/cn";

export const LocationHoverCard = ({ className }: LocationHoverCardProps) => {
     return (
          <article className={cn("flex items-center gap-6 rounded-xl bg-white p-2 pr-12 max-w-[450px]", className)}>
               <NextImage
                    src={Factory}
                    alt="Factory"
                    className="max-w-36 h-full rounded-xl"
               />
               <div className="*:text-secondary flex flex-col gap-4">
                    <Heading as="h4" className="text-2xl uppercase">
                         Enersok FE LLC
                    </Heading>
                    <Paragraph size="sm" className="flex flex-row items-center gap-3">
                         <NextImage src={LocationPosition} alt="Location Position" />
                         8A Afrosiyob St., Mirabad District, Tashkent city
                    </Paragraph>
               </div>
          </article>
     )
}

interface LocationHoverCardProps {
     companyName?: string;
     location?: string;
     image?: Image;
     className?: string;
}