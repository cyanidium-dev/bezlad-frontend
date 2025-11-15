"use client";
import * as motion from "motion/react-client";
import { fadeInAnimation } from "@/utils/animationVariants";
import Image from "next/image";
import { useScreenWidth } from "@/hooks/useScreenWidth";

export default function FooterText() {
    const width = useScreenWidth();

    // Create custom variants that include the rotation transform
    const getVariants = () => {
        const baseVariants =
            width >= 1024
                ? fadeInAnimation({ delay: 1.8, x: -20 })
                : fadeInAnimation({ delay: 1.8, y: 20 });

        const rotationTransform =
            width >= 1024 ? "" : "rotate(-90deg) translateX(100%)";

        if (!rotationTransform) {
            return baseVariants;
        }

        return {
            hidden: {
                ...baseVariants.hidden,
                transform: `${rotationTransform} ${baseVariants.hidden.transform}`,
            },
            visible: {
                ...baseVariants.visible,
                transform: `${rotationTransform} ${baseVariants.visible.transform}`,
            },
            exit: baseVariants.exit,
        };
    };

    return (
        <div className="absolute bottom-2 -right-10.5 lg:-bottom-17.5 lg:right-none lg:-left-[29px] -z-10">
            <div className="footer-block-rotate">
                <motion.div
                    variants={getVariants()}
                    initial="hidden"
                    whileInView="visible"
                    exit="exit"
                    viewport={{ once: true, amount: 0.1 }}
                    style={{ transformOrigin: "bottom right" }}
                >
                    <p className="text-[147.567px] lg:text-[288.557px] leading-[120%] uppercase font-azbuka">
                        Безлад
                    </p>
                    <motion.div
                        variants={
                            width >= 1024
                                ? fadeInAnimation({ delay: 2.1, x: -20 })
                                : fadeInAnimation({ delay: 2.1, y: 20 })
                        }
                        initial="hidden"
                        whileInView="visible"
                        exit="exit"
                        viewport={{ once: true, amount: 0.1 }}
                        className="absolute bottom-[42px] left-[223.58px] w-[121px] h-[144px] lg:w-[193.6px] lg:h-[234px] lg:left-[434px] lg:bottom-[70px]"
                    >
                        <Image
                            src="/images/footer/AThingPurple.png"
                            alt="Безлад"
                            width={121}
                            height={144}
                            className="w-full h-full object-contain"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
