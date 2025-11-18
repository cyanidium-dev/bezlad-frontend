import * as motion from "motion/react-client";
import { fadeInAnimation } from "@/utils/animationVariants";
import Container from "@/components/shared/container/Container";
import SectionTitle from "@/components/shared/titles/SectionTitle";

export default function Faq() {
  const faqList = [
    {
      question: "Чи є у вас укриття?",
      answer: "Так, на -1 поверсі є облаштоване укриття.",
    },
    {
      question: "Чи потрібно залишати простір під час повітряної тривоги?",
      answer:
        "Батьки/вихователі/няні несуть відповідальність за життя та здоровʼя власних дітей. Рішення щодо перебування на локації приймають виключно відповідальні дорослі.",
    },
    {
      question: "Чи є у вас власний паркінг?",
      answer:
        "Великий безкоштовний паркінг знаходиться в 3 хвилинах від нас - парковка Епіцентру. Також на території ЖК є платний паркінг, забронювати місце Ви можете через нашого адміністратора.",
    },
    {
      question: "Чи можна залишити дитину і піти?",
      answer:
        "Дитина має бути постійно в супроводі дорослого. Це можуть бути батьки або няня дитини. У нашому просторі є можливість скористатися послугою погодинної няні, оплачується окремо.",
    },
    {
      question: "На який вік розрахований простір?",
      answer: "У нас буде цікаво дітям до 8 років.",
    },
    {
      question: "Чи можна приносити власні іграшки?",
      answer:
        "В пісочницю не можна брати власні іграшки, бо ми дуже відповідально ставимося до чистоти і безпеки. Наші іграшки проходять щоденну стерилізацію та кварцування.",
    },
    {
      question: "Як очищається пісок?",
      answer:
        "Двічі на добу пісок кварцується. Раз на півроку пісок повністю замінюється.",
    },
  ];

  return (
    <section id="faq" className="pt-[100px] pb-[120px] scroll-mt-[85px]">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row-reverse lg:justify-between lg:items-center">
          <SectionTitle
            animationDirection="left"
            className="text-[24px] lg:text-[53px] font-normal leading-[120%] text-right"
          >
            Відповіді на Ваші запитання
          </SectionTitle>
          <motion.p
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.8 }}
            variants={fadeInAnimation({
              x: -30,
              scale: 0.9,
            })}
            className="max-w-[297px]"
          >
            Ми розуміємо, що перед першим візитом у батьків може бути безліч
            питань — від того, як усе організовано, до того, чи сподобається
            дитині.
          </motion.p>
        </div>
      </Container>
    </section>
  );
}
