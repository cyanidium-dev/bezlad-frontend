import Container from "../container/Container";
import StarIcon from "../icons/StarIcon";
import SocialsGroup from "./SocialsGroup";
import Contacts from "./Contacts";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="pt-[100px]">
            <Container className="pb-7 border-b border-black">
                <h1 className="text-[32px] uppercase font-azbuka flex items-center flex-wrap gap-y-4 gap-x-[15px]">
                    Тут кожен момент
                    <span className="text-purple w-13 h-13 flex items-center justify-center -ml-2.5">
                        <StarIcon />
                    </span>
                    <span className="text-[16px] text-right uppercase max-w-[255px]">
                        — маленьке відкриття, а кожна усмішка — нагорода
                    </span>
                </h1>
            </Container>
            <Container className="pt-7">
                <SocialsGroup className="mb-[27px]" />
                <div>
                    <Contacts />
                    <button>Правила відвідування пісочниці</button>
                </div>
                <div>
                    <p>Безлад</p>
                    <Image
                        src="/images/footer/AThingPurple.png"
                        alt="Безлад"
                        width={100}
                        height={100}
                    />
                </div>
                <div>
                    <Image
                        src="/images/footer/bottomImageMob.png"
                        alt="Безлад"
                        width={100}
                        height={100}
                    />
                    <Image
                        src="/images/footer/bottomImageDesk.png"
                        alt="Безлад"
                        width={100}
                        height={100}
                    />
                </div>
            </Container>
        </footer>
    );
}
