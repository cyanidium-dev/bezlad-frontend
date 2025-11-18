import Image from "next/image";
import * as motion from "motion/react-client";
import { fadeInAnimation } from "@/utils/animationVariants";

export default function FaqImages() {
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInAnimation({ delay: 1, scale: 0.95 })}
        className="absolute top-[195px] right-[calc(50%-521px)] w-[619px] lg:w-[907px] h-auto aspect-907/712"
      >
        <Image
          src="/images/faq/flowersRight.webp"
          alt="flowers"
          width="907"
          height="712"
          className="w-[619px] lg:w-[907px] h-auto"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInAnimation({ delay: 1, scale: 0.95 })}
        className="absolute top-[160px] left-[calc(50%-730px)] w-[950px] lg:w-[993px] h-auto aspect-993/826 rotate-[13deg]"
      >
        <Image
          src="/images/faq/flowersTopLeft.webp"
          alt="flowers"
          width="993"
          height="826"
          className="w-[950px] lg:w-[993px] h-auto"
        />
      </motion.div>
    </>
  );
}
