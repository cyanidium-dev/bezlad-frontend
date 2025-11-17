import { Dispatch, SetStateAction } from "react";
import Modal from "../modals/Modal";
import AnimatedAnimal from "../animatedAnimal/AnimatedAnimal";

interface NotificationPopUpProps {
  title: string;
  description: string;
  isPopUpShown: boolean;
  setIsPopUpShown: Dispatch<SetStateAction<boolean>>;
}

export default function NotificationPopUp({
  title,
  description,
  isPopUpShown,
  setIsPopUpShown,
}: NotificationPopUpProps) {
  return (
    <Modal
      isModalShown={isPopUpShown}
      setIsModalShown={setIsPopUpShown}
      className="overflow-hidden"
    >
      <div className="relative flex flex-col justify-center items-center w-full py-10">
        <h3 className="mb-4 font-azbuka text-[28px] lg:text-[36px] font-normal leading-[120%] text-center uppercase">
          {title}
        </h3>
        <p className="mb-[281px] text-[14px] font-normal leading-[120%] text-center">
          {description}
        </p>
        <div className="absolute left-[-134px] lg:left-[-95px] bottom-[-30px] lg:bottom-[-62px] w-[311px] h-[284px] lg:w-[353px] lg:h-[321px]">
          <AnimatedAnimal
            svgPath="/images/animals/animal.svg"
            className="w-[311px] h-[284px] lg:w-[353px] lg:h-[321px]"
            maxPupilMovement={3}
          />
        </div>
        <div className="absolute z-10 left-[73px] bottom-0 w-[120px] h-[159px] lg:w-[160px] lg:h-[213px]">
          <AnimatedAnimal
            svgPath="/images/animals/animalYellowSmall.svg"
            className="w-[120px] h-auto lg:w-[160px] lg:h-[213px]"
            maxPupilMovement={3}
          />
        </div>
      </div>
    </Modal>
  );
}
