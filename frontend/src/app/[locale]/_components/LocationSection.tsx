'use client';

import { Container } from "@/components/ui/Container"
import { Heading } from "@/components/ui/Heading"
import { Paragraph } from "@/components/ui/Paragraph"
import NextImage from "next/image"
import LocationIcon from '@public/location-icon.svg';
import UzbMap from '@public/uzb-map.png';
import LocationPosition from '@public/location-position.svg';
import { LocationHoverCard } from "./LocationHoverCard";
import { cn } from "@/utils/cn";
import { useState } from "react";
import type { Image } from "@/types/shared.types";

export const LocationSection = ({
  description,
  firstLocation,
  secondLocation,
  title,
  firstLocationImage,
  secondLocationImage,
  firstLocationCompanyName,
  secondLocationCompanyName
}: LocationSectionProps) => {

  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  return (
    <Container className='grid lg:grid-cols-[0.4fr,0.6fr] gap-y-[50px] gap-x-10 xl:gap-x-0 xl:flex xl:justify-between'>
      <div className='*:text-white *:text-wrap'>
        <Heading as="h3" className="text-[32px] md:text-4xl uppercase lg:max-w-[600px] xl:text-6xl leading-8">
          {title}
        </Heading>
        <Paragraph className="lg:max-w-[590px] mt-6 text-sm xl:text-lg leading-7">
          {description}
        </Paragraph>
        <div className='mt-16 lg:mt-36 flex flex-col'>
          <div className='flex flex-col md:flex-row items-start md:items-center gap-5'
            onMouseEnter={() => setShow1(true)}
            onMouseLeave={() => setShow1(false)}
          >
            <NextImage src={LocationIcon} alt="location" />
            <Paragraph
              className='lg:max-w-96 text-lg'
            >
              {firstLocation}
            </Paragraph>
          </div>
          <hr className='my-5 lg:max-w-[450px]' />
          <div className='flex flex-col md:flex-row items-start md:items-center gap-5'
            onMouseEnter={() => setShow2(true)}
            onMouseLeave={() => setShow2(false)}
          >
            <NextImage src={LocationIcon} alt="location" />
            <Paragraph
              className='lg:max-w-96 text-lg'
            >
              {secondLocation}
            </Paragraph>
          </div>
        </div>
      </div>
      <div className='relative flex items-center xl:block'>
        <NextImage src={UzbMap} alt='map' />
        <NextImage
          onMouseEnter={() => setShow1(true)}
          onMouseLeave={() => setShow1(false)}
          src={LocationPosition}
          alt='map'
          className='absolute top-[49%] lg:top-[50%] xl:top-[42%] 2xl:top-[45%] left-[80%] transform -translate-x-1/2 -translate-y-1/2'
        />
        <NextImage
          onMouseEnter={() => setShow2(true)}
          onMouseLeave={() => setShow2(false)}
          src={LocationPosition}
          alt='map'
          className='absolute top-[63%] lg:top-[60%] xl:top-[53%] 2xl:top-[57%] left-[75%] transform -translate-x-1/2 -translate-y-1/2'
        />
        {/* TODO: Fix Position */}
        {
          show1 && (
            <LocationHoverCard
              companyName={firstLocationCompanyName}
              location={firstLocation}
              image={firstLocationImage}
              className={cn('absolute top-[-30px] xl:top-[-120px] left-0 sm:left-[100px] md:left-[200px] lg:left-[120px]')}
            />
          )
        }
        {
          show2 && (
            <LocationHoverCard
              companyName={secondLocationCompanyName}
              location={secondLocation}
              image={secondLocationImage}
              className={cn('absolute top-[-30px] xl:top-[-120px] left-0 sm:left-[100px] md:left-[200px] lg:left-[120px]')}
            />
          )
        }
      </div>
    </Container>
  )
}

interface LocationSectionProps {
  title: string;
  description: string;
  firstLocation: string;
  secondLocation: string;
  firstLocationCompanyName: string;
  secondLocationCompanyName: string;
  firstLocationImage: Image;
  secondLocationImage: Image;
}