import React from "react";
import { PlaceholderCard } from "../InterativeZoneCard";
import type { InteractiveZoneItem } from "../../interactiveZonesData";
import type { TabletSlideLayout } from "../layouts";
import { renderCard } from "../cardMapper";

type TabletSlideProps = {
    layout: TabletSlideLayout;
    slideIndex: number;
    getItemById: (id: number) => InteractiveZoneItem | undefined;
};

export const TabletSlide = React.memo(
    ({ layout, slideIndex, getItemById }: TabletSlideProps) => {
        return (
            <div className="hidden md:grid lg:hidden overflow-visible grid-cols-2 gap-5 justify-center">
                {layout.grid.map((row, rowIdx) => (
                    <React.Fragment key={`tablet-row-${slideIndex}-${rowIdx}`}>
                        {row.map((id, colIdx) => {
                            if (id === "placeholder") {
                                return (
                                    <PlaceholderCard
                                        key={`tablet-${slideIndex}-${rowIdx}-${colIdx}`}
                                        doubleWidth={false}
                                        className="row-span-2"
                                    />
                                );
                            }
                            if (id === null) {
                                return null;
                            }
                            if (typeof id === "number") {
                                const item = getItemById(id);
                                if (item) {
                                    return (
                                        <div
                                            key={`tablet-${slideIndex}-${rowIdx}-${colIdx}`}
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
        );
    }
);
TabletSlide.displayName = "TabletSlide";
