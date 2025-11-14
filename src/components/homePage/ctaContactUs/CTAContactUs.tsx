import MainButton from "@/components/shared/buttons/MainButton";
import Container from "@/components/shared/container/Container";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import CTAImages from "./CTAImages";

export default function CTAContactUs() {
  return (
    <section className="relative max-w-7xl mx-auto mt-25 lg:mt-[132px] bg-purple-ultra-light rounded-4xl overflow-hidden">
      <CTAImages />
      <Container className="relative z-10 pt-[58px] md:pt-[74px] pb-5 md:pb-[87px]">
        <SectionTitle className="mb-7 md:max-w-[350px] lg:max-w-[594px]">
          Дозвольте дитині грати природно вже сьогодні
        </SectionTitle>
        <p className="md:max-w-[290px] lg:max-w-[348px] mb-[260px] md:mb-12 text-[14px] lg:text-[16px] font-normal leading-[120%]">
          «Безлад» — простір, де дитина досліджує, грає і розвивається серед
          природи, а батьки насолоджуються спокоєм. Зробіть перший крок до
          гармонійного дитинства вже зараз!
        </p>
        <MainButton className="h-[54px] xs:max-w-[301px] xs:mx-auto md:mx-0 text-[12px] font-normal leading-[120%]">
          Зв’язатися з нами
        </MainButton>
      </Container>
    </section>
  );
}
