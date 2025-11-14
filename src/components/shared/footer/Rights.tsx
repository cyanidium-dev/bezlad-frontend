//import { CODE_SITE_URL } from "@/constants/constants";
//import TagIcon from "../icons/TagIcon";
import Image from "next/image";

export default function Rights() {
    return (
        <div className="flex flex-col items-center justify-center w-[84.5px] ml-[136px]">
            <p className="text-[7.51px] font-medium leading-[9px] uppercase text-white mb-[10px] tracking-[0.05em]">
                Created by
            </p>
            <Image
                src="/images/footer/WebBondLogo.png"
                alt="WebBond"
                width={63.6}
                height={21.2}
            />
            <Image
                src="/images/footer/codeSiteArtLogo.png"
                alt="CodeSite"
                width={78.82}
                height={15}
            />
            {/*    <a
                    href={CODE_SITE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-1.5"
                >
                    <p className="text-[14px] font-medium leading-[180%] uppercase active:text-gray-300 xl:group-hover:text-gray-300 focus-visible:text-gray-300 transition duration-300 ease-in-out">
                        Code-site.art
                    </p>
                    <TagIcon className="mb-1.5 xl:group-hover:text-gray-300 transition duration-300 ease-in-out" />
                </a> */}
        </div>
    );
}
