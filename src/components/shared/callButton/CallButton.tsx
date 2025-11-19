import PhoneIcon from "../icons/PhoneIcon";

export default function CallButton() {
  return (
    <button
      type="button"
      aria-label="call button"
      className="fixed z-100 group bottom-34 lg:bottom-14 flex items-center justify-center cursor-pointer size-[52px] lg:size-[68px] rounded-full 
      bg-black xl:hover:brightness-125 xl:hover:-translate-y-1 transition duration-300 ease-in-out 
      right-6
      sm:right-[calc(max(0px,(100vw-640px)/2)+1.5rem)]
      md:right-[calc(max(0px,(100vw-48rem)/2)+1.5rem)]
      lg:right-[calc(max(0px,(100vw-64rem)/2)+2rem)]
      xl:right-[calc(max(0px,(100vw-80rem)/2)+2rem)]"
    >
      <div className="absolute inset-0 -z-10 rounded-full xl:group-hover:translate-y-1 xl:group-hover:bg-black/50 blur-md transition duration-300 ease-in-out" />
      <PhoneIcon className="size-7 lg:size-9 text-white" />
    </button>
  );
}
