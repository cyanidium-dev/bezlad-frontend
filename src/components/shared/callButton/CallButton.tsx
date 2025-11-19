import PhoneIcon from "../icons/PhoneIcon";
import TelegramIcon from "../icons/TelegramIcon";

export default function CallButton() {
  return (
    <div
      className="fixed z-100 bottom-34 lg:bottom-14 right-6
      sm:right-[calc(max(0px,(100vw-640px)/2)+1.5rem)]
      md:right-[calc(max(0px,(100vw-48rem)/2)+1.5rem)]
      lg:right-[calc(max(0px,(100vw-64rem)/2)+2rem)]
      xl:right-[calc(max(0px,(100vw-80rem)/2)+2rem)]"
    >
      <button
        type="button"
        aria-label="call button"
        className="group flex items-center justify-center cursor-pointer size-11 lg:size-14 rounded-full 
      bg-purple xl:hover:brightness-125 xl:hover:-translate-y-1 active:scale-95 transition duration-300 ease-in-out will-change-transform
     "
      >
        <div className="absolute inset-0 -z-10 rounded-full xl:group-hover:translate-y-1 xl:group-hover:bg-purple/50 blur-md transition duration-300 ease-in-out" />
        <PhoneIcon className="size-6 lg:size-8 text-white" />
      </button>

      <button
        type="button"
        aria-label="call button"
        className="group flex items-center justify-center cursor-pointer size-11 lg:size-14 rounded-full 
      bg-blue-400 xl:hover:brightness-125 xl:hover:-translate-y-1 active:scale-95 transition duration-300 ease-in-out will-change-transform
     "
      >
        <div className="absolute inset-0 -z-10 rounded-full xl:group-hover:translate-y-1 xl:group-hover:bg-blue/400 blur-md transition duration-300 ease-in-out" />
        <TelegramIcon className="size-6 lg:size-8 text-white" />
      </button>

      <button
        type="button"
        aria-label="call button"
        className="group flex items-center justify-center cursor-pointer size-[52px] lg:size-[68px] rounded-full 
      bg-black xl:hover:brightness-125 xl:hover:-translate-y-1 active:scale-95 transition duration-300 ease-in-out will-change-transform
     "
      >
        <div className="absolute inset-0 -z-10 rounded-full xl:group-hover:translate-y-1 xl:group-hover:bg-black/50 blur-md transition duration-300 ease-in-out" />
        <PhoneIcon className="size-7 lg:size-9 text-white" />
      </button>
    </div>
  );
}
