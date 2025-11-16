import SectionTitle from "@/components/shared/titles/SectionTitle";
import Container from "@/components/shared/container/Container";
import InteractiveZonesBlock from "./interactiveZonesBlock/InteractiveZonesBlock";

export default function InteractiveZones() {
    return (
        <div className="py-25">
            <Container>
                <div className="mb-22 lg:mb-[34px] flex flex-col lg:items-center lg:flex-row gap-4.5 lg:gap-8">
                    <SectionTitle>Інтерактивні зони</SectionTitle>
                    <p className="text-[16px] leading-[120%] font-light lg:max-w-[296px]">
                        Деревина, вода, пісок,{" "}
                        <br className="hidden lg:block" /> рослини - тут про
                        природу, гармонію, заземлення та спокій.
                    </p>
                </div>
                <InteractiveZonesBlock />
            </Container>
        </div>
    );
}
