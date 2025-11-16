import React from "react";
import { PlaceholderCard } from "../InterativeZoneCard";
import type { InteractiveZoneItem } from "../../interactiveZonesData";
import type { DesktopSlideLayout } from "../slidesLayouts";
import { renderCard } from "../cardMapper";

type DesktopSlideProps = {
    layout: DesktopSlideLayout;
    getItemById: (id: number) => InteractiveZoneItem | undefined;
};

export const DesktopSlide = React.memo(
    ({ layout, getItemById }: DesktopSlideProps) => {
        const renderedItems: React.ReactNode[] = [];

        // Render full width items at the top
        if (layout.fullWidth) {
            layout.fullWidth.forEach(id => {
                const item = getItemById(id);
                if (item) {
                    renderedItems.push(
                        <div
                            key={`full-${id}`}
                            className="w-full overflow-visible"
                        >
                            {renderCard(item)}
                        </div>
                    );
                }
            });
        }

        // Render rows
        if (layout.rows) {
            layout.rows.forEach((row, rowIdx) => {
                const currentRowItems: React.ReactNode[] = [];
                row.forEach(id => {
                    const item = getItemById(id);
                    if (item) {
                        currentRowItems.push(
                            <div
                                key={`row-${rowIdx}-${id}`}
                                className="flex-1 overflow-visible"
                            >
                                {renderCard(item)}
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
                        className="flex gap-5 overflow-visible"
                    >
                        {currentRowItems}
                    </div>
                );
            });
        }

        // Handle full height left (for slide 1)
        if (layout.fullHeightLeft && layout.fullHeightLeft.length > 0) {
            const leftColumn = (
                <div
                    key="left-column"
                    className="lg:flex-shrink-0 overflow-visible"
                >
                    {layout.fullHeightLeft.map(id => {
                        const item = getItemById(id);
                        if (item) {
                            return (
                                <div
                                    key={`full-left-${id}`}
                                    className="overflow-visible"
                                >
                                    {renderCard(item)}
                                </div>
                            );
                        }
                        return null;
                    })}
                </div>
            );

            const rightColumn = (
                <div
                    key="right-column"
                    className="flex flex-col gap-5 flex-1 overflow-visible"
                >
                    {renderedItems}
                </div>
            );

            return (
                <div className="flex flex-row gap-5 items-start overflow-visible">
                    {leftColumn}
                    {rightColumn}
                </div>
            );
        }

        // Handle full width right (for slide 2)
        if (layout.fullWidthRight && layout.fullWidthRight.length > 0) {
            const leftColumn = (
                <div
                    key="left-column"
                    className="flex flex-col gap-5 flex-1 overflow-visible"
                >
                    {renderedItems}
                </div>
            );

            const rightColumn = (
                <div
                    key="right-column"
                    className="lg:flex-shrink-0 overflow-visible"
                >
                    {layout.fullWidthRight.map(id => {
                        const item = getItemById(id);
                        if (item) {
                            return (
                                <div
                                    key={`full-right-${id}`}
                                    className="overflow-visible"
                                >
                                    {renderCard(item)}
                                </div>
                            );
                        }
                        return null;
                    })}
                </div>
            );

            return (
                <div className="flex flex-row gap-5 items-start overflow-visible">
                    {leftColumn}
                    {rightColumn}
                </div>
            );
        }

        return (
            <div className="flex flex-col gap-5 overflow-visible">
                {renderedItems}
            </div>
        );
    }
);
DesktopSlide.displayName = "DesktopSlide";
