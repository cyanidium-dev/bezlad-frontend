import PhoneIcon from "../icons/PhoneIcon";

export default function CallButton() {
  return (
    <button
      type="button"
      aria-label="call button"
      className="fixed z-100 right-6 bottom-34 flex items-center justify-center cursor-pointer size-[52px] lg:size-[68px] rounded-full bg-black xl:hover:brightness-125 transition duration-300 ease-in-out"
    >
      <PhoneIcon className="text-white" />
    </button>
  );
}
