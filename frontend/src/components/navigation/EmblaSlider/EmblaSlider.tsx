'use client';
import { useState, useCallback, useEffect, type ReactNode } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { cn } from '@/utils/cn';

interface EmblaCarouselProps {
    slides: ReactNode[];
    showCounter?: boolean;
    controlsPosition?: 'above' | 'below';
    controlsTitle?: string;
    controlsButton?: { text: string; link: string };
    autoLoopInterval?: number;
    slidesToShow?: number;
}

const EmblaCarousel: React.FC<EmblaCarouselProps> = ({
    slides,
    showCounter = true,
    controlsPosition = 'below',
    controlsTitle,
    controlsButton,
    autoLoopInterval = 4000,
    slidesToShow = 1,
}) => {
    const [viewportRef, embla] = useEmblaCarousel({ loop: true });
    const [selectedIndex, setSelectedIndex] = useState(0);

    const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
    const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

    const onSelect = useCallback(() => {
        if (!embla) return;
        setSelectedIndex(embla.selectedScrollSnap());
    }, [embla, setSelectedIndex]);

    useEffect(() => {
        if (!embla) return;
        embla.on('select', onSelect);
    }, [embla, onSelect]);

    useEffect(() => {
        if (!embla || !autoLoopInterval) return;
        const autoScroll = () => embla.scrollNext();
        const intervalId = setInterval(autoScroll, autoLoopInterval);
        return () => clearInterval(intervalId);
    }, [embla, autoLoopInterval]);

    const slideWidthPercentage = 100 / slidesToShow;

    const Controls = (
        <div className={cn(
            'flex items-center justify-between',
            {
                'mb-16': controlsPosition === 'above',
                'mt-16': controlsPosition === 'below',
                'justify-start gap-x-8': showCounter === true,
                'justify-center': showCounter === false && controlsTitle === undefined && controlsButton === undefined
            }
        )}>
            {controlsTitle && <h3 className="text-[64px] text-secondary uppercase">{controlsTitle}</h3>}
            <div className={cn(
                'flex items-center',
                {
                    'flex-row-reverse gap-x-8': controlsButton !== undefined,
                }
            )}>
                <div className="flex items-center gap-x-[6px]">
                    <button className="embla__button-prev p-[14.5px] rounded-full border-[1px] border-solid border-secondary bg-transparent hover:border-button1 [&:hover>svg>path]:fill-button1 duration-300" onClick={scrollPrev} aria-label="Previous slide">
                        <svg className="embla__button__svg w-[13px] h-[13px] [&>path]:fill-secondary" viewBox="0 0 532 532">
                            <path
                                className='duration-300'
                                fill="currentColor"
                                d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
                            />
                        </svg>
                    </button>
                    <button className="embla__button-next p-[14.5px] rounded-full border-[1px] border-solid border-secondary bg-transparent hover:border-button1 [&:hover>svg>path]:fill-button1 duration-300" onClick={scrollNext} aria-label="Next slide">
                        <svg className="embla__button__svg w-[13px] h-[13px] [&>path]:fill-secondary" viewBox="0 0 532 532">
                            <path
                                className='duration-300'
                                fill="currentColor"
                                d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
                            />
                        </svg>
                    </button>
                </div>
                {controlsButton && (
                    <a href={controlsButton.link} className="py-[22px] px-[32px] text-lg bg-button1 hover:bg-button1/90 text-white rounded-[100px]">
                        {controlsButton.text}
                    </a>
                )}
            </div>
            {showCounter && (
                <div className="embla__counter text-2xl text-secondary">
                    {selectedIndex + 1}/{slides.length}
                </div>
            )}
        </div>
    );

    return (
        <div className="embla relative w-full overflow-hidden">
            {controlsPosition === 'above' && Controls}
            <div className="embla__viewport w-full overflow-hidden" ref={viewportRef}>
                <div className="embla__container flex">
                    {slides.map((slide, index) => (
                        <div
                            className="embla__slide relative"
                            style={{ flex: `0 0 ${slideWidthPercentage}%` }}
                            key={index}
                        >
                            {slide}
                        </div>
                    ))}
                </div>
            </div>
            {controlsPosition === 'below' && Controls}
        </div>
    );
};

export default EmblaCarousel;
