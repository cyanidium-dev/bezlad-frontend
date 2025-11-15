import Container from "../container/Container";
import StarIcon from "../icons/StarIcon";
import SocialsGroup from "./SocialsGroup";
import Contacts from "./Contacts";
import Image from "next/image";
import Rights from "./Rights";
import RulesButton from "./RulesButton";
import * as motion from "motion/react-client";
import { fadeInAnimation } from "@/utils/animationVarints";
import FooterText from "./FooterText";

export default function Footer() {
    return (
        <footer className="pt-[100px] relative overflow-hidden">
            <Container className="pb-[27px] lg:pb-3 border-b border-black">
                <motion.h2
                    variants={fadeInAnimation({})}
                    initial="hidden"
                    whileInView="visible"
                    exit="exit"
                    viewport={{ once: true, amount: 0.1 }}
                    className="text-[32px] lg:text-[64px] leading-[120%] uppercase font-azbuka flex items-center flex-wrap lg:justify-between gap-y-4 gap-x-[15px]"
                >
                    Тут кожен момент
                    <motion.span
                        variants={fadeInAnimation({ delay: 0.6 })}
                        initial="hidden"
                        whileInView="visible"
                        exit="exit"
                        viewport={{ once: true, amount: 0.1 }}
                        className="text-purple w-13 h-13 lg:w-17.5 lg:h-17.5 flex items-center justify-center -ml-2.5 lg:ml-0"
                    >
                        <StarIcon className="lg:w-17 lg:h-17" />
                    </motion.span>
                    <motion.span
                        variants={fadeInAnimation({ delay: 0.3 })}
                        initial="hidden"
                        whileInView="visible"
                        exit="exit"
                        viewport={{ once: true, amount: 0.1 }}
                        className="text-[16px] lg:text-[24px] leading-[120%] text-right uppercase max-w-[255px] lg:max-w-[382px]"
                    >
                        — маленьке відкриття, а кожна усмішка — нагорода
                    </motion.span>
                </motion.h2>
            </Container>
            <Container className="pt-7 lg:pt-6.5 pb-[23.5px] lg:pb-[29px] pl-[27px] lg:relative">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start sm:gap-x-10 lg:gap-x-0 lg:mb-[129px]">
                    <SocialsGroup className="mb-[27px] lg:mb-0" />
                    <div className="mb-[39px] lg:mb-0 lg:flex lg:flex-row-reverse lg:justify-between lg:items-start w-full lg:max-w-[768px]">
                        <Contacts className="mb-[27px] lg:mb-0" />
                        <RulesButton />
                    </div>
                </div>

                <FooterText />

                <motion.div
                    variants={fadeInAnimation({ delay: 2.2, y: 20 })}
                    initial="hidden"
                    whileInView="visible"
                    exit="exit"
                    viewport={{ once: true, amount: 0.1 }}
                    className="absolute bottom-[-50.44px] left-0 -z-10"
                >
                    <Image
                        src="/images/footer/bottomImageMob.webp"
                        alt="Безлад"
                        width={267}
                        height={153.46}
                        className="block lg:hidden"
                    />
                </motion.div>
                <motion.div
                    variants={fadeInAnimation({ delay: 2.2, y: 20 })}
                    initial="hidden"
                    whileInView="visible"
                    exit="exit"
                    viewport={{ once: true, amount: 0.1 }}
                    className="absolute right-2 -bottom-7 -z-10"
                >
                    <Image
                        src="/images/footer/bottomImageDesk.webp"
                        alt="Безлад"
                        width={328.5}
                        height={218.2}
                        className="hidden lg:block"
                    />
                </motion.div>
                <motion.div
                    variants={fadeInAnimation({ delay: 2.4, scale: 0.95 })}
                    initial="hidden"
                    whileInView="visible"
                    exit="exit"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <Rights />
                </motion.div>
            </Container>
        </footer>
    );
}
