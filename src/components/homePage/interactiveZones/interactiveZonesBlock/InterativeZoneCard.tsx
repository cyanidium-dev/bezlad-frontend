import clsx from "clsx";
import Image from "next/image";
import React from "react";
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

export const GlassCard = React.memo(
    ({
        title,
        image,
        direction = "right",
        desktopDirection,
    }: InterativeZonesCardProps) => {
        const effectiveDirection = desktopDirection ?? direction;

        const directionVariant = {
            left: {
                imageSize: { width: 224, height: 214 },
                imageClassName:
                    "md:w-[272px] md:h-[260px] xl:w-[272px] xl:h-[260px] object-cover absolute top-[-75px] md:top-[-91px] xl:top-[-91px] left-[145px] md:left-[175px] xl:left-[175px]",
                textClassName:
                    "bottom-3 sm:bottom-4 md:bottom-5 xl:bottom-5 z-1 items-start",
            },
            right: {
                imageSize: { width: 198, height: 189.2 },
                imageClassName:
                    "md:w-[272px] md:h-[260px] xl:w-[272px] xl:h-[260px] top-[-54px] md:top-[-91px] xl:top-[-91px] left-[-59px] md:left-[175px] xl:left-[175px]",
                textClassName:
                    "bottom-3 right-4 sm:right-5 sm:bottom-4 md:right-5 md:bottom-5 xl:right-5 xl:bottom-5 z-1 items-end",
            },
        };

        const variant = directionVariant[effectiveDirection];
        return (
            <div
                role="article"
                aria-label={`Interactive zone: ${title}`}
                style={{
                    backgroundImage:
                        "linear-gradient(129.84deg, #000000 27.26%, #FFFFFF 97.59%)",
                    backdropFilter: "blur(38px)",
                    boxShadow: "0px 4px 12px 0px #FFFFFF1F inset",
                }}
                className="p-px overflow-hidden w-[312px] h-[117px] sm:w-[380px] sm:h-[145px] md:w-[350px] md:h-[165px] lg:w-[350px] lg:h-[165px] xl:w-[386px] xl:h-[189px] rounded-[14px] sm:rounded-[16px] md:rounded-[18px] xl:rounded-[18px]"
            >
                <div className="w-full h-full relative bg-white px-4 py-3 sm:px-5 sm:py-4 md:p-5 xl:p-5 overflow-hidden rounded-[14px] sm:rounded-[16px] md:rounded-[18px] xl:rounded-[18px]">
                    <div
                        className={clsx(
                            "absolute flex flex-col gap-0.5 xl:gap-[9px] items-end xl:max-w-[146px]",
                            variant.textClassName
                        )}
                    >
                        <StarIcon className="text-purple w-[35px] h-[35px]" />
                        <p className="text-base sm:text-lg md:text-[24px] xl:text-[24px] font-azbuka leading-[120%] uppercase">
                            {title}
                        </p>
                    </div>
                    <Image
                        src={image}
                        alt={title}
                        width={variant.imageSize.width}
                        height={variant.imageSize.height}
                        loading="lazy"
                        className={clsx(
                            "object-cover absolute",
                            variant.imageClassName
                        )}
                    />
                </div>
            </div>
        );
    }
);
GlassCard.displayName = "GlassCard";

