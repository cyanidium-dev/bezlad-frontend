"use client";
import { useState, ReactNode, RefObject } from "react";

import clsx from "clsx";
import CircledArrowIcon from "../icons/CircledArrowIcon";

/**
 * CLIENT-SIDE PAGINATION COMPONENT
 *
 * This component implements client-side pagination, meaning it receives ALL items
 * as a prop and handles pagination logic entirely in the browser.
 *
 * How it works:
 * 1. Receives the complete array of items (all fetched from server)
 * 2. Uses React state to track current page (starts at page 1)
 * 3. Calculates which items to display using Array.slice()
 * 4. Scrolls to target element when page changes
 *
 * IMPORTANT: This is NOT server-side pagination. All items must be loaded
 * into memory before this component can paginate them. For large datasets,
 * consider implementing server-side pagination instead.
 *
 * Note: Page state is NOT persisted in URL. Page resets to 1 on refresh.
 * Pages are not shareable/bookmarkable. For URL-based pagination, use query params.
 *
 * Usage: Currently used only in BlogList component for blog posts.
 */
interface PaginationProps<T> {
    items: T[];
    renderItems: (items: T[]) => ReactNode;
    useItemsPerPage: () => number;
    scrollTargetRef: RefObject<HTMLDivElement | null>;
    className?: string;
}

export default function Pagination<T>({
    items,
    renderItems,
    useItemsPerPage,
    scrollTargetRef,
    className = "",
}: PaginationProps<T>) {
    // Use React state to track current page (starts at 1)
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = useItemsPerPage();
    // Calculate total pages based on all items (client-side calculation)
    const totalPages = Math.ceil(items.length / itemsPerPage);
    // CLIENT-SIDE SLICING: Extract only the items for current page from the full array
    const currentItems = items.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handlePageChange = (page: number) => {
        if (page < 1 || page > totalPages) return;

        setCurrentPage(page);

        // Scroll to target element after state update
        requestAnimationFrame(() => {
            scrollTargetRef?.current?.scrollIntoView({
                block: "start",
            });
        });
    };

    return (
        <>
            <div key={currentPage} className={`${className}`}>
                {renderItems(currentItems)}
            </div>
            {totalPages > 1 && (
                <div className="w-full flex items-center justify-center gap-[35px]">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="shrink-0 enabled:cursor-pointer w-[50px] h-[50px] rounded-full flex items-center justify-center pointer-events-auto transition-filter 
          duration-300 xl:enabled:hover:brightness-[1.25] bg-white disabled:bg-transparent disabled:border-11 disabled:border-transparent disabled:shadow-[0_0_0_1.5px_#ffffff]"
                    >
                        <CircledArrowIcon
                            className={clsx(
                                "w-[28px] h-[28px]",
                                currentPage === 1 ? "text-white" : "text-purple"
                            )}
                        />
                    </button>

                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="shrink-0 enabled:cursor-pointer w-[50px] h-[50px] rounded-full flex items-center justify-center pointer-events-auto transition-filter 
          duration-300 xl:enabled:hover:brightness-[1.25] bg-white disabled:bg-transparent disabled:border-11 disabled:border-transparent disabled:shadow-[0_0_0_1.5px_#ffffff]"
                    >
                        <CircledArrowIcon
                            className={clsx(
                                "w-[28px] h-[28px] rotate-180",
                                currentPage === totalPages
                                    ? "text-white"
                                    : "text-purple"
                            )}
                        />
                    </button>
                </div>
            )}
        </>
    );
}
