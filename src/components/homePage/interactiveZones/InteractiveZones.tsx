import SectionTitle from "@/components/shared/titles/SectionTitle";
import Container from "@/components/shared/container/Container";
import InteractiveZonesBlock from "./interactiveZonesBlock/InteractiveZonesBlock";
import { fadeInAnimation } from "@/utils/animationVariants";
import * as motion from "motion/react-client";

export default function InteractiveZones() {
    return (
        <section className="py-25">
            <Container>
                <div className="mb-22 md:mb-26 lg:mb-8.5 sm:mb-[150px] flex flex-col lg:items-center lg:flex-row gap-4.5 lg:gap-8">
                    <SectionTitle>Інтерактивні зони</SectionTitle>
                    <motion.p
                        initial="hidden"
                        whileInView="visible"
                        exit="exit"
                        viewport={{ once: true, amount: 0.8 }}
                        variants={fadeInAnimation({
                            y: 20,
                            x: -20,
                            scale: 0.95,
                            delay: 0.4,
                        })}
                        className="text-[16px] leading-[120%] font-light lg:max-w-[296px]"
                    >
                        Деревина, вода, пісок,{" "}
                        <br className="hidden lg:block" /> рослини - тут про
                        природу, гармонію, заземлення та спокій.
                    </motion.p>
                </div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    exit="exit"
                    viewport={{ once: true, amount: 0.8 }}
                    variants={fadeInAnimation({
                        x: 40,
                        scale: 0.95,
                        delay: 0.8,
                    })}
                >
                    <InteractiveZonesBlock />
                </motion.div>
            </Container>
        </section>
    );
}
