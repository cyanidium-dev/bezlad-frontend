import MainButton from "@/components/shared/buttons/MainButton";
import Container from "@/components/shared/container/Container";
import BenefitsList from "./BenefitsList";
import HeroImages from "./HeroImages";
import AnimatedAnimal from "@/components/shared/AnimatedAnimal";

export default function Hero() {
  return (
    <section className="relative max-w-7xl mx-auto">
      <div className="absolute top-0 right-[calc(50%-264px)] lg:right-[-138px]">
        <AnimatedAnimal
          svgPath="/images/animalYellow.svg"
          className="w-[261px] lg:w-[352px] h-[267px] lg:h-[342px]"
          maxPupilMovement={3}
        />
      </div>
      <div className="overflow-hidden lg:rounded-b-4xl">
        <Container className="relative lg:flex justify-between items-end pt-[113px] lg:pt-[147px] pb-[55px] lg:pb-[33px]">
          <HeroImages />
          <div>
            <h1 className="max-w-[313px] lg:max-w-[841px] mb-4.5 font-azbuka text-[36px] lg:text-[81px] font-normal leading-[120%] uppercase">
              Безлад — <br /> територія ПРИРОДНОЇ Гри
            </h1>
            <p className="mb-64 lg:mb-9.5 font-azbuka text-[16px] lg:text-[32px] font-normal leading-[120%] uppercase">
              для вашої дитини
            </p>
            <p className="lg:absolute top-[157px] right-[196px] max-w-[230px] lg:max-w-[218px] mb-4 lg:mb-0 text-[14px] font-normal leading-[120%]">
              Ми замінили шум і хаос на пісок, воду, зелень і гармонію. У нас
              дітям цікаво, а батькам - спокійно
            </p>
            <MainButton className="max-w-[346px] mx-auto lg:mx-0 h-[66px] lg:mb-[110px]">
              Забронювати відвідування
            </MainButton>
            <p className="hidden lg:block max-w-[168px] text-white text-[14px] font-normal leading-[120%]">
              Натуральність замість штучності.  Розвиток замість метушні.  Тиша
              замість шуму
            </p>
          </div>
          <BenefitsList />
        </Container>
      </div>
    </section>
  );
}
