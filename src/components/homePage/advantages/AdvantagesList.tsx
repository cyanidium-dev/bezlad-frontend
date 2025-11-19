import Image from "next/image";
import LibraryArrowIcon from "@/components/shared/icons/LibraryArrowIcon";
import SurveillanceArrowIcon from "@/components/shared/icons/SurveillanceArrowIcon";
import CafeArrowIcon from "@/components/shared/icons/CafeArrowIcon";
import * as motion from "motion/react-client";
import {
    fadeInAnimation,
    headerVariants,
    listItemVariants,
    listVariants,
} from "@/utils/animationVariants";

export default function AdvantagesList() {
    return (
        <motion.ul
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.1 }}
            variants={listVariants({
                staggerChildren: 0.2,
                delayChildren: 0.3,
            })}
            className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:flex lg:gap-0"
        >
            <motion.li
                initial="hidden"
                whileInView="visible"
                exit="exit"
                viewport={{ once: true, amount: 0.1 }}
                variants={listItemVariants}
                className="relative w-[243px] sm:w-full h-[124px] md:h-[154px] lg:h-[124px] xl:h-[154px] justify-self-start"
            >
                <motion.h3
                    initial="hidden"
                    whileInView="visible"
                    exit="exit"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={fadeInAnimation({
                        x: -30,
                        y: 30,
                        scale: 0.9,
                        delay: 0.2,
                    })}
                    className="text-base sm:text-[20px] lg:text-[32px] leading-[120%] uppercase font-azbuka absolute right-[-77px] top-[6px] rotate-[13.5deg] sm:rotate-0 sm:right-auto sm:top-[-65px] sm:left-[65px] md:left-[120px] lg:left-[40px] lg:top-[-80px] xl:top-[-110px]"
                >
                    Бібліотека
                </motion.h3>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    exit="exit"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={fadeInAnimation({
                        x: 30,
                        y: -30,
                        scale: 0.9,
                        delay: 0.4,
                    })}
                    className="relative w-full h-full rounded-full overflow-hidden"
                >
                    <Image
                        src="/images/advantages/library.webp"
                        alt="library"
                        fill
                        className="object-cover absolute inset-0"
                    />
                </motion.div>
                <LibraryArrowIcon className="absolute right-[-43px] top-[30px] sm:scale-[-1] sm:rotate-110 sm:top-[-40px] lg:top-[-40px] xl:top-[-65px] sm:right-[105px]" />
            </motion.li>
            <motion.li
                initial="hidden"
                whileInView="visible"
                exit="exit"
                viewport={{ once: true, amount: 0.1 }}
                variants={listItemVariants}
                className="relative w-[243px] sm:w-full h-[124px] md:h-[154px] lg:h-[124px] xl:h-[154px] justify-self-end"
            >
                <motion.h3
                    initial="hidden"
                    whileInView="visible"
                    exit="exit"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={fadeInAnimation({
                        x: 30,
                        y: -30,
                        scale: 0.9,
                        delay: 0.5,
                    })}
                    className="text-[14px] sm:text-[20px] lg:text-[32px] leading-[120%] uppercase font-azbuka absolute left-[-107px] top-[56px] z-3 rotate-[-54deg] sm:rotate-0 sm:top-[-80px] sm:left-[100px] lg:left-auto lg:top-auto lg:bottom-[-90px] lg:right-[-300px] xl:right-[-173px] xl:bottom-[-105px]"
                >
                    Відеоспостереження
                </motion.h3>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    exit="exit"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={fadeInAnimation({
                        x: 30,
                        y: -30,
                        scale: 0.9,
                        delay: 0.6,
                    })}
                    className="relative w-full h-full rounded-full overflow-hidden z-2"
                >
                    <Image
                        src="/images/advantages/surveillance.webp"
                        alt="surveillance"
                        fill
                        className="object-cover absolute inset-0"
                    />
                </motion.div>
                <div className="sm:hidden absolute z-1 w-[166px] h-[164px] left-[-112px] top-[-12px] bg-gray-light blur-[48.85px]" />
                <SurveillanceArrowIcon className="absolute left-[-32px] bottom-[-17px] sm:bottom-auto sm:top-[-60px] sm:left-[100px] lg:top-auto lg:bottom-[-66px] lg:left-[196px] z-2 sm:rotate-80 lg:rotate-175" />
            </motion.li>
            <motion.li
                initial="hidden"
                whileInView="visible"
                exit="exit"
                viewport={{ once: true, amount: 0.1 }}
                variants={listItemVariants}
                className="relative w-[243px] sm:w-full h-[124px] md:h-[154px] lg:h-[124px] xl:h-[154px] justify-self-start"
            >
                <motion.h3
                    initial="hidden"
                    whileInView="visible"
                    exit="exit"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={fadeInAnimation({
                        x: 30,
                        y: -30,
                        scale: 0.9,
                        delay: 0.7,
                    })}
                    className="text-base sm:text-[24px] leading-[120%] uppercase font-azbuka absolute right-[-66px] top-[48px] rotate-[36.5deg] sm:rotate-0 sm:top-auto sm:bottom-[-38px] sm:right-[-145px] lg:rotate-0 lg:right-auto lg:left-[-41px] lg:top-[-60px] xl:top-[-70px]"
                >
                    Кав’ярня
                </motion.h3>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    exit="exit"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={fadeInAnimation({
                        x: 30,
                        y: -30,
                        scale: 0.9,
                        delay: 0.8,
                    })}
                    className="relative w-full h-full rounded-full overflow-hidden"
                >
                    <Image
                        src="/images/advantages/cafe.webp"
                        alt="cafe"
                        fill
                        className="object-cover absolute inset-0"
                    />
                </motion.div>
                <CafeArrowIcon
                    preserveAspectRatio="none"
                    className="absolute sm:w-[60px] lg:w-auto right-[-20px] bottom-[8px] sm:scale-x-[-1] sm:rotate-180 sm:bottom-[-30px] sm:right-[-40px] lg:scale-[-1] lg:top-[-38px] lg:right-auto lg:left-[22px] lg:rotate-82"
                />
            </motion.li>
            <motion.li
                initial="hidden"
                whileInView="visible"
                exit="exit"
                viewport={{ once: true, amount: 0.1 }}
                variants={listItemVariants}
                className="relative w-full max-w-[300px] md:max-w-[354px] lg:max-w-[236px] h-[113px] md:h-[154px] lg:h-[124px] xl:h-[154px] justify-self-end rounded-full bg-yellow flex items-center lg:justify-center px-[86px]"
            >
                <h3 className="text-[32px] lg:text-[40px] leading-[120%] uppercase font-azbuka">
                    Баланс
                </h3>
            </motion.li>
        </motion.ul>
    );
}
