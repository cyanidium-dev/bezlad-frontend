import AnimatedAnimal from "@/components/shared/AnimatedAnimal";

export default function HeroImages() {
  return (
    <>
      <div
        className="absolute -z-10 left-[calc(50%-325px)] lg:left-auto lg:right-[calc(50%-785px)] bottom-[-363px] lg:bottom-[-507px] 
        w-[746px] lg:w-[999px] h-[758px] lg:h-[1029px] rounded-full 
      bg-[linear-gradient(164deg,#F6FF3A_7%,#F9FF8A_59.69%)]"
      />
      <div
        className="hidden lg:block absolute -z-10 left-[calc(50%-725px)] bottom-[-277px] 
        w-[535px] h-[439px] overflow-hidden"
        style={{
          borderRadius: "50%",
        }}
      >
        <div
          className="w-full h-full bg-[linear-gradient(164deg,#642DBA_7%,#B791FF_59.69%)]"
          style={{
            borderRadius: "50%",
          }}
        />
      </div>
      <div className="absolute top-[257px] lg:top-[289px] right-[calc(50%-338px)] lg:right-[238px]">
        <AnimatedAnimal
          svgPath="/images/animal.svg"
          className="w-[393px] lg:w-[532px] h-[355px] lg:h-[486px]"
          maxPupilMovement={6}
        />
      </div>
    </>
  );
}
