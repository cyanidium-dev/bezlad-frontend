// Layout configurations for different screen sizes

export type DesktopSlideLayout = {
    fullWidth?: number[]; // IDs that span full width
    rows?: number[][]; // IDs arranged in rows (2 cards per row)
    fullWidthRight?: number[]; // IDs that span full width on the right
    fullHeightLeft?: number[]; // IDs that span full height on the left
};

export type TabletSlideLayout = {
    grid: (number | null | "placeholder")[][]; // 2x2 grid: [[id1, id2], [id3, id4]] or [[id1, "placeholder"], [id2]]
};

// Tablet layout configuration (768px-1024px): 2x2 grid, 3 slides
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
    // Slide 3: IDs 9-10 with placeholder
    {
        grid: [
            [9, "placeholder"], // First column: ID 9, second column: placeholder (spans 2 rows)
            [10], // First column: ID 10
        ],
    },
];

// Desktop layout configuration
export const desktopLayouts: DesktopSlideLayout[] = [
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

// Constants
export const MOBILE_CARDS_PER_SLIDE = 3;
export const SPACE_BETWEEN = 18;
export const BREAKPOINT_TABLET = 768;
export const BREAKPOINT_DESKTOP = 1024;
