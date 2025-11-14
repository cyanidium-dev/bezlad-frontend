import Container from "../container/Container";
import StarIcon from "../icons/StarIcon";
import SocialsGroup from "./SocialsGroup";
import Contacts from "./Contacts";
import Image from "next/image";
import Rights from "./Rights";

export default function Footer() {
    return (
        <footer className="pt-[100px] pb-[23.5px] relative overflow-hidden">
            <Container className="pb-[27px] border-b border-black">
                <h1 className="text-[32px] leading-[120%] uppercase font-azbuka flex items-center flex-wrap gap-y-4 gap-x-[15px]">
                    Тут кожен момент
                    <span className="text-purple w-13 h-13 flex items-center justify-center -ml-2.5">
                        <StarIcon />
                    </span>
                    <span className="text-[16px] leading-[120%] text-right uppercase max-w-[255px]">
                        — маленьке відкриття, а кожна усмішка — нагорода
                    </span>
                </h1>
            </Container>
            <Container className="pt-7 pl-[27px]">
                <SocialsGroup className="mb-[27px]" />
                <div className="mb-[39px]">
                    <Contacts className="mb-[27px]" />
                    <button
                        type="button"
                        className="w-[162px] text-[16px] leading-[19px] font-semibold text-purple text-left uppercase"
                    >
                        Правила відвідування пісочниці
                    </button>
                </div>
                <div className="absolute bottom-[8px] right-[-42px]">
                    <div
                        className="rotate-[-90deg] origin-bottom-right"
                        style={{ transform: "translateX(100%)" }}
                    >
                        <p className="text-[147.567px] leading-[120%] uppercase font-azbuka">
                            Безлад
                        </p>
                        <Image
                            src="/images/footer/AThingPurple.png"
                            alt="Безлад"
                            width={121}
                            height={144}
                            className="absolute bottom-[42px] left-[223.58px]"
                        />
                    </div>
                </div>
                <div className="absolute bottom-[-50.44px] left-0 -z-10">
                    <Image
                        src="/images/footer/bottomImageMob.png"
                        alt="Безлад"
                        width={267}
                        height={153.46}
                        className="block lg:hidden"
                    />
                    <Image
                        src="/images/footer/bottomImageDesk.png"
                        alt="Безлад"
                        width={100}
                        height={100}
                        className="hidden lg:block"
                    />
                </div>
                <Rights />
            </Container>
        </footer>
    );
}
