import Container from "../container/Container";
import StarIcon from "../icons/StarIcon";
import SocialsGroup from "./SocialsGroup";
import Contacts from "./Contacts";
import Image from "next/image";
import Rights from "./Rights";

export default function Footer() {
    return (
        <footer className="pt-[100px] relative overflow-hidden">
            <Container className="pb-[27px] lg:pb-3 border-b border-black">
                <h1 className="text-[32px] lg:text-[64px] leading-[120%] uppercase font-azbuka flex items-center flex-wrap lg:justify-between gap-y-4 gap-x-[15px]">
                    Тут кожен момент
                    <span className="text-purple w-13 h-13 lg:w-17.5 lg:h-17.5 flex items-center justify-center -ml-2.5 lg:ml-0">
                        <StarIcon className="lg:w-17 lg:h-17" />
                    </span>
                    <span className="text-[16px] lg:text-[24px] leading-[120%] text-right uppercase max-w-[255px] lg:max-w-[382px]">
                        — маленьке відкриття, а кожна усмішка — нагорода
                    </span>
                </h1>
            </Container>
            <Container className="pt-7 lg:pt-6.5 pb-[23.5px] lg:pb-[29px] pl-[27px] lg:relative">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:mb-[129px]">
                    <SocialsGroup className="mb-[27px] lg:mb-0" />
                    <div className="mb-[39px] lg:mb-0 lg:flex lg:flex-row-reverse lg:justify-between lg:items-start w-full lg:max-w-[768px]">
                        <Contacts className="mb-[27px] lg:mb-0" />
                        <button
                            type="button"
                            className="w-[162px] lg:w-[148px] lg:mr-[54px] text-[16px] leading-[19px] font-semibold text-purple text-left uppercase"
                        >
                            Правила відвідування пісочниці
                        </button>
                    </div>
                </div>
                <div className="absolute bottom-2 -right-10.5 lg:-bottom-17.5 lg:right-none lg:-left-[29px]">
                    <div className="footer-block-rotate">
                        <p className="text-[147.567px] lg:text-[288.557px] leading-[120%] uppercase font-azbuka">
                            Безлад
                        </p>
                        <Image
                            src="/images/footer/AThingPurple.png"
                            alt="Безлад"
                            width={121}
                            height={144}
                            className="absolute bottom-[42px] left-[223.58px] lg:w-[193.6px] lg:h-[234px] lg:left-[434px] lg:bottom-[70px]"
                        />
                    </div>
                </div>
                <Image
                    src="/images/footer/bottomImageMob.png"
                    alt="Безлад"
                    width={267}
                    height={153.46}
                    className="block lg:hidden absolute bottom-[-50.44px] left-0 -z-10"
                />
                <Image
                    src="/images/footer/bottomImageDesk.png"
                    alt="Безлад"
                    width={328.5}
                    height={218.2}
                    className="hidden lg:block absolute right-2 -bottom-7 -z-10"
                />
                <Rights />
            </Container>
        </footer>
    );
}
