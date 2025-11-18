import { Service } from "@/types/service";
import MainButton from "@/components/shared/buttons/MainButton";
import Image from "next/image";
import { breakWords } from "@/utils/breakWords";
import { urlForSanityImage } from "@/utils/getUrlForSanityImage";

export default function PriceListCard({
    title,
    price,
    description,
    paymentUrl,
    image,
}: Service) {
    const brokenTitle = breakWords(title);
    const imageUrl = urlForSanityImage(image).url();
    return (
        <div
            style={{
                willChange: "transform, backdrop-filter",
            }}
            className="relative flex flex-col items-center justify-center w-[312px] md:w-[285px] rounded-[15px] bg-white/6 overflow-hidden backdrop-blur-[18px] webkit-backdrop-blur-[18px] p-0.5"
        >
            {/* Gradient border layer */}
            <div
                className="absolute z-10 inset-0 rounded-[15px] pointer-events-none"
                style={{
                    background:
                        "linear-gradient(129.84deg, #000000 27.26%, #FFFFFF 97.59%)",
                    padding: "1.5px",
                    WebkitMask:
                        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                }}
            />

            <div className="absolute z-10 inset-0 shadow-[inset_0px_4px_12.6px_rgba(255,255,255,0.25)] pointer-events-none" />
            <div className="relative z-10 overflow-hidden w-full h-full py-6 px-5 rounded-[15px]">
                <div className="w-50 h-50 absolute top-[-52px] right-[-13px] md:right-[-40px] rounded-full overflow-hidden">
                    <Image
                        src={imageUrl}
                        alt={title}
                        width={200}
                        height={200}
                        className="w-full h-full object-cover"
                    />
                </div>
                <h3 className="font-azbuka text-[24px] leading-[120%] uppercase text-white flex flex-col mb-7">
                    {brokenTitle.map((word, index) => (
                        <span key={index}>{word}</span>
                    ))}
                </h3>
                <p className="font-bold font-montserrat text-[48px] leading-[120%] uppercase text-white mb-7 flex items-baseline">
                    {`${price} `}

                    <span className="text-[14px] font-azbuka leading-[120%]">
                        {`грн`}
                    </span>
                </p>
                <p className="text-[14px] leading-[120%] text-white flex items-center gap-3.5 mb-7.5">
                    <span className="w-3.5 h-3.5 bg-white rounded-full shrink-0" />
                    {description}
                </p>
                <a href={paymentUrl}>
                    <MainButton
                        className="w-full h-[52px] text-[14px] leading-[120%]"
                        variant="white"
                    >
                        Забронювати відвідування
                    </MainButton>
                </a>
            </div>
        </div>
    );
}
