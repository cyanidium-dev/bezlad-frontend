"use client";
import { useState, useEffect } from "react";

/**
 * Hook for determining items per page in pagination
 *
 * Responsive pagination:
 * - Mobile (< 640px): 3 items per page
 * - Tablet/Desktop (>= 640px): 6 items per page

 */
export const useItemsPerPage = () => {
    const [itemsPerPage, setItemsPerPage] = useState(12);

    useEffect(() => {
        const updateItemsPerPage = () => {
            const width = window.innerWidth;

            if (width < 640) {
                setItemsPerPage(3);
            } else {
                setItemsPerPage(3);
            }
        };

        updateItemsPerPage();

        window.addEventListener("resize", updateItemsPerPage);
        return () => window.removeEventListener("resize", updateItemsPerPage);
    }, []);

    return itemsPerPage;
};
