"use client";

import React, { useMemo, useCallback } from "react";
import { SwiperSlide } from "swiper/react";
import SwiperCards from "@/components/shared/swiper/SwiperCards";
import { Swiper as SwiperClass } from "swiper/types";
import {
    interactiveZonesData,
    InteractiveZoneItem,
} from "../interactiveZonesData";
import { renderCard } from "./cardMapper";
import { PlaceholderCard } from "./InterativeZoneCard";

function chunkArray<T>(array: T[], chunkSize: number): T[][] {
    const chunks: T[][] = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
}

// Desktop layout configuration
type DesktopSlideLayout = {
    fullWidth?: number[]; // IDs that span full width
    rows?: number[][]; // IDs arranged in rows (2 cards per row)
    fullWidthRight?: number[]; // IDs that span full width on the right
    fullHeightLeft?: number[]; // IDs that span full height on the left
};

// Tablet layout configuration (768px-1024px): 2x2 grid, 3 slides
type TabletSlideLayout = {
    grid: (number | null | "placeholder")[][]; // 2x2 grid: [[id1, id2], [id3, id4]] or [[id1, "placeholder"], [id2]]
};

const tabletLayouts: TabletSlideLayout[] = [
    // Slide 1: IDs 1-4
    {
        grid: [
            [1, 2],
            [3, 4],
        ],
    },
    // Slide 2: IDs 5-8
    {
        grid: [
            [5, 6],
            [7, 8],
        ],
    },
    // Slide 3: IDs 9-10 with placeholder
    {
        grid: [
            [9, "placeholder"], // First column: ID 9, second column: placeholder (spans 2 rows)
            [10], // First column: ID 10
        ],
    },
];

const desktopLayouts: DesktopSlideLayout[] = [
    // Slide 1: IDs 1-5
    // ID 2 spans full height on left, rows on right: ID 3/1, ID 4/5
    {
        fullHeightLeft: [2], // ID 2 spans full height on the left
        rows: [
            [3, 1], // Row 1: ID 3, ID 1
            [4, 5], // Row 2: ID 4, ID 5
        ],
    },
    // Slide 2: IDs 6-10
    {
        rows: [
            [10, 8], // Row 1: ID 10, ID 8
            [7, 6], // Row 2: ID 7, ID 6
        ],
        fullWidthRight: [9], // ID 9 spans whole card on the right
    },
];

