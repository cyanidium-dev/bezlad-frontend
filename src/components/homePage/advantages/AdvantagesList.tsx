import Image from "next/image";
import LibraryArrowIcon from "@/components/shared/icons/LibraryArrowIcon";
import SurveillanceArrowIcon from "@/components/shared/icons/SurveillanceArrowIcon";
import CafeArrowIcon from "@/components/shared/icons/CafeArrowIcon";

export default function AdvantagesList() {
    return (
        <ul className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:flex lg:gap-0">
            <li className="relative w-[243px] sm:w-full h-[124px] md:h-[154px] lg:h-[124px] xl:h-[154px] justify-self-start">
                <h3 className="text-base leading-[120%] uppercase font-azbuka absolute right-[-77px] top-[6px] rotate-[13.5deg]">
                    Бібліотека
                </h3>
                <div className="relative w-full h-full rounded-full overflow-hidden">
                    <Image
                        src="/images/advantages/library.webp"
                        alt="library"
                        fill
                        className="object-none absolute inset-0"
                    />
                </div>
                <LibraryArrowIcon className="absolute right-[-43px] top-[30px]" />
            </li>
            <li className="relative w-[243px] sm:w-full h-[124px] md:h-[154px] lg:h-[124px] xl:h-[154px] justify-self-end">
                <h3 className="text-[14px] leading-[120%] uppercase font-azbuka absolute left-[-107px] top-[56px] z-3 rotate-[-54deg]">
                    Відеоспостереження
                </h3>
                <div className="relative w-full h-full rounded-full overflow-hidden z-2">
                    <Image
                        src="/images/advantages/surveillance.webp"
                        alt="surveillance"
                        fill
                        className="object-none absolute inset-0"
                    />
                </div>
                <div className="absolute z-1 w-[166px] h-[164px] left-[-112px] top-[-12px] bg-gray-light blur-[48.85px]" />
                <SurveillanceArrowIcon className="absolute left-[-32px] bottom-[-17px] z-2" />
            </li>
            <li className="relative w-[243px] sm:w-full h-[124px] md:h-[154px] lg:h-[124px] xl:h-[154px] justify-self-start">
                <h3 className="text-base leading-[120%] uppercase font-azbuka absolute right-[-66px] top-[48px] rotate-[36.5deg]">
                    Кав’ярня
                </h3>
                <div className="relative w-full h-full rounded-full overflow-hidden">
                    <Image
                        src="/images/advantages/cafe.webp"
                        alt="cafe"
                        fill
                        className="object-none absolute inset-0"
                    />
                </div>
                <CafeArrowIcon className="absolute right-[-20px] bottom-[8px]" />
            </li>
            <li className="relative w-full h-[113px] md:h-[154px] lg:h-[124px] xl:h-[154px] justify-self-end rounded-full bg-yellow flex items-center px-[86px]">
                <h3 className="text-[32px] leading-[120%] uppercase font-azbuka">
                    Баланс
                </h3>
            </li>
        </ul>
    );
}
