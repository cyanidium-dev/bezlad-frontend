import MainButton from "@/components/shared/buttons/MainButton";
import Container from "@/components/shared/container/Container";
import CTAOrderImages from "./CTAOrderImages";

export default function CTAOrder() {
  return (
    <section className="relative max-w-[1280px] mx-auto rounded-[32px] overflow-hidden bg-purple-ultra-light">
      <CTAOrderImages />
      <Container className="relative z-20 pt-[46px] lg:pt-[58px] pb-[18px] lg:pb-[110px]">
        <div className="lg:ml-[412px] xl::ml-[527px]">
          <h2 className="max-w-[463px] lg:max-w-[543px] mb-4 lg:mb-8 font-azbuka text-[32px] lg:text-[64px] font-normal leading-[120%] uppercase">
            Індивідуальний супровід від наших{" "}
            <span className="text-purple-dark">нянь</span>
          </h2>
          <p className="max-w-[463px] lg:max-w-[300px] mb-[281px] lg:mb-11">
            Наші турботливі та уважні няні допоможуть дитині адаптуватися й
            відчути себе у цілковитій безпеці
          </p>
          <MainButton className="h-[66px] sm:max-w-[303px] sm:mx-auto lg:mx-0">
            Забронювати послуги няні
          </MainButton>
        </div>
      </Container>
    </section>
  );
}
