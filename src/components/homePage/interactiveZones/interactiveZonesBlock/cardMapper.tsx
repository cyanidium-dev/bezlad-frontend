import { ComponentType } from "react";
import {
    GlassCard,
    PurpleBlobCard,
    YellowElipseCard,
    PurpleNoiseCard,
    GrayCard,
    BlackCard,
    NoodleCard,
} from "./InterativeZoneCard";
import type { CardType, InteractiveZoneItem } from "../interactiveZonesData";

type CardComponent = ComponentType<{
    title: string;
    image: string;
    direction?: "left" | "right";
    desktopDirection?: "left" | "right";
    pictureSize?: "big" | "small";
}>;

const cardComponentMap: Record<CardType, CardComponent> = {
    glass: GlassCard,
    purpleBlob: PurpleBlobCard,
    yellowElipse: YellowElipseCard,
    purpleNoise: PurpleNoiseCard,
    gray: GrayCard,
    black: BlackCard,
    yellowNoodle: NoodleCard,
};

export function getCardComponent(cardType: CardType): CardComponent {
    return cardComponentMap[cardType];
}

export function renderCard(item: InteractiveZoneItem) {
    const CardComponent = getCardComponent(item.card);
    return (
        <CardComponent
            key={item.id}
            title={item.title}
            image={item.image}
            direction={item.direction}
            desktopDirection={item.desktopDirection}
            pictureSize={item.pictureSize}
        />
    );
}
