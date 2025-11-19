import Image from "next/image";

export default function AdvantagesImages() {
    return (
        <div className="absolute left-0 bottom-0 w-full h-full">
            <div className="absolute inset-0 z-10 pointer-events-none ">
                <Image
                    src="/images/ctaContactUs/noise.webp"
                    fill
                    alt="noise"
                    className="object-cover opacity-40"
                />
            </div>
            <div className="w-[465.37px] h-[592.66px] absolute left-[-177px] top-[36px] pointer-events-none rotate-51 opacity-86">
                <Image
                    src="/images/advantages/flowersGray.webp"
                    fill
                    alt="flowersGray"
                    className="object-cover"
                />
            </div>
            <div className="w-[341.88] h-[435.4px] absolute right-[-151px] bottom-[-230px] pointer-events-none rotate-29">
                <Image
                    src="/images/advantages/flowersMob.webp"
                    fill
                    alt="flowersMob"
                    className="object-cover"
                />
            </div>
        </div>
    );
}
