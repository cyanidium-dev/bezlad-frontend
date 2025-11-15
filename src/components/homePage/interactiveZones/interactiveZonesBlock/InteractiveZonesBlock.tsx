"use client";

import { useMemo } from "react";
import { SwiperSlide } from "swiper/react";
import SwiperCards from "@/components/shared/swiper/SwiperCards";
import { interactiveZonesData } from "../interactiveZonesData";
import { renderCard } from "./cardMapper";

function chunkArray<T>(array: T[], chunkSize: number): T[][] {
    const chunks: T[][] = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
}

export default function InteractiveZonesBlock() {
    // Sort by ID and group into chunks of 3
    const groupedCards = useMemo(() => {
        const sorted = [...interactiveZonesData].sort((a, b) => a.id - b.id);
        return chunkArray(sorted, 3);
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
        >
            {groupedCards.map((group, index) => (
                <SwiperSlide key={index}>
                    <div className="flex flex-col gap-4 overflow-visible">
                        {group.map(item => renderCard(item))}
                    </div>
                </SwiperSlide>
            ))}
        </SwiperCards>
    );
}
