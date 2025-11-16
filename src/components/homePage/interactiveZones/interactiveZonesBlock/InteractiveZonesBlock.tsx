"use client";

import { useMemo, useCallback, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper/types";
import {
    interactiveZonesData,
    InteractiveZoneItem,
} from "../interactiveZonesData";
import {
    tabletLayouts,
    desktopLayouts,
    MOBILE_CARDS_PER_SLIDE,
    SPACE_BETWEEN,
    BREAKPOINT_TABLET,
    BREAKPOINT_DESKTOP,
} from "./slidesLayouts";
import { MobileSlide } from "./slides/MobileSlide";
import { TabletSlide } from "./slides/TabletSlide";
import { DesktopSlide } from "./slides/DesktopSlide";

// Dynamic import for SwiperCards
const SwiperCards = dynamic(
    () => import("@/components/shared/swiper/SwiperCards"),
    { ssr: true }
);

function chunkArray<T>(array: T[], chunkSize: number): T[][] {
    const chunks: T[][] = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
}

// Type for placeholder items
type MobileGroupItem = InteractiveZoneItem | null;

export default function InteractiveZonesBlock() {
    // Create a map of ID to item for quick lookup
    const itemsById = useMemo(() => {
        const map = new Map<number, InteractiveZoneItem>();
        interactiveZonesData.forEach(item => {
            map.set(item.id, item);
        });
        return map;
    }, []);

    // Helper function for item lookup
    const getItemById = useCallback(
        (id: number): InteractiveZoneItem | undefined => {
            return itemsById.get(id);
        },
        [itemsById]
    );

    // Mobile layout: Sort by ID and group into chunks of 3
    const mobileGroupedCards = useMemo(() => {
        const sorted = [...interactiveZonesData].sort((a, b) => a.id - b.id);
        const chunks = chunkArray(sorted, MOBILE_CARDS_PER_SLIDE);

        // Fill the last chunk if it has fewer than 3 items
        if (chunks.length > 0) {
            const lastChunk = chunks[chunks.length - 1] as MobileGroupItem[];
            const placeholdersNeeded =
                MOBILE_CARDS_PER_SLIDE - lastChunk.length;
            if (placeholdersNeeded > 0) {
                for (let i = 0; i < placeholdersNeeded; i++) {
                    lastChunk.push(null);
                }
            }
        }

        return chunks.map(chunk => chunk as MobileGroupItem[]);
    }, []);

    // Use max count for slides
    // Mobile has 4 slides (3 cards each), tablet has 3 slides (2x2 grid), desktop has 2 slides
    const slidesCount = Math.max(
        mobileGroupedCards.length,
        tabletLayouts.length,
        desktopLayouts.length
    );

    // Limit navigation based on screen size
    const handleSwiperInit = useCallback(
        (swiper: SwiperClass) => {
            const limitNavigation = () => {
                const width = window.innerWidth;
                let maxSlides: number;

                if (width >= BREAKPOINT_DESKTOP) {
                    // Desktop: 2 slides
                    maxSlides = desktopLayouts.length;
                } else if (width >= BREAKPOINT_TABLET) {
                    // Tablet: 3 slides
                    maxSlides = tabletLayouts.length;
                } else {
                    // Mobile: 4 slides
                    maxSlides = mobileGroupedCards.length;
                }

                if (swiper.activeIndex >= maxSlides) {
                    swiper.slideTo(maxSlides - 1);
                }
            };

            const handleReachEnd = () => {
                limitNavigation();
            };

            // Debounce resize handler
            let resizeTimeout: NodeJS.Timeout;
            const handleResize = () => {
                clearTimeout(resizeTimeout);
                resizeTimeout = setTimeout(() => {
                    limitNavigation();
                }, 150);
            };

            swiper.on("slideChange", limitNavigation);
            swiper.on("reachEnd", handleReachEnd);
            window.addEventListener("resize", handleResize);

            // Return cleanup function
            return () => {
                swiper.off("slideChange", limitNavigation);
                swiper.off("reachEnd", handleReachEnd);
                window.removeEventListener("resize", handleResize);
                clearTimeout(resizeTimeout);
            };
        },
        [mobileGroupedCards.length]
    );

    // Store cleanup function ref
    const cleanupRef = useRef<(() => void) | null>(null);

    // Handle swiper initialization with cleanup
    const handleSwiper = useCallback(
        (swiper: SwiperClass) => {
            // Cleanup previous if exists
            if (cleanupRef.current) {
                cleanupRef.current();
            }
            // Store new cleanup
            cleanupRef.current = handleSwiperInit(swiper);
        },
        [handleSwiperInit]
    );

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            if (cleanupRef.current) {
                cleanupRef.current();
            }
        };
    }, []);

    return (
        <SwiperCards
            breakpoints={{
                0: {
                    slidesPerView: 1,
                    spaceBetween: SPACE_BETWEEN,
                },
                [BREAKPOINT_TABLET]: {
                    slidesPerView: 1,
                    spaceBetween: SPACE_BETWEEN,
                },
                [BREAKPOINT_DESKTOP]: {
                    slidesPerView: 1,
                    spaceBetween: SPACE_BETWEEN,
                },
            }}
            swiperClassName="pb-10 overflow-visible"
            wrapperClassName="overflow-visible"
            isPagination={true}
            loop={false}
            onSwiper={handleSwiper}
            paginationCount={desktopLayouts.length}
        >
            {/* Combined mobile, tablet and desktop slides */}
            {Array.from({ length: slidesCount }).map((_, index) => {
                const desktopLayout = desktopLayouts[index];
                const tabletLayout = tabletLayouts[index];
                const mobileGroup = mobileGroupedCards[index];

                return (
                    <SwiperSlide
                        key={index}
                        className={`overflow-visible ${!desktopLayout ? "lg:hidden" : ""} ${!tabletLayout ? "md:hidden lg:block" : ""}`}
                    >
                        {/* Mobile layout */}
                        {mobileGroup && (
                            <MobileSlide
                                items={mobileGroup}
                                slideIndex={index}
                            />
                        )}

                        {/* Tablet layout */}
                        {tabletLayout && (
                            <TabletSlide
                                layout={tabletLayout}
                                slideIndex={index}
                                getItemById={getItemById}
                            />
                        )}

                        {/* Desktop layout */}
                        {desktopLayout && (
                            <div className="hidden lg:block overflow-visible">
                                <DesktopSlide
                                    layout={desktopLayout}
                                    getItemById={getItemById}
                                />
                            </div>
                        )}
                    </SwiperSlide>
                );
            })}
        </SwiperCards>
    );
}
