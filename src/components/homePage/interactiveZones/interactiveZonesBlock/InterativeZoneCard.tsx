import clsx from "clsx";
import Image from "next/image";
import StarIcon from "@/components/shared/icons/StarIcon";
import DashedArrow from "@/components/shared/icons/DashedArrow";
import { Noodle, Noodle2 } from "./cardDecorations/Noodle";
import type { Direction, PictureSize } from "../interactiveZonesData";

export interface InterativeZonesCardProps {
    title: string;
    image: string;
    direction?: Direction;
    desktopDirection?: Direction;
    pictureSize?: PictureSize;
}

export const GlassCard = ({
    title,
    image,
    direction = "right",
    desktopDirection,
}: InterativeZonesCardProps) => {
    // Use desktopDirection if provided, otherwise fall back to direction
    const effectiveDirection = desktopDirection ?? direction;

    const directionVariant = {
        left: {
            imageSize: { width: 224, height: 214 },
            imageClassName:
                "lg:w-[272px] lg:h-[260px] object-cover absolute top-[-75px] lg:top-[-91px] left-[145px] lg:left-[175px]",
            textClassName: "bottom-3 lg:bottom-5 z-1 items-start",
        },
        right: {
            imageSize: { width: 198, height: 189.2 },
            imageClassName:
                "lg:w-[272px] lg:h-[260px] top-[-54px] lg:top-[-91px] left-[-59px] lg:left-[175px]",
            textClassName:
                "bottom-3 right-4 lg:right-5 lg:bottom-5 z-1 items-end",
        },
    };

    const variant = directionVariant[effectiveDirection];
    return (
        <div
            style={{
                backgroundImage:
                    "linear-gradient(129.84deg, #000000 27.26%, #FFFFFF 97.59%)",
                backdropFilter: "blur(38px)",
                boxShadow: "0px 4px 12px 0px #FFFFFF1F inset",
            }}
            className="p-px overflow-hidden w-[312px] h-[117px] lg:w-[386px] lg:h-[189px] rounded-[14px] lg:rounded-[18px]"
        >
            <div className="w-full h-full relative bg-white px-4 py-3 lg:p-5 overflow-hidden rounded-[14px] lg:rounded-[18px]">
                <div
                    className={clsx(
                        "absolute flex flex-col gap-0.5 lg:gap-[9px] items-end lg:max-w-[146px]",
                        variant.textClassName
                    )}
                >
                    <StarIcon className="text-purple w-[35px] h-[35px]" />
                    <p className="text-base lg:text-[24px] font-azbuka leading-[120%] uppercase">
                        {title}
                    </p>
                </div>
                <Image
                    src={image}
                    alt={title}
                    width={variant.imageSize.width}
                    height={variant.imageSize.height}
                    className={clsx(
                        "object-cover absolute",
                        variant.imageClassName
                    )}
                />
            </div>
        </div>
    );
};

export const PurpleBlobCard = ({ title, image }: InterativeZonesCardProps) => {
    return (
        <div className="relative overflow-hidden w-[312px] h-[117px] lg:w-[285px] lg:h-[409px] bg-purple rounded-[14px] lg:rounded-[18px] px-4 py-3 lg:p-5">
            <div className="absolute bottom-3 lg:bottom-5 z-2">
                <p className="text-base lg:text-[24px] text-white font-azbuka leading-[120%] uppercase">
                    {title}
                </p>
            </div>
            <Image
                src={image}
                alt={title}
                width={207.5}
                height={198}
                className="lg:w-[404px] lg:h-[386px] object-cover absolute z-2 top-[-65px] lg:top-[-75px] left-[183px] lg:left-[11px]"
            />
            <div className="w-[153.74px] h-[60.2px] lg:w-[309px] z-1 lg:h-[121px] text-purple absolute top-[70px] left-[5px] lg:top-[322px] lg:left-[-12px]  pointer-events-none">
                <div className="bg-purple blur-[10.8466px] w-full h-full" />
            </div>
            <Image
                src="/images/interactiveZone/blobsHorizontal.svg"
                alt="blobs horizontal"
                fill
                className="absolute inset-0 pointer-events-none lg:hidden"
            />
            <Image
                src="/images/interactiveZone/blobsVertical.svg"
                alt="blobs vertical"
                fill
                className="absolute inset-0 pointer-events-none lg:block hidden"
            />
        </div>
    );
};

