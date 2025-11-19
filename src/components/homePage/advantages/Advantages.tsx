import Container from "@/components/shared/container/Container";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import { headerVariants } from "@/utils/animationVariants";
import * as motion from "motion/react-client";
import AdvantagesImages from "./AdvantagesImages";
import StarIcon from "@/components/shared/icons/StarIcon";
import AdvantagesList from "./AdvantagesList";

export default function Advantages() {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.1 }}
            variants={headerVariants}
            id="advantages"
            className="relative max-w-7xl mx-auto pt-[74px] pb-[56px] lg:pt-11 md:pb-[43px] scroll-mt-[85px] bg-gray-light rounded-4xl overflow-hidden"
        >
            <AdvantagesImages />
            <Container className="relative">
                <SectionTitle className="relative mb-[82px] max-w-[300px] lg:max-w-[450px] lg:ml-auto text-[32px] leading-[150%] lg:text-[48px] lg:leading-[150%] lg:text-right">
                    Ми подбали і про дітей, і про батьків
                    <StarIcon className="w-[62px] h-[62px] text-black absolute top-1/2 -translate-y-1/2 right-[-65px] xs:right-[-100px] z-20" />
                </SectionTitle>
                <AdvantagesList />
                <p className="text-black text-base font-light leading-[120%] mt-[46px]">
                    Відеоспостереження, бібліотека, кавʼярня з легкими
                    перекусами - ми подумали про комфорт, безпеку й розвиток
                </p>
            </Container>
        </motion.section>
    );
}