export const PurpleBlobCard = React.memo(
    ({ title, image }: InterativeZonesCardProps) => {
        return (
            <div
                role="article"
                aria-label={`Interactive zone: ${title}`}
                className="relative overflow-hidden w-[312px] h-[117px] sm:w-[380px] sm:h-[145px] md:w-[350px] md:h-[165px] lg:w-[250px] lg:h-[360px] xl:w-[285px] xl:h-[409px] bg-purple rounded-[14px] sm:rounded-[16px] md:rounded-[18px] xl:rounded-[18px] px-4 py-3 sm:px-5 sm:py-4 md:p-5 xl:p-5"
            >
                <div className="absolute bottom-3 sm:bottom-4 md:bottom-5 xl:bottom-5 z-2">
                    <p className="text-base sm:text-lg md:text-[24px] xl:text-[24px] text-white font-azbuka leading-[120%] uppercase">
                        {title}
                    </p>
                </div>
                <div className="w-[207.5px] h-[198px] md:w-[207.5px] md:h-[198px] lg:w-[280px] lg:h-[270px] xl:w-[404px] xl:h-[386px] absolute z-2 top-[-65px] md:top-[-75px] lg:top-[-60px] xl:top-[-75px] left-[183px] md:left-[183px] lg:left-[11px] xl:left-[11px]">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        loading="lazy"
                        className="object-cover"
                    />
                </div>
                <div className="w-[153.74px] h-[60.2px] md:hidden lg:block xl:block lg:w-[220px] xl:w-[309px] z-1 lg:h-[85px] xl:h-[121px] text-purple absolute lg:top-[280px] xl:top-[322px] lg:left-[-12px] xl:left-[-12px] pointer-events-none">
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
    }
);
PurpleBlobCard.displayName = "PurpleBlobCard";

export const YellowElipseCard = React.memo(
    ({ title, image }: InterativeZonesCardProps) => {
        return (
            <div className="relative w-fit h-fit overflow-visible">
                <div
                    role="article"
                    aria-label={`Interactive zone: ${title}`}
                    className="relative w-[312px] h-[117px] sm:w-[380px] sm:h-[145px] md:w-[350px] md:h-[165px] lg:w-[350px] lg:h-[165px] xl:w-[489px] xl:h-[189px] bg-yellow rounded-[14px] sm:rounded-[16px] md:rounded-[18px] xl:rounded-[18px] px-4 py-3 sm:px-5 sm:py-4 md:p-5 xl:p-5 overflow-hidden"
                >
                    <div className="absolute bottom-3 sm:bottom-4 md:bottom-5 xl:bottom-5">
                        <p className="text-base sm:text-lg md:text-[24px] xl:text-[24px] font-azbuka leading-[120%] uppercase max-w-[103px]">
                            {title}
                        </p>
                    </div>
                    <div className="z-1 w-[263px] h-[225.7px] xl:w-[263px] xl:h-[225.7px] absolute top-[-93px] left-[137px] xl:top-[-57px] xl:left-[226px] pointer-events-none">
                        <div className="bg-yellow-light blur-[40.6624px] w-full h-full" />
                    </div>
                </div>
                <Image
                    src={image}
                    alt={title}
                    width={162.7}
                    height={196.6}
                    loading="lazy"
                    className="z-2 md:w-[226.8px] md:h-auto lg:w-[226.8px] lg:h-auto xl:w-[286.8px] xl:h-[360.5px] object-cover absolute top-[-80px] md:top-[-110px] lg:top-[-110px] xl:top-[-190px] left-[148px] md:left-[130px] lg:left-[130px] xl:left-[215px]"
                />
            </div>
        );
    }
);
YellowElipseCard.displayName = "YellowElipseCard";

export const PurpleNoiseCard = React.memo(
    ({ title, image }: InterativeZonesCardProps) => {
        return (
            <div
                role="article"
                aria-label={`Interactive zone: ${title}`}
                className="overflow-hidden relative w-[312px] h-[117px] sm:w-[380px] sm:h-[145px] md:w-[350px] md:h-[165px] lg:w-[350px] lg:h-[165px] xl:w-[489px] xl:h-[189px] bg-purple rounded-[14px] sm:rounded-[16px] md:rounded-[18px] xl:rounded-[18px] px-4 py-3 sm:px-5 sm:py-4 md:p-5 xl:p-5"
            >
                <div className="absolute bottom-3 sm:bottom-4 md:bottom-5 xl:bottom-5 z-3">
                    <p className="text-base sm:text-lg md:text-[24px] xl:text-[24px] text-white font-azbuka leading-[120%] uppercase">
                        {title}
                    </p>
                </div>
                <div className="absolute w-[219px] h-[209px] md:w-[323px] md:h-[308.6px] lg:w-[323px] lg:h-[308px] xl:w-[323px] xl:h-[308.6px] absolute z-1 top-[-62px] sm:top-[-36px] md:top-[-57px] lg:top-[-100px] xl:top-[-57px] left-[126px] sm:left-[192px] md:left-[206px] lg:left-[150px] xl:left-[206px]">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        loading="lazy"
                        className="object-cover"
                    />
                </div>
                <Image
                    src="/images/ctaContactUs/noise.webp"
                    alt="noise"
                    fill
                    className="absolute inset-0 pointer-events-none"
                />
            </div>
        );
    }
);
PurpleNoiseCard.displayName = "PurpleNoiseCard";

export const GrayCard = React.memo(
    ({ title, image, pictureSize = "big" }: InterativeZonesCardProps) => {
        const picVariant = {
            big: {
                width: 243,
                height: 232,
                className:
                    "md:w-[323px] md:h-[308.6px] lg:w-[230px] lg:h-auto xl:w-[323px] xl:h-[308.6px] top-[-93px] md:top-[-133px] lg:top-[-100px] xl:top-[-133px] left-[115px] md:left-[115px] lg:left-[130px] xl:left-[115px]",
            },
            small: {
                width: 158,
                height: 152,
                className:
                    "md:w-[323px] md:h-[308.6px] lg:w-[230px] lg:h-auto xl:w-[323px] xl:h-[308.6px] top-[-14px] md:top-[-143px] lg:top-[-100px] xl:top-[-143px] left-[186px] md:left-[185px] lg:left-[130px] xl:left-[185px]",
            },
        };
        return (
            <div
                role="article"
                aria-label={`Interactive zone: ${title}`}
                className="relative overflow-hidden w-[312px] h-[117px] sm:w-[380px] sm:h-[145px] md:w-[350px] md:h-[165px] lg:w-[350px] lg:h-[165px] xl:w-[386px] xl:h-[201px] bg-gray-dark rounded-[14px] sm:rounded-[16px] md:rounded-[18px] xl:rounded-[18px] px-4 py-3 sm:px-5 sm:py-4 md:p-5 xl:p-5"
            >
                <div className="absolute bottom-3 sm:bottom-4 md:bottom-5 xl:bottom-5 z-1">
                    <p className="text-base sm:text-lg md:text-[24px] xl:text-[24px] text-white font-azbuka leading-[120%] uppercase lg:max-w-[198px] xl:max-w-[198px]">
                        {title}
                    </p>
                </div>
                <Image
                    src={image}
                    alt={title}
                    width={picVariant[pictureSize].width}
                    height={picVariant[pictureSize].height}
                    loading="lazy"
                    className={clsx(
                        "object-cover absolute",
                        picVariant[pictureSize].className
                    )}
                />
            </div>
        );
    }
);
GrayCard.displayName = "GrayCard";

export const BlackCard = React.memo(
    ({
        title,
        image,
        direction = "left",
        desktopDirection,
    }: InterativeZonesCardProps) => {
        const effectiveDirection = desktopDirection ?? direction;

        const directionVariant = {
            left: {
                imageSize: { width: 190, height: 181 },
                imageClassName:
                    "md:w-[230px] md:h-auto lg:w-[230px] lg:h-auto xl:w-[323px] xl:h-[308.6px] object-cover absolute top-[-16px] md:top-[-26.3px] lg:top-[-20px] xl:top-[-26.3px] left-[130px] md:left-[190px] lg:left-[130px] xl:left-[190px]",
                arrowClassName:
                    "top-[-17px] left-[-8.97px] z-10 rotate-[-165deg]",
                textClassName:
                    "bottom-3 sm:bottom-4 md:bottom-5 xl:bottom-5 z-1",
            },
            right: {
                imageSize: { width: 170, height: 162 },
                imageClassName:
                    "md:w-[272px] md:h-[260px] lg:w-[200px] lg:h-auto xl:w-[272px] xl:h-[260px] object-cover absolute top-[-26px] md:top-[-91px] lg:top-[-60px] xl:top-[-91px] left-[-32px] md:left-[175px] lg:left-[150px] xl:left-[175px]",
                arrowClassName: "top-[-4px] right-[26px] z-10 rotate-[-32deg]",
                textClassName:
                    "bottom-3 right-4 md:right-5 md:bottom-5 xl:right-5 xl:bottom-5 z-1",
            },
        };

        const variant = directionVariant[effectiveDirection];
        return (
            <div
                role="article"
                aria-label={`Interactive zone: ${title}`}
                className="relative overflow-hidden w-[312px] h-[117px] sm:w-[380px] sm:h-[145px] md:w-[350px] md:h-[165px] lg:w-[350px] lg:h-[165px] xl:w-[488px] xl:h-[201px] bg-black rounded-[14px] sm:rounded-[16px] md:rounded-[18px] xl:rounded-[18px] px-4 py-3 sm:px-5 sm:py-4 md:p-5 xl:p-5"
            >
                <div className={clsx("absolute", variant.textClassName)}>
                    <p className="text-base sm:text-lg md:text-[24px] xl:text-[24px] text-white font-azbuka leading-[120%] uppercase">
                        {title}
                    </p>
                </div>
                <Image
                    src={image}
                    alt={title}
                    width={variant.imageSize.width}
                    height={variant.imageSize.height}
                    loading="lazy"
                    className={clsx("object-cover", variant.imageClassName)}
                />
                <div className={clsx("absolute", variant.arrowClassName)}>
                    <DashedArrow className="w-28 h-auto text-gray-dark" />
                </div>
            </div>
        );
    }
);
BlackCard.displayName = "BlackCard";

export const NoodleCard = React.memo(
    ({ title, image }: InterativeZonesCardProps) => {
        return (
            <div
                role="article"
                aria-label={`Interactive zone: ${title}`}
                style={{
                    background:
                        "linear-gradient(164.01deg, #F6FF3A 7%, #F9FF8A 59.69%)",
                }}
                className="relative overflow-hidden w-[312px] h-[117px] sm:w-[380px] sm:h-[145px] md:w-[350px] md:h-[165px] lg:w-[250px] lg:h-[360px] xl:w-[285px] xl:h-[409px] rounded-[14px] sm:rounded-[16px] md:rounded-[18px] xl:rounded-[18px] px-4 py-3 sm:px-5 sm:py-4 md:p-5 xl:p-5"
            >
                <div className="absolute bottom-3 right-4 sm:right-5 sm:bottom-4 md:right-5 md:bottom-5 xl:right-5 xl:bottom-8 z-1">
                    <p className="text-base sm:text-lg md:text-[24px] xl:text-[24px] font-azbuka leading-[120%] uppercase">
                        {title}
                    </p>
                </div>

                <div className="w-[202px] h-[193px] z-2 md:w-[252px] md:h-[237px] lg:w-[280px] lg:h-[270px] xl:w-[404px] xl:h-[386px] absolute top-[-41px] md:top-[-75px] lg:top-[-60px] xl:top-[-75px] left-[-62px] md:left-[-38px] lg:left-[-30px] xl:left-[-139px]">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        loading="lazy"
                        className="object-cover"
                    />
                </div>
                <Noodle2
                    preserveAspectRatio="none"
                    className="lg:hidden z-1 absolute w-[238px] h-auto top-0 right-0 text-yellow-detail"
                />
                <Noodle
                    preserveAspectRatio="none"
                    className="hidden lg:block absolute w-[336.7px] h-auto -bottom-5 right-0 text-yellow-detail"
                />
                <div className="absolute hidden lg:block w-[309px] h-[121px] top-[324px] left-[78px]">
                    <div className="bg-yellow-light blur-[21.8px] w-full h-full" />
                </div>
            </div>
        );
    }
);
NoodleCard.displayName = "NoodleCard";

export const PlaceholderCard = React.memo(
    ({
        doubleWidth = false,
        className = "",
    }: {
        doubleWidth?: boolean;
        className?: string;
    }) => {
        const isRowSpan = className.includes("row-span-2");

        return (
            <div
                className={clsx(
                    "relative bg-gray-light rounded-[14px] sm:rounded-[16px] md:rounded-[18px] xl:rounded-[18px] flex items-center justify-center w-[312px] sm:w-[380px] md:w-[350px] lg:w-[350px] xl:w-[386px]",
                    doubleWidth
                        ? "h-[calc(2*117px+16px)] sm:h-[calc(2*145px+16px)] md:h-[calc(2*165px+16px)] lg:h-[calc(2*189px+16px)] xl:h-[calc(2*189px+16px)]"
                        : isRowSpan
                          ? "h-[calc(2*165px+20px)] lg:h-[calc(2*165px+20px)] xl:h-[calc(2*189px+20px)]"
                          : "h-[117px] sm:h-[145px] md:h-[165px] lg:h-[165px] xl:h-[189px]",
                    className
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
    }
);
PlaceholderCard.displayName = "PlaceholderCard";
