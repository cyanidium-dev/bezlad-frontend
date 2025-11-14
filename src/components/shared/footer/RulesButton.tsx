"use client";
import { useState } from "react";
import RulesPopup from "./RulesPopup";
import Backdrop from "../backdrop/Backdrop";
import { motion } from "framer-motion";
import { fadeInAnimation } from "@/utils/animationVarints";

export default function RulesButton() {
    const [isRulesPopupShown, setIsRulesPopupShown] = useState(false);
    return (
        <>
            <motion.button
                variants={fadeInAnimation({ delay: 0.3, y: 20 })}
                initial="hidden"
                animate="visible"
                whileInView="visible"
                exit="exit"
                viewport={{ once: true, amount: 0.1 }}
                onClick={() => setIsRulesPopupShown(true)}
                type="button"
                className="cursor-pointer w-[162px] lg:w-[148px] lg:mr-[54px] text-[16px] leading-[19px] font-semibold text-purple text-left uppercase hover:text-black transition-colors duration-300"
            >
                Правила відвідування пісочниці
            </motion.button>
            <RulesPopup
                isRulesPopupShown={isRulesPopupShown}
                setIsRulesPopupShown={setIsRulesPopupShown}
            />
            <Backdrop
                isVisible={isRulesPopupShown}
                onClick={() => setIsRulesPopupShown(false)}
            />
        </>
    );
}
