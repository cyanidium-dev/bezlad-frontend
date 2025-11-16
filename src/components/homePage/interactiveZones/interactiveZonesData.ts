export type CardType =
    | "glass"
    | "purpleBlob"
    | "yellowElipse"
    | "purpleNoise"
    | "gray"
    | "black"
    | "yellowNoodle";

export type Direction = "left" | "right";
export type PictureSize = "big" | "small";

export interface InteractiveZoneItem {
    id: number;
    title: string;
    image: string;
    card: CardType;
    direction?: Direction;
    desktopDirection?: Direction;
    pictureSize?: PictureSize;
    vertical?: boolean;
}

export const interactiveZonesData: InteractiveZoneItem[] = [
    {
        id: 2,
        title: "Магнітна стіна",
        image: "/images/interactiveZone/magnetWall.webp",
        card: "purpleBlob",
        vertical: true,
    },
    {
        id: 3,
        title: "Кінетичний пісок",
        image: "/images/interactiveZone/kineticSand.webp",
        card: "glass",
        direction: "right",
        desktopDirection: "left",
    },
    {
        id: 4,
        title: "Лего стіна",
        image: "/images/interactiveZone/legoWall.webp",
        card: "black",
        direction: "left",
    },
    {
        id: 5,
        title: "Велика та мала пісочниці",
        image: "/images/interactiveZone/sandbox.webp",
        card: "gray",
        pictureSize: "small",
    },
    {
        id: 1,
        title: "Стіна для малювання",
        image: "/images/footer/drawing.webp",
        card: "yellowElipse",
    },
    {
        id: 10,
        title: "Інженерні споруди",
        image: "/images/interactiveZone/engineer.webp",
        card: "black",
        direction: "right",
        desktopDirection: "left",
    },
    {
        id: 7,
        title: "Зона фонтанів",
        image: "/images/interactiveZone/fountainZone.webp",
        card: "glass",
        direction: "left",
    },
    {
        id: 6,
        title: "Зелена зона",
        image: "/images/interactiveZone/greenZone.webp",
        card: "purpleNoise",
    },
    {
        id: 8,
        title: "Зона кафе",
        image: "/images/interactiveZone/cafe.webp",
        card: "gray",
        pictureSize: "big",
    },
    {
        id: 9,
        title: "Нудлс стіна",
        image: "/images/interactiveZone/noodlesWall.webp",
        card: "yellowNoodle",
        vertical: true,
    },
];
