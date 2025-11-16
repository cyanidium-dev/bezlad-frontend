"use client";
import "swiper/css";
import "swiper/css/effect-cards";
import { ReactNode, useCallback, useEffect, useRef } from "react";
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
    onSwiper?: (swiper: SwiperClass) => void;
    paginationCount?: number;
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
    onSwiper,
    paginationCount,
}: SwiperCardsProps) {
    // Cards effect specific configuration
    const cardsEffectConfig: CardsEffectOptions | undefined = cardsEffect
        ? {
              perSlideOffset: 8,
              perSlideRotate: 2,
              slideShadows: false,
          }
        : undefined;

    const swiperRef = useRef<SwiperClass | null>(null);

    // Handle initialization - consolidated to avoid duplicate calls
    const handleSwiperInit = useCallback(
        (swiper: SwiperClass) => {
            swiper.update();
            swiperRef.current = swiper;
            // Call external onSwiper callback if provided
            if (onSwiper) {
                onSwiper(swiper);
            }
        },
        [onSwiper]
    );

    // Handle progress to update slide visibility
    const handleProgress = useCallback((swiper: SwiperClass) => {
        const slides = swiper.slides;
        const swiperEl = swiper.el as HTMLElement;
        if (!swiperEl) return;

        const swiperRect = swiperEl.getBoundingClientRect();
        const swiperLeft = swiperRect.left;
        const swiperRight = swiperRect.right;
        const threshold = 0.1; // 10% visibility threshold

        slides.forEach(slide => {
            const slideEl = slide as HTMLElement;
            if (!slideEl) return;

            // Ensure transition is set for smooth opacity changes
            if (
                !slideEl.style.transition ||
                !slideEl.style.transition.includes("opacity")
            ) {
                slideEl.style.transition = slideEl.style.transition
                    ? `${slideEl.style.transition}, opacity 0.3s ease-in-out`
                    : "opacity 0.3s ease-in-out";
            }

            const slideRect = slideEl.getBoundingClientRect();
            const slideWidth = slideRect.width;
            const slideLeft = slideRect.left;
            const slideRight = slideRect.right;

            // Calculate visible portion of slide within swiper viewport
            const visibleLeft = Math.max(slideLeft, swiperLeft);
            const visibleRight = Math.min(slideRight, swiperRight);
            const visibleWidth = Math.max(0, visibleRight - visibleLeft);

            // Calculate visibility percentage
            const visibilityPercentage =
                slideWidth > 0 ? visibleWidth / slideWidth : 0;

            // Apply visibility based on threshold
            // Use opacity only to preserve layout for overflow images
            if (visibilityPercentage >= threshold) {
                slideEl.style.opacity = "1";
                slideEl.style.pointerEvents = "auto";
            } else {
                slideEl.style.opacity = "0";
                slideEl.style.pointerEvents = "none";
            }
        });
    }, []);

    // Handle slide change to update visibility
    const handleSlideChange = useCallback(
        (swiper: SwiperClass) => {
            // Trigger progress update to recalculate visibility
            handleProgress(swiper);
        },
        [handleProgress]
    );

    // Handle touch move and transition for real-time updates
    const handleTouchMove = useCallback(
        (swiper: SwiperClass) => {
            handleProgress(swiper);
        },
        [handleProgress]
    );

    const handleTransitionStart = useCallback(
        (swiper: SwiperClass) => {
            handleProgress(swiper);
        },
        [handleProgress]
    );

    const handleTransitionEnd = useCallback(
        (swiper: SwiperClass) => {
            handleProgress(swiper);
        },
        [handleProgress]
    );

    // Set up event listeners
    useEffect(() => {
        const swiper = swiperRef.current;
        if (!swiper) return;

        // Use requestAnimationFrame for smooth updates during drag
        let rafId: number | null = null;
        let isActive = false;

        const updateVisibility = () => {
            handleProgress(swiper);
            if (isActive) {
                rafId = requestAnimationFrame(updateVisibility);
            }
        };

        swiper.on("progress", handleProgress);
        swiper.on("slideChange", handleSlideChange);
        swiper.on("touchMove", handleTouchMove);
        swiper.on("transitionStart", handleTransitionStart);
        swiper.on("transitionEnd", handleTransitionEnd);
        swiper.on("setTransition", handleTransitionStart);

        // Start RAF loop during touch/drag
        const startRaf = () => {
            if (!isActive) {
                isActive = true;
                rafId = requestAnimationFrame(updateVisibility);
            }
        };
        const stopRaf = () => {
            isActive = false;
            if (rafId !== null) {
                cancelAnimationFrame(rafId);
                rafId = null;
            }
            handleProgress(swiper);
        };

        swiper.on("touchStart", startRaf);
        swiper.on("touchEnd", stopRaf);
        swiper.on("transitionStart", startRaf);
        swiper.on("transitionEnd", stopRaf);

        // Initial visibility update
        handleProgress(swiper);

        return () => {
            isActive = false;
            if (rafId !== null) {
                cancelAnimationFrame(rafId);
            }
            swiper.off("progress", handleProgress);
            swiper.off("slideChange", handleSlideChange);
            swiper.off("touchMove", handleTouchMove);
            swiper.off("transitionStart", handleTransitionStart);
            swiper.off("transitionEnd", handleTransitionEnd);
            swiper.off("setTransition", handleTransitionStart);
            swiper.off("touchStart", startRaf);
            swiper.off("touchEnd", stopRaf);
        };
    }, [
        handleProgress,
        handleSlideChange,
        handleTouchMove,
        handleTransitionStart,
        handleTransitionEnd,
    ]);

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
        <div className={`${wrapperClassName} overflow-visible`}>
            <SwiperWrapper
                breakpoints={breakpoints}
                swiperClassName={`${swiperClassName} overflow-visible swiper-overflow-visible`}
                wrapperClassName=""
                loop={loop}
                isPagination={false}
                autoplay={autoplay}
                showNavigation={false}
                customPagination={isPagination}
                paginationCount={paginationCount}
                onInit={handleSwiperInit}
                onSwiper={handleSwiperInit}
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
