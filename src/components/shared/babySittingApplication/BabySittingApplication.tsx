"use client";

import { useState } from "react";
import * as motion from "motion/react-client";
import { fadeInAnimation } from "@/utils/animationVariants";
import MainButton from "../buttons/MainButton";
import BabySittingModal from "./BabySittingModal";

export default function BabySittingApplication() {
  const [isModalShown, setIsModalShown] = useState(false);

  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.8 }}
        variants={fadeInAnimation({ scale: 0.9, delay: 0.8 })}
      >
        <MainButton
          className="h-[66px] sm:max-w-[303px] sm:mx-auto lg:mx-0"
          onClick={() => setIsModalShown(true)}
        >
          Забронювати послуги няні
        </MainButton>
      </motion.div>
      <BabySittingModal
        isModalShown={isModalShown}
        setIsModalShown={setIsModalShown}
      />
    </>
  );
}
