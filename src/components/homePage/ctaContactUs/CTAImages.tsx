import Image from "next/image";

export default function CTAImages() {
  return (
    <>
      <div className="absolute inset-0 left-0 bottom-0 pointer-events-none">
        <Image
          src="/images/ctaContactUs/noise.webp"
          fill
          alt="noise"
          className="object-cover"
        />
      </div>
      <div className="absolute left-0 md:left-auto md:right-0 bottom-0 w-full h-[279px] md:h-full md:w-[45%] lg:w-[35%] xl:w-[604px] rounded-2xl overflow-hidden">
        <Image
          src="/images/ctaContactUs/boy.webp"
          fill
          alt="boy"
          className="object-cover"
        />
      </div>
    </>
  );
}
