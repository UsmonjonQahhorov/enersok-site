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

export const LocationSection = () => {

  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  return (
    <Container className='flex justify-between'>
      <div className='*:text-white'>
        <Heading as="h3" size="3xl" className="md:text-[64px] uppercase max-w-[600px] xl:text-6xl leading-8">
          We and our projects are on the map
        </Heading>
        <Paragraph size="sm" className="max-w-[590px] mt-6 xl:text-lg leading-7">
          Enersok FE LLC was formed in 2022 by the Consortium of Electricite De France (EDF), Nebras Power (Qatar), Sojitz Corporation and Kyuden International (Japan), Enersok FE LLC
        </Paragraph>
        <div className='mt-36 flex flex-col'>
          <div className='flex items-center gap-5'
            onMouseEnter={() => setShow1(true)}
            onMouseLeave={() => setShow1(false)}
          >
            <NextImage src={LocationIcon} alt="location" />
            <Paragraph
              className='max-w-96'
            >
              8A Afrosiyob St., Mirabad District, Tashkent city, Uzbekistan, Dmaar Business Center
            </Paragraph>
          </div>
          <hr className='my-5 max-w-[450px]' />
          <div className='flex items-center gap-5'
            onMouseEnter={() => setShow2(true)}
            onMouseLeave={() => setShow2(false)}
          >
            <NextImage src={LocationIcon} alt="location" />
            <Paragraph>
              Shirin City, Syrdarya region, Uzbekistan
            </Paragraph>
          </div>
        </div>
      </div>
      <div className='relative'>
        <NextImage src={UzbMap} alt='map' />
        <NextImage
          onMouseEnter={() => setShow1(true)}
          onMouseLeave={() => setShow1(false)}
          src={LocationPosition}
          alt='map'
          className='absolute top-[45%] left-[80%] transform -translate-x-1/2 -translate-y-1/2'
        />
        <NextImage
          onMouseEnter={() => setShow2(true)}
          onMouseLeave={() => setShow2(false)}
          src={LocationPosition}
          alt='map'
          className='absolute top-[57%] left-[75%] transform -translate-x-1/2 -translate-y-1/2'
        />
        {/* TODO: Fix Position */}
        {
          show1 && (
            <LocationHoverCard className={cn('absolute top-[-120px] left-[120px]')} />
          )
        }
        {
          show2 && (
            <LocationHoverCard className={cn('absolute top-[-120px] left-[120px]')} />
          )
        }
      </div>
    </Container>
  )
}