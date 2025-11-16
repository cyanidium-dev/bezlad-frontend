import React from "react";
import { PlaceholderCard } from "../InterativeZoneCard";
import type { InteractiveZoneItem } from "../../interactiveZonesData";
import { renderCard } from "../cardMapper";

type MobileSlideProps = {
    items: (InteractiveZoneItem | null)[];
    slideIndex: number;
};

export const MobileSlide = React.memo(
    ({ items, slideIndex }: MobileSlideProps) => {
        const renderedItems: React.ReactNode[] = [];
        let i = 0;

        while (i < items.length) {
            const item = items[i];
            if (item) {
                renderedItems.push(
                    <div
                        key={`mobile-${slideIndex}-${i}`}
                        className="overflow-visible"
                    >
                        {renderCard(item)}
                    </div>
                );
                i++;
            } else {
                // Render single height placeholder for each null
                renderedItems.push(
                    <PlaceholderCard
                        key={`placeholder-${slideIndex}-${i}`}
                        doubleWidth={false}
                    />
                );
                i++;
            }
        }

        return (
            <div className="flex flex-col gap-5 overflow-visible md:hidden items-center">
                {renderedItems}
            </div>
        );
    }
);
MobileSlide.displayName = "MobileSlide";
