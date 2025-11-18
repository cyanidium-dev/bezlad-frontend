"use client";
import PriceListCard from "./PriceListCard";
import { Service } from "@/types/service";
import { SwiperWrapper } from "@/components/shared/swiper/SwiperWrapper";
import { SwiperSlide } from "swiper/react";
import { useScreenWidth } from "@/hooks/useScreenWidth";
import { motion } from "framer-motion";
import { listVariants, listItemVariants } from "@/utils/animationVariants";
import AnimatedArrow from "@/components/shared/animatedArrow/AnimatedArrow";
import SpecialCard from "./SpecialCard";
import dynamic from "next/dynamic";

function PriceListBlock({ services }: { services: Service[] }) {
    const screenWidth = useScreenWidth();

    const isMobileView = screenWidth < 768;

    if (isMobileView) {
        return (
            <>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    exit="exit"
                    viewport={{ once: true, amount: 0.05 }}
                    variants={listVariants({
                        staggerChildren: 0.3,
                        delayChildren: 0.2,
                    })}
                    className="relative z-2 w-full flex flex-col items-center gap-5 mb-[75px] mx-auto"
                >
                    <AnimatedArrow className="md:hidden text-white absolute w-[195px] h-auto scale-y-[-1] left-1/2 translate-x-[57px] rotate-[-8deg] top-[-73px]" />
                    {services.map((service, index) => (
                        <motion.div key={index} variants={listItemVariants}>
                            <PriceListCard key={index} {...service} />
                        </motion.div>
                    ))}
                </motion.div>
                <SpecialCard />
            </>
        );
    }

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.1 }}
            variants={listVariants()}
            className="relative z-2 w-full flex items-start justify-end-safe gap-5"
        >
            <AnimatedArrow className="text-white absolute top-[-144px] left-[45%] w-[295px] h-auto scale-y-[-1] rotate-[-8deg]" />
            <SwiperWrapper
                slidesPerView="auto"
                slidesPerGroup={1}
                spaceBetween={20}
                navigation={true}
            >
                {services &&
                    Array.isArray(services) &&
                    services.map((service, index) => (
                        <SwiperSlide key={index} className="w-fit!">
                            <PriceListCard {...service} />
                        </SwiperSlide>
                    ))}
            </SwiperWrapper>
            <SpecialCard />
        </motion.div>
    );
}

export default dynamic(() => Promise.resolve(PriceListBlock), {
    ssr: false,
});
