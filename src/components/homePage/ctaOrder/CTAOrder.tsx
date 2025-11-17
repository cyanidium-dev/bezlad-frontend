import MainButton from "@/components/shared/buttons/MainButton";
import Container from "@/components/shared/container/Container";
import CTAOrderImages from "./CTAOrderImages";
import * as motion from "motion/react-client";
import { fadeInAnimation, headerVariants } from "@/utils/animationVariants";
import BabySittingApplication from "@/components/shared/babySittingApplication/BabySittingApplication";

export default function CTAOrder() {
  return (
    <motion.section
      id="cta-order"
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true, amount: 0.1 }}
      variants={headerVariants}
      className="relative max-w-[1280px] mt-25 lg:mt-[125px] mx-auto rounded-[32px] overflow-hidden bg-purple-ultra-light scroll-mt-[85px]"
    >
      <CTAOrderImages />
      <Container className="relative z-20 pt-[46px] lg:pt-[58px] pb-[18px] lg:pb-[110px]">
        <div className="lg:ml-[412px] xl:ml-[527px]">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.8 }}
            variants={fadeInAnimation({
              x: 30,
              scale: 0.9,
            })}
            className="max-w-[463px] lg:max-w-[543px] mb-4 lg:mb-8 font-azbuka text-[32px] lg:text-[64px] font-normal leading-[120%] uppercase"
          >
            Індивідуальний супровід від наших{" "}
            <span className="text-purple-dark">нянь</span>
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.8 }}
            variants={fadeInAnimation({ y: 30, delay: 0.4 })}
            className="max-w-[463px] lg:max-w-[300px] mb-[281px] lg:mb-11"
          >
            Наші турботливі та уважні няні допоможуть дитині адаптуватися й
            відчути себе у цілковитій безпеці.
          </motion.p>
          <BabySittingApplication />
        </div>
      </Container>
    </motion.section>
  );
}
