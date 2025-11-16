import { Dispatch, SetStateAction } from "react";

import CloseButton from "./CloseButton";
import Navigation from "../navigation/Navigation";
import ContactUsHeader from "./ContactUsHeader";
import Image from "next/image";
import AnimatedArrow from "../../animatedArrow/AnimatedArrow";
import * as motion from "motion/react-client";
import { fadeInAnimation } from "@/utils/animationVariants";

interface BurgerMenuMobTabProps {
    isHeaderMenuOpened: boolean;
    setIsHeaderMenuOpened: Dispatch<SetStateAction<boolean>>;
}

export default function BurgerMenu({
    isHeaderMenuOpened,
    setIsHeaderMenuOpened,
}: BurgerMenuMobTabProps) {
    return (
        <div
            className={`${
                isHeaderMenuOpened
                    ? "translate-x-0 opacity-100 no-doc-scroll"
                    : "translate-x-full opacity-0"
            } absolute top-0 right-0 z-50 w-screen h-dvh tab:w-[514px] bg-white 
      transition duration-600 overflow-hidden`}
        >
            <div className="relative container flex flex-col items-center max-w-full py-14 px-[60px] xl:px-[98px]">
                <div className="z-10">
                    <CloseButton
                        setIsHeaderMenuOpened={setIsHeaderMenuOpened}
                    />
                    <ContactUsHeader
                        setIsHeaderMenuOpened={setIsHeaderMenuOpened}
                    />
                    <Navigation
                        className="block w-full mx-auto max-w-[240px]"
                        variant="burger"
                    />
                </div>
            </div>
            <motion.div
                initial="hidden"
                whileInView="visible"
                exit="exit"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeInAnimation({ delay: 0.2 })}
                className="absolute w-[552.57px] h-[475.75px] -bottom-[114px] left-1/2 -translate-x-1/2 pointer-events-none"
            >
                <Image
                    src="/images/mobileMenu/leaves.svg"
                    alt="leaves"
                    width={552.57}
                    height={475.75}
                    className="object-cover"
                />
                <AnimatedArrow className="w-[237.43px] h-[133.81px] absolute bottom-[130px] left-1/2 translate-x-[calc(-50%+75px)] text-black scale-y-[-1] rotate-110" />
            </motion.div>
        </div>
    );
}
