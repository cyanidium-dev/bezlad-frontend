import Image from "next/image";
import LibraryArrowIcon from "@/components/shared/icons/LibraryArrowIcon";
import SurveillanceArrowIcon from "@/components/shared/icons/SurveillanceArrowIcon";
import CafeArrowIcon from "@/components/shared/icons/CafeArrowIcon";

export default function AdvantagesList() {
    return (
        <ul className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:flex lg:gap-0">
            <li className="relative w-[243px] sm:w-full h-[124px] md:h-[154px] lg:h-[124px] xl:h-[154px] justify-self-start">
                <h3 className="text-base lg:text-[32px] leading-[120%] uppercase font-azbuka absolute right-[-77px] top-[6px] rotate-[13.5deg] lg:rotate-0 lg:right-unset lg:left-[65px] lg:top-[-110px]">
                    Бібліотека
                </h3>
                <div className="relative w-full h-full rounded-full overflow-hidden">
                    <Image
                        src="/images/advantages/library.webp"
                        alt="library"
                        fill
                        className="object-cover absolute inset-0"
                    />
                </div>
                <LibraryArrowIcon className="absolute right-[-43px] top-[30px] lg:scale-[-1] lg:rotate-110 lg:top-[-65px] lg:right-[105px]" />
            </li>
            <li className="relative w-[243px] sm:w-full h-[124px] md:h-[154px] lg:h-[124px] xl:h-[154px] justify-self-end">
                <h3 className="text-[14px] lg:text-[32px] leading-[120%] uppercase font-azbuka absolute left-[-107px] top-[56px] z-3 rotate-[-54deg] lg:rotate-0 lg:left-auto lg:top-auto lg:right-[-173px] lg:bottom-[-105px]">
                    Відеоспостереження
                </h3>
                <div className="relative w-full h-full rounded-full overflow-hidden z-2">
                    <Image
                        src="/images/advantages/surveillance.webp"
                        alt="surveillance"
                        fill
                        className="object-cover absolute inset-0"
                    />
                </div>
                <div className="lg:hidden absolute z-1 w-[166px] h-[164px] left-[-112px] top-[-12px] bg-gray-light blur-[48.85px]" />
                <SurveillanceArrowIcon className="absolute left-[-32px] bottom-[-17px] lg:bottom-[-66px] lg:left-[196px] z-2 lg:rotate-175" />
            </li>
            <li className="relative w-[243px] sm:w-full h-[124px] md:h-[154px] lg:h-[124px] xl:h-[154px] justify-self-start">
                <h3 className="text-base lg:text-[24px] leading-[120%] uppercase font-azbuka absolute right-[-66px] top-[48px] rotate-[36.5deg] lg:rotate-0 lg:right-auto lg:left-[-41px] lg:top-[-70px]">
                    Кав’ярня
                </h3>
                <div className="relative w-full h-full rounded-full overflow-hidden">
                    <Image
                        src="/images/advantages/cafe.webp"
                        alt="cafe"
                        fill
                        className="object-cover absolute inset-0"
                    />
                </div>
                <CafeArrowIcon className="absolute right-[-20px] bottom-[8px] lg:scale-[-1] lg:top-[-38px] lg:right-auto lg:left-[22px] lg:rotate-82" />
            </li>
            <li className="relative w-full max-w-[300px] h-[113px] md:h-[154px] lg:h-[124px] xl:h-[154px] justify-self-end rounded-full bg-yellow flex items-center lg:justify-center px-[86px]">
                <h3 className="text-[32px] lg:text-[40px] leading-[120%] uppercase font-azbuka">
                    Баланс
                </h3>
            </li>
        </ul>
    );
}