export const YellowElipseCard = ({
    title,
    image,
}: InterativeZonesCardProps) => {
    return (
        <div className="relative w-fit h-fit overflow-visible">
            <div className="relative w-[312px] h-[117px] lg:w-[489px] lg:h-[189px] bg-yellow rounded-[14px] lg:rounded-[18px] px-4 py-3 lg:p-5 overflow-hidden">
                <div className="absolute bottom-3 lg:bottom-5">
                    <p className="text-base lg:text-[24px] font-azbuka leading-[120%] uppercase max-w-[103px]">
                        {title}
                    </p>
                </div>
                <div className="z-1 w-[263px] h-[225.7px] lg:w-[263px] lg:h-[225.7px] absolute top-[-93px] left-[137px] lg:top-[-57px] lg:left-[226px] pointer-events-none">
                    <div className="bg-yellow-light blur-[40.6624px] w-full h-full" />
                </div>
            </div>
            <Image
                src={image}
                alt={title}
                width={162.7}
                height={196.6}
                className="z-2 lg:w-[286.8px] lg:h-[360.5px] object-cover absolute top-[-80px] lg:top-[-190px] left-[148px] lg:left-[215px]"
            />
        </div>
    );
};

export const PurpleNoiseCard = ({ title, image }: InterativeZonesCardProps) => {
    return (
        <div className="overflow-hidden relative w-[312px] h-[117px] lg:w-[489px] lg:h-[189px] bg-purple rounded-[14px] lg:rounded-[18px] px-4 py-3 lg:p-5">
            <div className="absolute bottom-3 lg:bottom-5 z-1">
                <p className="text-base lg:text-[24px] text-white font-azbuka leading-[120%] uppercase">
                    {title}
                </p>
            </div>
            <Image
                src={image}
                alt={title}
                width={219}
                height={209}
                className="lg:w-[323px] lg:h-[308.6px] object-cover absolute z-1 top-[-62px] lg:top-[-57px] left-[126px] lg:left-[206px]"
            />
            <Image
                src="/images/ctaContactUs/noise.webp"
                alt="noise"
                fill
                className="absolute inset-0 pointer-events-none"
            />
        </div>
    );
};

export const GrayCard = ({
    title,
    image,
    pictureSize = "big",
}: InterativeZonesCardProps) => {
    const picVariant = {
        big: {
            width: 243,
            height: 232,
            className:
                "lg:w-[323px] lg:h-[308.6px] top-[-93px] lg:top-[-133px] left-[115px] lg:left-[115px]",
        },
        small: {
            width: 158,
            height: 152,
            className:
                "lg:w-[323px] lg:h-[308.6px] top-[-14px] lg:top-[-143px] left-[186px] lg:left-[185px]",
        },
    };
    return (
        <div className="relative overflow-hidden w-[312px] h-[117px] lg:w-[386px] lg:h-[201px] bg-gray-dark rounded-[14px] lg:rounded-[18px] px-4 py-3 lg:p-5">
            <div className="absolute bottom-3 lg:bottom-5 z-1">
                <p className="text-base lg:text-[24px] text-white font-azbuka leading-[120%] uppercase lg:max-w-[198px]">
                    {title}
                </p>
            </div>
            <Image
                src={image}
                alt={title}
                width={picVariant[pictureSize].width}
                height={picVariant[pictureSize].height}
                className={clsx(
                    "object-cover absolute",
                    picVariant[pictureSize].className
                )}
            />
        </div>
    );
};

