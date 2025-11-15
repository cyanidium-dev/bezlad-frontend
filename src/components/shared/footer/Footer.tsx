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
import PublicOfferButton from "./PublicOfferButton";
import SectionTitle from "../titles/SectionTitle";

export default function Footer() {
    return (
        <footer className="pt-[100px] relative overflow-hidden">
            <div className="w-full pb-[27px] sm:pb-6 lg:pb-3 border-b border-black">
                <Container className="sm:max-w-full">
                    <div className="sm:max-w-[592px] lg:max-w-full lg:flex lg:items-center lg:justify-between">
                        <SectionTitle className="mb-4 sm:mb-7 sm:text-[64px]">
                            Тут кожен момент
                        </SectionTitle>
                        <div className="flex justify-between items-center">
                            <motion.div
                                variants={fadeInAnimation({ delay: 0.6 })}
                                initial="hidden"
                                whileInView="visible"
                                exit="exit"
                                viewport={{ once: true, amount: 0.1 }}
                                className="text-purple w-13 h-13 md:w-17.5 md:h-17.5 flex items-center justify-center -ml-2.5 md:ml-0 lg:mr-[78px]"
                            >
                                <StarIcon className="lg:w-17 lg:h-17" />
                            </motion.div>

                            <motion.p
                                variants={fadeInAnimation({ delay: 0.3 })}
                                initial="hidden"
                                whileInView="visible"
                                exit="exit"
                                viewport={{ once: true, amount: 0.1 }}
                                className="text-[16px] md:text-[24px] leading-[120%] text-right uppercase max-w-[255px] md:max-w-[382px]"
                            >
                                — маленьке відкриття, а кожна усмішка — нагорода
                            </motion.p>
                        </div>
                    </div>
                </Container>
            </div>
            <Container className="pt-7 lg:pt-6.5 pb-[23.5px] lg:pb-[29px] pl-[27px] relative">
                <div className="flex flex-col lg:flex-row sm:items-start sm:justify-between sm:max-w-[592px] mb-[39px] lg:mb-[129px] lg:max-w-full">
                    <SocialsGroup className="mb-[27px] lg:mb-0 sm:hidden lg:flex" />
                    <div className="lg:w-[768px] sm:flex sm:flex-row-reverse sm:justify-between">
                        <Contacts className="mb-[27px] sm:mb-0" />
                        <div className="sm:w-[148px]">
                            <RulesButton className="mb-[27px] lg:mb-[52px]" />
                            <PublicOfferButton className="lg:ml-[-182px] xl:ml-[-432px]" />
                        </div>
                    </div>
                </div>

                <motion.div
                    variants={fadeInAnimation({ delay: 2.2, y: 20 })}
                    initial="hidden"
                    whileInView="visible"
                    exit="exit"
                    viewport={{ once: true, amount: 0.1 }}
                    className="absolute bottom-[-50.44px] left-0 -z-10 sm:left-8"
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
                    className="flex items-center justify-between"
                >
                    <Rights />
                    <SocialsGroup className="hidden sm:block lg:hidden mr-[248px]" />
                </motion.div>
                <FooterText className="lg:block hidden" />
            </Container>
            <FooterText className="lg:hidden" />
        </footer>
    );
}
