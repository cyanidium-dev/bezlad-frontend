"use client";
import "swiper/css";
import "swiper/css/effect-cards";
import { ReactNode, useCallback } from "react";
import { EffectCards, Keyboard, Autoplay } from "swiper/modules";
import {
    SwiperOptions,
    CardsEffectOptions,
    Swiper as SwiperClass,
} from "swiper/types";
import SwiperWrapper from "./SwiperWrapper";

interface SwiperCardsProps {
    children: ReactNode;
    breakpoints: SwiperOptions["breakpoints"];
    swiperClassName?: string;
    wrapperClassName?: string;
    loop?: boolean;
    isPagination?: boolean;
    autoplay?: SwiperOptions["autoplay"];
    cardsEffect?: boolean;
}

export default function SwiperCards({
    children,
    breakpoints,
    swiperClassName = "",
    wrapperClassName = "",
    loop = false,
    isPagination = false,
    autoplay = false,
    cardsEffect = false,
}: SwiperCardsProps) {
    // Cards effect specific configuration
    const cardsEffectConfig: CardsEffectOptions | undefined = cardsEffect
        ? {
              perSlideOffset: 8,
              perSlideRotate: 2,
              slideShadows: false,
          }
        : undefined;

    // Handle initialization
    const handleSwiperInit = useCallback((swiper: SwiperClass) => {
        swiper.update();
    }, []);

    // Swiper props specific to SwiperCards
    const swiperProps: Partial<SwiperOptions> = {
        pagination: false, // Disable default pagination (we use custom)
        breakpoints: cardsEffect ? undefined : breakpoints,
        slidesPerView: cardsEffect ? 1 : undefined,
        slidesPerGroup: cardsEffect ? 1 : undefined,
        spaceBetween: cardsEffect ? 0 : undefined,
        centeredSlides: cardsEffect ? true : undefined,
        centeredSlidesBounds: cardsEffect ? true : undefined,
        rewind: false,
        keyboard: {
            enabled: true,
            onlyInViewport: true,
        },
        watchSlidesProgress: true,
        grabCursor: cardsEffect ? true : undefined,
        allowTouchMove: true,
        touchEventsTarget: "container",
        observer: true,
        observeParents: true,
        effect: cardsEffect ? "cards" : undefined,
        cardsEffect: cardsEffectConfig,
    };

    return (
        <div
            className={`${wrapperClassName} overflow-visible pt-[80px] lg:pt-[200px]`}
        >
            <SwiperWrapper
                breakpoints={breakpoints}
                swiperClassName={`${swiperClassName} overflow-visible swiper-overflow-visible`}
                wrapperClassName=""
                loop={loop}
                isPagination={false}
                autoplay={autoplay}
                showNavigation={false}
                customPagination={isPagination}
                onInit={handleSwiperInit}
                swiperProps={{
                    ...swiperProps,
                    modules: [
                        Keyboard,
                        ...(autoplay ? [Autoplay] : []),
                        ...(cardsEffect ? [EffectCards] : []),
                    ],
                }}
            >
                {children}
            </SwiperWrapper>
        </div>
    );
}
