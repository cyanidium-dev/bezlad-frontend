// Layout configurations for different screen sizes

export type DesktopSlideLayout = {
    fullWidth?: number[]; // IDs that span full width
    rows?: number[][]; // IDs arranged in rows (can have 2 or 3 cards per row)
    fullWidthRight?: number[]; // IDs that span full width on the right
    fullHeightLeft?: number[]; // IDs that span full height on the left
};

export type TabletSlideLayout = {
    grid: (number | null | "placeholder")[][]; // 2x2 grid: [[id1, id2], [id3, id4]] or [[id1, "placeholder"], [id2]]
};

// Tablet layout configuration (768px-1024px): 2x2 grid, 3 slides
// Ordered by id, placeholder in bottom right
export const tabletLayouts: TabletSlideLayout[] = [
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
    // Slide 3: IDs 9-11 with placeholder in bottom right
    {
        grid: [
            [9, 10],
            [11, "placeholder"], // Placeholder in bottom right
        ],
    },
];

// Desktop layout configuration
export const desktopLayouts: DesktopSlideLayout[] = [
    // Slide 1: ID 2 vertical on left, top row: id3/id1, bottom row: id11/id10/id4
    {
        fullHeightLeft: [2], // ID 2 spans full height on the left
        rows: [
            [3, 1], // Top row: ID 3, ID 1
            [11, 10, 4], // Bottom row: ID 11, ID 10, ID 4 (3 cards)
        ],
    },
    // Slide 2: ID 9 vertical on right, top row: id8/id5, bottom row: id7/id6
    {
        fullWidthRight: [9], // ID 9 spans full height on the right
        rows: [
            [8, 5], // Top row: ID 8, ID 5
            [7, 6], // Bottom row: ID 7, ID 6
        ],
    },
];

// Constants
export const MOBILE_CARDS_PER_SLIDE = 3;
export const SPACE_BETWEEN = 18;
export const BREAKPOINT_TABLET = 768;
export const BREAKPOINT_DESKTOP = 1024;
