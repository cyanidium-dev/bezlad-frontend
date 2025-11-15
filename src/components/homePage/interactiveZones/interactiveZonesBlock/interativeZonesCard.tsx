import clsx from "clsx";
import Image from "next/image";
import { Blobs, BlobsT } from "./cardDecorations/Blobs";
import CrossIcon from "@/components/shared/icons/CrossIcon";
import { BluredElipse } from "./cardDecorations/BluredElipse";

type CardDirection = "horizontal" | "vertical";
type CardVariant =
    | "purpleBlob"
    | "purpleNoise"
    | "glass"
    | "black"
    | "gray"
    | "yellowNoodle"
    | "yellowElipse";

interface InterativeZonesCardProps {
    title: string;
    image: string;
    bgColor?: string; // tailwind or inline css
    direction: CardDirection;
    variant: CardVariant;
}

const GlassCard = (title: string, image: string) => {
    return (
        <div className="p-px w-[312px] h-[117px] w-[386px] h-[189px] bg-gradient-to-r from-black from-[27.26%] to-white to-[97.59%] rounded-[14px] lg:rounded-[18px]">
            <div className="relative bg-white px-4 py-3 lg:p-5 overflow-hidden rounded-[14px] lg:rounded-[18px]">
                <div className="flex flex-col gap-0.5 lg:gap-[9px] items-end ml-auto mt-auto lg:ml-none lg:max-w-[146px]">
                    <p className="text-base lg:text-[24px] font-azbuka leading-[120%] uppercase">
                        {title}
                    </p>
                    <CrossIcon className="text-purple w-[47px] h-[47px]" />
                </div>
                <Image
                    src={image}
                    alt={title}
                    width={198}
                    height={189.2}
                    className="lg:w-[272px] lg:h-[260px] object-cover absolute top-[-54px] lg:top-[-91px] left-[-59px] lg:left-[175px]"
                />
            </div>
        </div>
    );
};

const PurpleBlobCard = (title: string, image: string) => {
    return (
        <div className="relative w-[312px] h-[117px] lg:w-[285px] lg:h-[409px] bg-purple rounded-[14px] lg:rounded-[18px] overflow-hidden px-4 py-3 lg:p-5">
            <div className="mt-auto">
                <p className="text-base lg:text-[24px] font-azbuka leading-[120%] uppercase">
                    {title}
                </p>
            </div>
            <Image
                src={image}
                alt={title}
                width={207.5}
                height={198}
                className="lg:w-[404px] lg:h-[386px] object-cover absolute top-[-65px] lg:top-[-75px] left-[183px] lg:left-[11px]"
            />
            <BluredElipse className="w-[153.74px] h-[60.2px] lg:w-[309px] lg:h-[121px] text-purple absolute top-[70px] left-[5px] lg:top-[322px] lg:left-[-12px]  pointer-events-none" />
            <Blobs className="w-[123px] h-[68.4px] lg:w-[213.5px] lg:h-[83.8px] text-purple absolute top-[-7px] left-[-20px] rotate-[-170.14deg] lg:top-[92px] lg:left-[-92px] lg:rotate-[161.58deg] pointer-events-none" />
            <BlobsT className="w-[106.2px] h-[59.1px] lg:w-[213.5px] lg:h-[83.8px] text-purple absolute top-[33px] left-[98px] rotate-[-8.19deg] lg:top-[238px] lg:left-[-81px] lg:rotate-[161.66deg] pointer-events-none" />
            <BlobsT className="w-[132.2px] h-[73.6px] lg:w-[213.5px] lg:h-[83.8px] text-purple absolute top-[60.75px] left-[-6.47px] rotate-[-170.14 deg] lg:top-[247px] lg:left-[94px] lg:rotate-[-26.63deg] pointer-events-none" />
        </div>
    );
};

const YellowElipseCard = (title: string, image: string) => {
    return (
        <div className="relative w-[312px] h-[117px] lg:w-[285px] lg:h-[409px] bg-yellow rounded-[14px] lg:rounded-[18px] px-4 py-3 lg:p-5">
            <div className="mt-auto">
                <p className="text-base lg:text-[24px] font-azbuka leading-[120%] max-w[103px] lg:max-w[146px] uppercase">
                    {title}
                </p>
            </div>
            <BluredElipse className="w-[263px] h-[225.7px] lg:w-[263px] lg:h-[225.7px] text-[#FCFFC1] absolute top-[-93px] left-[137px] lg:top-[-57px] lg:left-[226px] pointer-events-none" />
            <Image
                src={image}
                alt={title}
                width={162.7}
                height={196.6}
                className="lg:w-[286.8px] lg:h-[360.5px] object-cover absolute top-[80px] lg:top-[190px] left-[148px] lg:left-[215px]"
            />
        </div>
    );
};

export function InterativeZonesCard({
    title,
    image,
    bgColor = "white",
    variant,
    direction,
}: InterativeZonesCardProps) {
    const isHorizontal = direction === "horizontal";

    return (
        <div
            className={clsx(
                "relative overflow-hidden rounded-3xl flex",
                isHorizontal
                    ? "h-[160px] w-full flex-row"
                    : "h-[320px] w-[240px] flex-col"
            )}
            style={{ backgroundColor: bgColor }}
        >
            {/* Decorations (arrows, crosses, scribbles, blobs) */}
            {decorations && (
                <div className="absolute inset-0 pointer-events-none">
                    {decorations}
                </div>
            )}

            {/* Image */}
            <Image
                src={image}
                alt=""
                className={clsx(
                    "object-cover transition-all",
                    isHorizontal ? "w-1/2 h-full" : "w-full h-1/2"
                )}
                width={100}
                height={100}
                style={{
                    clipPath,
                }}
            />

            {/* Text layer */}
            <div
                className={clsx(
                    "relative z-10 flex",
                    isHorizontal ? "items-center px-4" : "items-end p-4"
                )}
            >
                <h3 className="font-bold text-lg leading-tight">{title}</h3>
            </div>
        </div>
    );
}
