import {
    InterativeZonesCard,
    PurpleNoiseCard,
    YellowElipseCard,
    GlassCard,
    PurpleBlobCard,
} from "./interativeZonesCard";

export default function InteractiveZonesBlock() {
    return (
        <div className="flex flex-col gap-4">
            <YellowElipseCard
                title="Yellow Elipse"
                image="/images/footer/drawing.webp"
            />
            <PurpleNoiseCard
                title="Purple Noise"
                image="/images/interactiveZone/greenZone.png"
            />
            <GlassCard
                title="Glass"
                image="/images/interactiveZone/legoWall.png"
            />
            <PurpleBlobCard
                title="PurpleBlobCard"
                image="/images/interactiveZone/legoWall.png"
            />
        </div>
    );
}