export const BlackCard = ({
    title,
    image,
    direction = "left",
    desktopDirection,
}: InterativeZonesCardProps) => {
    // Use desktopDirection if provided, otherwise fall back to direction
    const effectiveDirection = desktopDirection ?? direction;

    const directionVariant = {
        left: {
            imageSize: { width: 190, height: 181 },
            imageClassName:
                "lg:w-[323px] lg:h-[308.6px] object-cover absolute top-[-16px] lg:top-[-26.3px] left-[130px] lg:left-[190px]",
            arrowClassName: "top-[-17px] left-[-8.97px] z-10 rotate-[-165deg]",
            textClassName: "bottom-3 lg:bottom-5 z-1",
        },
        right: {
            imageSize: { width: 170, height: 162 },
            imageClassName:
                "lg:w-[272px] lg:h-[260px] object-cover absolute top-[-26px] lg:top-[-91px] left-[-32px] lg:left-[175px]",
            arrowClassName: "top-[-4px] right-[26px] z-10 rotate-[-32deg]",
            textClassName: "bottom-3 right-4 lg:right-5 lg:bottom-5 z-1",
        },
    };

    const variant = directionVariant[effectiveDirection];
    return (
        <div className="relative overflow-hidden w-[312px] h-[117px] lg:w-[488px] lg:h-[201px] bg-black rounded-[14px] lg:rounded-[18px] px-4 py-3 lg:p-5">
            <div className={clsx("absolute", variant.textClassName)}>
                <p className="text-base lg:text-[24px] text-white font-azbuka leading-[120%] uppercase">
                    {title}
                </p>
            </div>
            <Image
                src={image}
                alt={title}
                width={variant.imageSize.width}
                height={variant.imageSize.height}
                className={clsx("object-cover", variant.imageClassName)}
            />
            <div className={clsx("absolute", variant.arrowClassName)}>
                <DashedArrow className="w-28 h-auto text-gray-dark" />
            </div>
        </div>
    );
};

export const NoodleCard = ({ title, image }: InterativeZonesCardProps) => {
    return (
        <div
            style={{
                background:
                    "linear-gradient(164.01deg, #F6FF3A 7%, #F9FF8A 59.69%)",
            }}
            className="relative overflow-hidden w-[312px] h-[117px] lg:w-[285px] lg:h-[409px] rounded-[14px] lg:rounded-[18px] px-4 py-3 lg:p-5"
        >
            <div className="absolute bottom-3 right-4 lg:right-5 lg:bottom-8 z-1">
                <p className="text-base lg:text-[24px] font-azbuka leading-[120%] uppercase">
                    {title}
                </p>
            </div>
            <Image
                src={image}
                alt={title}
                width={202}
                height={193}
                className="z-2 lg:w-[404px] lg:h-[386px] object-cover absolute top-[-41px] lg:top-[-75px] left-[-62px] lg:left-[-139px]"
            />
            <Noodle2
                preserveAspectRatio="none"
                className="lg:hidden z-1 absolute w-[238px] h-auto top-0 right-0 text-yellow-detail"
            />
            <Noodle
                preserveAspectRatio="none"
                className="hidden lg:block absolute w-[336.7px] h-auto bottom-0 right-0 text-yellow-detail"
            />
            <div className="absolute hidden lg:block w-[309px] h-[121px] top-[324px] left-[78px]">
                <div className="bg-yellow-light blur-[21.8px] w-full h-full" />
            </div>
        </div>
    );
};

export const PlaceholderCard = ({
    doubleWidth = false,
}: {
    doubleWidth?: boolean;
}) => {
    return (
        <div
            className={clsx(
                "relative bg-gray-light rounded-[14px] lg:rounded-[18px] flex items-center justify-center w-[312px] lg:w-[386px]",
                doubleWidth
                    ? "h-[calc(2*117px+16px)] lg:h-[calc(2*189px+16px)]"
                    : "h-[117px] lg:h-[189px]"
            )}
        >
            <Image
                src="/images/interactiveZone/placeholder.svg"
                alt="Placeholder"
                width={175}
                height={257}
                className="object-contain"
            />
        </div>
    );
};
