"use client";
import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import { listItemVariantsLeft } from "@/utils/animationVariants";

interface BenefitItemProps {
  benefit: {
    value: string;
    description: string;
  };
}

export default function BenefitItem({ benefit }: BenefitItemProps) {
  const { value, description } = benefit;

  const number = parseFloat(value.replace(/[^\d.]/g, ""));
  const suffix = value.replace(/[\d.]/g, "");

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) =>
    value.includes(".") ? latest.toFixed(1) : Math.round(latest).toString()
  );

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (inView) {
      const controls = animate(count, number, {
        duration: 3.8,
        ease: "easeOut",
      });
      return () => controls.stop();
    }
  }, [inView, count, number]);

  return (
    <motion.li
      ref={ref}
      variants={listItemVariantsLeft}
      className="relative flex flex-col justify-center items-center w-[207px] rounded-[14px] overflow-hidden"
      style={{
        background:
          "linear-gradient(129.84deg, #000000 27.26%, #FFFFFF 97.59%)",
        padding: "1px",
        zIndex: 0,
      }}
    >
      <div
        className="relative flex flex-col justify-center items-center w-full py-4 px-8 rounded-[13px] 
      shadow-[inset_0px_4px_12px_rgba(255,255,255,0.06)] backdrop-blur-[19px]"
        style={{
          backgroundColor: "#f8ff66",
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.06))",
        }}
      >
        <p className="mb-px font-azbuka text-[64px] font-normal leading-[100%] uppercase">
          <motion.span>{rounded}</motion.span>
          {suffix}
        </p>
        <p className="text-[12px] font-medium text-center">{description}</p>
      </div>
    </motion.li>
  );
}
