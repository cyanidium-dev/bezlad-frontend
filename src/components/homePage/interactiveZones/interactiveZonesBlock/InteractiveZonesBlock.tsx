"use client";

import { useMemo } from "react";
import { SwiperSlide } from "swiper/react";
import SwiperCards from "@/components/shared/swiper/SwiperCards";
import { interactiveZonesData } from "../interactiveZonesData";
import { renderCard } from "./cardMapper";
import { PlaceholderCard } from "./InterativeZoneCard";

function chunkArray<T>(array: T[], chunkSize: number): T[][] {
    const chunks: T[][] = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
}

export default function InteractiveZonesBlock() {
    // Sort by ID and group into chunks of 3, filling incomplete groups with placeholders
    const groupedCards = useMemo(() => {
        const sorted = [...interactiveZonesData].sort((a, b) => a.id - b.id);
        const chunks = chunkArray(sorted, 3);

        // Fill the last chunk if it has fewer than 3 items
        if (chunks.length > 0) {
            const lastChunk = chunks[chunks.length - 1];
            const placeholdersNeeded = 3 - lastChunk.length;
            if (placeholdersNeeded > 0) {
                // Add placeholder items (using null as marker)
                for (let i = 0; i < placeholdersNeeded; i++) {
                    lastChunk.push(null as unknown as (typeof sorted)[0]);
                }
            }
        }

        return chunks;
    }, []);

    return (
        <SwiperCards
            breakpoints={{
                0: {
                    slidesPerView: 1,
                    spaceBetween: 16,
                },
                1024: {
                    slidesPerView: 1,
                    spaceBetween: 16,
                },
            }}
            swiperClassName="pb-10 overflow-visible"
            wrapperClassName="overflow-visible"
            isPagination={true}
            loop={false}
        >
            {groupedCards.map((group, index) => {
                const renderedItems: React.ReactNode[] = [];
                let i = 0;

                while (i < group.length) {
                    const item = group[i];
                    if (item) {
                        renderedItems.push(renderCard(item));
                        i++;
                    } else {
                        // Count consecutive nulls
                        const startIndex = i;
                        let nullCount = 0;
                        while (i < group.length && group[i] === null) {
                            nullCount++;
                            i++;
                        }
                        // If more than one placeholder needed, combine into one double-width placeholder
                        if (nullCount > 1) {
                            renderedItems.push(
                                <PlaceholderCard
                                    key={`placeholder-${index}-${startIndex}`}
                                    doubleWidth={true}
                                />
                            );
                        } else {
                            renderedItems.push(
                                <PlaceholderCard
                                    key={`placeholder-${index}-${startIndex}`}
                                />
                            );
                        }
                    }
                }

                return (
                    <SwiperSlide key={index} className="overflow-visible">
                        <div className="flex flex-col gap-4 overflow-visible">
                            {renderedItems}
                        </div>
                    </SwiperSlide>
                );
            })}
        </SwiperCards>
    );
}
