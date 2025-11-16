import SectionTitle from "@/components/shared/titles/SectionTitle";
import Container from "@/components/shared/container/Container";
import InteractiveZonesBlock from "./interactiveZonesBlock/InteractiveZonesBlock";

export default function InteractiveZones() {
    return (
        <div className="py-25">
            <Container>
                <SectionTitle className="mb-4.5">
                    Інтерактивні зони
                </SectionTitle>
                <p className="mb-2 text-[16px] leading-[120%] font-light">
                    Деревина, вода, пісок, рослини - тут про природу, гармонію,
                    заземлення та спокій.
                </p>
                <InteractiveZonesBlock />
            </Container>
        </div>
    );
}
