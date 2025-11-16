"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ReactNode, useRef, useCallback, useState, useEffect } from "react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper } from "swiper/react";
import {
    SwiperOptions,
    Swiper as SwiperClass,
    NavigationOptions,
} from "swiper/types";
import clsx from "clsx";

interface SwiperWrapperProps {
    children: ReactNode;
    breakpoints?: SwiperOptions["breakpoints"];
    swiperClassName?: string;
    wrapperClassName?: string;
    buttonsWrapperClassName?: string;
    loop?: boolean;
    isPagination?: boolean;
    autoplay?: SwiperOptions["autoplay"];
    // Allow passing custom Swiper props
    swiperProps?: Partial<SwiperOptions>;
    // Expose swiper instance via callback
    onSwiper?: (swiper: SwiperClass) => void;
    // Allow disabling navigation buttons
    showNavigation?: boolean;
    // Custom onInit callback
    onInit?: (swiper: SwiperClass) => void;
    // Custom pagination (dots) - when true, shows custom pagination instead of default
    customPagination?: boolean;
}

export default function SwiperWrapper({
    children,
    breakpoints,
    swiperClassName = "",
    wrapperClassName = "",
    buttonsWrapperClassName = "",
    loop = false,
    isPagination = false,
    autoplay = false,
    swiperProps = {},
    onSwiper,
    showNavigation = true,
    onInit,
    customPagination = false,
}: SwiperWrapperProps) {
    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);
    const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(
        null
    );
    const [activeIndex, setActiveIndex] = useState(0);
    const [slidesCount, setSlidesCount] = useState(0);

    // Handle swiper instance setup
    const handleSwiper = useCallback(
        (swiper: SwiperClass) => {
            setSwiperInstance(swiper);
            if (onSwiper) {
                onSwiper(swiper);
            }
        },
        [onSwiper]
    );

    // Handle slide change for custom pagination
    const handleSlideChange = useCallback((swiper: SwiperClass) => {
        setActiveIndex(swiper.realIndex ?? swiper.activeIndex);
    }, []);

    useEffect(() => {
        if (swiperInstance && customPagination) {
            swiperInstance.on("slideChange", handleSlideChange);

            return () => {
                swiperInstance.off("slideChange", handleSlideChange);
            };
        }
    }, [swiperInstance, customPagination, handleSlideChange]);

    const goToSlide = useCallback(
        (index: number) => {
            if (swiperInstance) {
                swiperInstance.slideTo(index);
            }
        },
        [swiperInstance]
    );

    return (
        <div className={wrapperClassName}>
            <Swiper
                onSwiper={handleSwiper}
                pagination={isPagination}
                breakpoints={breakpoints}
                loop={loop}
                speed={1000}
                autoplay={autoplay}
                onBeforeInit={swiper => {
                    // Ensure custom navigation elements are wired before init
                    if (showNavigation && prevRef.current && nextRef.current) {
                        if (typeof swiper.params.navigation === "boolean") {
                            swiper.params.navigation = { enabled: true };
                        }
                        const navParams = swiper.params.navigation as
                            | NavigationOptions
                            | undefined;
                        if (navParams && typeof navParams === "object") {
                            // Type assertion needed because Swiper's types mark these as readonly
                            // but they can be set during initialization
                            (
                                navParams as NavigationOptions & {
                                    prevEl?: HTMLElement | null;
                                    nextEl?: HTMLElement | null;
                                }
                            ).prevEl = prevRef.current;
                            (
                                navParams as NavigationOptions & {
                                    prevEl?: HTMLElement | null;
                                    nextEl?: HTMLElement | null;
                                }
                            ).nextEl = nextRef.current;
                        }
                    }
                }}
                onInit={swiper => {
                    // Ensure navigation picks up refs if they were set late
                    if (
                        showNavigation &&
                        prevRef.current &&
                        nextRef.current &&
                        swiper.navigation
                    ) {
                        swiper.navigation.update();
                    }
                    // Initialize custom pagination state
                    if (customPagination) {
                        setSlidesCount(swiper.slides.length);
                        setActiveIndex(swiper.realIndex ?? swiper.activeIndex);
                    }
                    // Call custom onInit if provided
                    if (onInit) {
                        onInit(swiper);
                    }
                }}
                className={swiperClassName}
                {...swiperProps}
                modules={[
                    ...(showNavigation ? [Navigation] : []),
                    ...(isPagination ? [Pagination] : []),
                    ...(autoplay && !swiperProps.modules ? [Autoplay] : []),
                    ...(swiperProps.modules || []),
                ]}
            >
                {children}
            </Swiper>

            {showNavigation && (
                <div
                    className={`flex items-center lg:items-end justify-center gap-2.5 lg:gap-5 ${buttonsWrapperClassName}`}
                ></div>
            )}

            {customPagination && slidesCount > 0 && (
                <div className="flex items-center justify-center gap-2 mt-6">
                    {Array.from({ length: slidesCount }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={clsx(
                                "transition duration-300 cursor-pointer rounded-full w-4 h-4 lg:w-5 lg:h-5 p-[1.6px] lg:p-[2px] border",
                                activeIndex === index
                                    ? "border-purple"
                                    : "border-gray-dark"
                            )}
                            aria-label={`Go to slide ${index + 1}`}
                        >
                            <div
                                className={clsx(
                                    "w-full h-full rounded-full",
                                    activeIndex === index
                                        ? "bg-purple"
                                        : "bg-gray-dark"
                                )}
                            ></div>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
