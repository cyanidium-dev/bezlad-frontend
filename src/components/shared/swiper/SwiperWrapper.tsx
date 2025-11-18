"use client";
import { SwiperClass } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import clsx from "clsx";
import { Children, useEffect, useCallback, useState } from "react";
import { SwiperOptions } from "swiper/types";
import dynamic from "next/dynamic";
import { Keyboard } from "swiper/modules";

interface SwiperWrapperProps {
    children: React.ReactNode;
    slidesPerView?: number | "auto";
    pagination?: boolean;
    breakpoints?: SwiperOptions["breakpoints"];
    overflowVisible?: boolean;
    spaceBetween?: number;
}

export const SwiperWrapper = dynamic(
    async () => {
        const [{ Swiper }] = await Promise.all([import("swiper/react")]);

        const Component = ({
            children,
            slidesPerView = "auto",
            pagination = false,
            breakpoints,
            overflowVisible = false,
            spaceBetween = 20,
        }: SwiperWrapperProps) => {
            const [swiperInstance, setSwiperInstance] =
                useState<SwiperClass | null>(null);
            const [activeIndex, setActiveIndex] = useState(0);
            const slidesCount = Children.count(children);

            // Handle slide change for custom pagination
            const handleSlideChange = useCallback((swiper: SwiperClass) => {
                setActiveIndex(swiper.realIndex ?? swiper.activeIndex);
            }, []);

            useEffect(() => {
                if (swiperInstance && pagination) {
                    swiperInstance.on("slideChange", handleSlideChange);

                    return () => {
                        swiperInstance.off("slideChange", handleSlideChange);
                    };
                }
            }, [swiperInstance, pagination, handleSlideChange]);

            const goToSlide = (index: number) => {
                swiperInstance?.slideTo(index);
            };

            return (
                <>
                    <Swiper
                        onSwiper={setSwiperInstance}
                        slidesPerView={slidesPerView}
                        breakpoints={breakpoints}
                        spaceBetween={spaceBetween}
                        className={overflowVisible ? "overflow-visible!" : ""}
                        watchSlidesProgress={overflowVisible ? true : false}
                        modules={[Keyboard]}
                        keyboard={{
                            enabled: true,
                        }}
                    >
                        {children}
                    </Swiper>
                    {pagination && slidesCount > 0 && (
                        <div className="flex items-center justify-center gap-2 md:gap-3 lg:gap-4.5 mt-6 lg:mt-[26px]">
                            {Array.from({ length: slidesCount }).map(
                                (_, index) => {
                                    return (
                                        <button
                                            key={index}
                                            onClick={() => goToSlide(index)}
                                            className={clsx(
                                                "transition duration-300 cursor-pointer rounded-full shrink-0 border-2 border-white w-4 h-4 lg:w-5 lg:h-5",
                                                activeIndex === index
                                                    ? "bg-purple shadow-[0_0_0_1px_#7c48cc]"
                                                    : "bg-gray-dark shadow-[0_0_0_1px_#5a5a5a]"
                                            )}
                                            aria-label={`Go to slide ${index + 1}`}
                                        ></button>
                                    );
                                }
                            )}
                        </div>
                    )}
                </>
            );
        };

        Component.displayName = "SwiperWrapper";
        return Component;
    },
    {
        ssr: false,
    }
);