export default function InteractiveZonesBlock() {
    // Create a map of ID to item for quick lookup
    const itemsById = useMemo(() => {
        const map = new Map<number, InteractiveZoneItem>();
        interactiveZonesData.forEach(item => {
            map.set(item.id, item);
        });
        return map;
    }, []);

    // Mobile layout: Sort by ID and group into chunks of 3
    const mobileGroupedCards = useMemo(() => {
        const sorted = [...interactiveZonesData].sort((a, b) => a.id - b.id);
        const chunks = chunkArray(sorted, 3);

        // Fill the last chunk if it has fewer than 3 items
        if (chunks.length > 0) {
            const lastChunk = chunks[chunks.length - 1];
            const placeholdersNeeded = 3 - lastChunk.length;
            if (placeholdersNeeded > 0) {
                for (let i = 0; i < placeholdersNeeded; i++) {
                    lastChunk.push(null as unknown as (typeof sorted)[0]);
                }
            }
        }

        return chunks;
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

                if (width >= 1024) {
                    // Desktop: 2 slides
                    maxSlides = desktopLayouts.length;
                } else if (width >= 768) {
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

            const handleResize = () => {
                limitNavigation();
            };

            swiper.on("slideChange", limitNavigation);
            swiper.on("reachEnd", handleReachEnd);
            window.addEventListener("resize", handleResize);

            // Cleanup will happen when component unmounts or swiper is destroyed
            // The event listeners will be automatically cleaned up
        },
        [mobileGroupedCards.length]
    );

    return (
        <SwiperCards
            breakpoints={{
                0: {
                    slidesPerView: 1,
                    spaceBetween: 18,
                },
                768: {
                    slidesPerView: 1,
                    spaceBetween: 18,
                },
                1024: {
                    slidesPerView: 1,
                    spaceBetween: 18,
                },
            }}
            swiperClassName="pb-10 overflow-visible"
            wrapperClassName="overflow-visible"
            isPagination={true}
            loop={false}
            onSwiper={handleSwiperInit}
            paginationCount={desktopLayouts.length}
        >
            {/* Combined mobile, tablet and desktop slides */}
            {Array.from({ length: slidesCount }).map((_, index) => {
                const desktopLayout = desktopLayouts[index];
                const tabletLayout = tabletLayouts[index];
                // For mobile, show 3 cards per slide (use original mobile groups)
                const mobileGroup = mobileGroupedCards[index];

                return (
                    <SwiperSlide
                        key={index}
                        className={`overflow-visible ${!desktopLayout ? "lg:hidden" : ""} ${!tabletLayout ? "md:hidden lg:block" : ""}`}
                    >
                        {/* Mobile layout */}
                        {mobileGroup && (
                            <div className="flex flex-col gap-5 overflow-visible md:hidden items-center">
                                {(() => {
                                    const renderedItems: React.ReactNode[] = [];
                                    let i = 0;

                                    while (i < mobileGroup.length) {
                                        const item = mobileGroup[i];
                                        if (item) {
                                            renderedItems.push(
                                                <div
                                                    key={`mobile-${index}-${i}`}
                                                >
                                                    {renderCard(item)}
                                                </div>
                                            );
                                            i++;
                                        } else {
                                            // Count consecutive nulls
                                            const startIndex = i;
                                            let nullCount = 0;
                                            while (
                                                i < mobileGroup.length &&
                                                mobileGroup[i] === null
                                            ) {
                                                nullCount++;
                                                i++;
                                            }
                                            // Render one placeholder for all consecutive nulls
                                            if (nullCount > 1) {
                                                renderedItems.push(
                                                    <PlaceholderCard
                                                        key={`placeholder-${index}-${startIndex}`}
                                                        doubleWidth={true}
                                                    />
                                                );
                                            } else if (nullCount === 1) {
                                                renderedItems.push(
                                                    <PlaceholderCard
                                                        key={`placeholder-${index}-${startIndex}`}
                                                        doubleWidth={false}
                                                    />
                                                );
                                            }
                                        }
                                    }

                                    return renderedItems;
                                })()}
                            </div>
                        )}

                        {/* Tablet layout (768px-1024px) */}
                        {tabletLayout && (
                            <div className="hidden md:grid lg:hidden overflow-visible grid-cols-2 gap-5 justify-center">
                                {tabletLayout.grid.map((row, rowIdx) => (
                                    <React.Fragment
                                        key={`tablet-row-${index}-${rowIdx}`}
                                    >
                                        {row.map((id, colIdx) => {
                                            if (id === "placeholder") {
                                                return (
                                                    <PlaceholderCard
                                                        key={`tablet-${index}-${rowIdx}-${colIdx}`}
                                                        doubleWidth={false}
                                                        className="row-span-2"
                                                    />
                                                );
                                            }
                                            if (id === null) {
                                                return null;
                                            }
                                            if (typeof id === "number") {
                                                const item = itemsById.get(id);
                                                if (item) {
                                                    return (
                                                        <div
                                                            key={`tablet-${index}-${rowIdx}-${colIdx}`}
                                                            className="flex justify-center"
                                                        >
                                                            {renderCard(item)}
                                                        </div>
                                                    );
                                                }
                                            }
                                            return null;
                                        })}
                                    </React.Fragment>
                                ))}
                            </div>
                        )}

                        {/* Desktop layout */}
                        {desktopLayout ? (
                            <div className="hidden lg:block overflow-visible">
                                {(() => {
                                    const renderedItems: React.ReactNode[] = [];

                                    // Render full width items at the top
                                    if (desktopLayout.fullWidth) {
                                        desktopLayout.fullWidth.forEach(id => {
                                            const item = itemsById.get(id);
                                            if (item) {
                                                renderedItems.push(
                                                    <div
                                                        key={`full-${id}`}
                                                        className="w-full"
                                                    >
                                                        {renderCard(item)}
                                                    </div>
                                                );
                                            }
                                        });
                                    }

                                    // Render rows
                                    if (desktopLayout.rows) {
                                        desktopLayout.rows.forEach(
                                            (row, rowIdx) => {
                                                const currentRowItems: React.ReactNode[] =
                                                    [];
                                                row.forEach(id => {
                                                    const item =
                                                        itemsById.get(id);
                                                    if (item) {
                                                        currentRowItems.push(
                                                            <div
                                                                key={`row-${rowIdx}-${id}`}
                                                                className="flex-1"
                                                            >
                                                                {renderCard(
                                                                    item
                                                                )}
                                                            </div>
                                                        );
                                                    } else {
                                                        currentRowItems.push(
                                                            <div
                                                                key={`row-${rowIdx}-placeholder`}
                                                                className="flex-1"
                                                            >
                                                                <PlaceholderCard />
                                                            </div>
                                                        );
                                                    }
                                                });
                                                renderedItems.push(
                                                    <div
                                                        key={`row-${rowIdx}`}
                                                        className="flex gap-5"
                                                    >
                                                        {currentRowItems}
                                                    </div>
                                                );
                                            }
                                        );
                                    }

                                    // Handle full height left (for slide 1)
                                    if (
                                        desktopLayout.fullHeightLeft &&
                                        desktopLayout.fullHeightLeft.length > 0
                                    ) {
                                        const leftColumn = (
                                            <div
                                                key="left-column"
                                                className="lg:flex-shrink-0"
                                            >
                                                {desktopLayout.fullHeightLeft.map(
                                                    id => {
                                                        const item =
                                                            itemsById.get(id);
                                                        if (item) {
                                                            return (
                                                                <div
                                                                    key={`full-left-${id}`}
                                                                >
                                                                    {renderCard(
                                                                        item
                                                                    )}
                                                                </div>
                                                            );
                                                        }
                                                        return null;
                                                    }
                                                )}
                                            </div>
                                        );

                                        const rightColumn = (
                                            <div
                                                key="right-column"
                                                className="flex flex-col gap-5 flex-1"
                                            >
                                                {renderedItems}
                                            </div>
                                        );

                                        return (
                                            <div className="flex flex-row gap-5 items-start">
                                                {leftColumn}
                                                {rightColumn}
                                            </div>
                                        );
                                    }

                                    // Handle full width right (for slide 2)
                                    if (
                                        desktopLayout.fullWidthRight &&
                                        desktopLayout.fullWidthRight.length > 0
                                    ) {
                                        const leftColumn = (
                                            <div
                                                key="left-column"
                                                className="flex flex-col gap-5 flex-1"
                                            >
                                                {renderedItems}
                                            </div>
                                        );

                                        const rightColumn = (
                                            <div
                                                key="right-column"
                                                className="lg:flex-shrink-0"
                                            >
                                                {desktopLayout.fullWidthRight.map(
                                                    id => {
                                                        const item =
                                                            itemsById.get(id);
                                                        if (item) {
                                                            return (
                                                                <div
                                                                    key={`full-right-${id}`}
                                                                >
                                                                    {renderCard(
                                                                        item
                                                                    )}
                                                                </div>
                                                            );
                                                        }
                                                        return null;
                                                    }
                                                )}
                                            </div>
                                        );

                                        return (
                                            <div className="flex flex-row gap-5 items-start">
                                                {leftColumn}
                                                {rightColumn}
                                            </div>
                                        );
                                    }

                                    return (
                                        <div className="flex flex-col gap-5">
                                            {renderedItems}
                                        </div>
                                    );
                                })()}
                            </div>
                        ) : null}
                    </SwiperSlide>
                );
            })}
        </SwiperCards>
    );
}
