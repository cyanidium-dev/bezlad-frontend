"use client";
import Container from "../container/Container";
import StarIcon from "../icons/StarIcon";
import SocialsGroup from "./SocialsGroup";
import Contacts from "./Contacts";
import Image from "next/image";
import Rights from "./Rights";
import RulesButton from "./RulesButton";
import { motion } from "framer-motion";
import { fadeInAnimation } from "@/utils/animationVarints";
import { useEffect, useState } from "react";

export default function Footer() {
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsLargeScreen(window.innerWidth >= 1024);
        };

        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);

        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);
    return (
        <footer className="pt-[100px] relative overflow-hidden">
            <Container className="pb-[27px] lg:pb-3 border-b border-black">
                <motion.h2
                    variants={fadeInAnimation({ delay: 0.3 })}
                    initial="hidden"
                    animate="visible"
                    className="text-[32px] lg:text-[64px] leading-[120%] uppercase font-azbuka flex items-center flex-wrap lg:justify-between gap-y-4 gap-x-[15px]"
                >
                    Тут кожен момент
                    <motion.span
                        variants={fadeInAnimation({ delay: 0.9 })}
                        initial="hidden"
                        animate="visible"
                        className="text-purple w-13 h-13 lg:w-17.5 lg:h-17.5 flex items-center justify-center -ml-2.5 lg:ml-0"
                    >
                        <StarIcon className="lg:w-17 lg:h-17" />
                    </motion.span>
                    <motion.span
                        variants={fadeInAnimation({ delay: 0.6 })}
                        initial="hidden"
                        animate="visible"
                        className="text-[16px] lg:text-[24px] leading-[120%] text-right uppercase max-w-[255px] lg:max-w-[382px]"
                    >
                        — маленьке відкриття, а кожна усмішка — нагорода
                    </motion.span>
                </motion.h2>
            </Container>
            <Container className="pt-7 lg:pt-6.5 pb-[23.5px] lg:pb-[29px] pl-[27px] lg:relative">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:mb-[129px]">
                    <SocialsGroup className="mb-[27px] lg:mb-0" />
                    <div className="mb-[39px] lg:mb-0 lg:flex lg:flex-row-reverse lg:justify-between lg:items-start w-full lg:max-w-[768px]">
                        <Contacts className="mb-[27px] lg:mb-0" />
                        <motion.div
                            variants={fadeInAnimation({ delay: 1.5 })}
                            initial="hidden"
                            animate="visible"
                        >
                            <RulesButton />
                        </motion.div>
                    </div>
                </div>
                <motion.div
                    variants={
                        isLargeScreen
                            ? fadeInAnimation({ delay: 1.8, x: -20 })
                            : fadeInAnimation({ delay: 1.8, y: 20 })
                    }
                    initial="hidden"
                    animate="visible"
                    className="absolute bottom-2 -right-10.5 lg:-bottom-17.5 lg:right-none lg:-left-[29px] -z-10"
                >
                    <div className="footer-block-rotate">
                        <p className="text-[147.567px] lg:text-[288.557px] leading-[120%] uppercase font-azbuka">
                            Безлад
                        </p>
                        <Image
                            src="/images/footer/AThingPurple.png"
                            alt="Безлад"
                            width={121}
                            height={144}
                            className="absolute bottom-[42px] left-[223.58px] lg:w-[193.6px] lg:h-[234px] lg:left-[434px] lg:bottom-[70px]"
                        />
                    </div>
                </motion.div>

                <motion.div
                    variants={fadeInAnimation({ delay: 2.1, y: 20 })}
                    initial="hidden"
                    animate="visible"
                    className="absolute bottom-[-50.44px] left-0 -z-10"
                >
                    <Image
                        src="/images/footer/bottomImageMob.png"
                        alt="Безлад"
                        width={267}
                        height={153.46}
                        className="block lg:hidden"
                    />
                </motion.div>
                <motion.div
                    variants={fadeInAnimation({ delay: 2.1, y: 20 })}
                    initial="hidden"
                    animate="visible"
                    className="absolute right-2 -bottom-7 -z-10"
                >
                    <Image
                        src="/images/footer/bottomImageDesk.png"
                        alt="Безлад"
                        width={328.5}
                        height={218.2}
                        className="hidden lg:block"
                    />
                </motion.div>
                <motion.div
                    variants={fadeInAnimation({ delay: 2.4 })}
                    initial="hidden"
                    animate="visible"
                >
                    <Rights />
                </motion.div>
            </Container>
        </footer>
    );
}
