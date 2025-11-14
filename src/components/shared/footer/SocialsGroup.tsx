import InstagramIcon from "../icons/InstagramIcon";
//import FacebookIcon from "../icons/FacebookIcon";
//import TelegramIcon from "../icons/TelegramIcon";
import {
    INSTAGRAM_URL,
    //FACEBOOK_URL,
    //TELEGRAM_URL,
} from "@/constants/constants";
import { listVariants } from "@/utils/animationVarints";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

interface SocialsGroupProps {
    className?: string;
}

export default function SocialsGroup({ className }: SocialsGroupProps) {
    return (
        <motion.ul
            variants={listVariants({ delayChildren: 0.3 })}
            initial="hidden"
            animate="visible"
            className={twMerge("flex items-center gap-6", className)}
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.1 }}
        >
            <li className="w-9 h-9 flex items-center justify-center xl:hover:opacity-80 transition-opacity duration-300">
                <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    aria-label="instagram"
                >
                    <InstagramIcon className="text-purple w-8 h-8" />
                </a>
            </li>
            {/*                 <li className="w-9 h-9 flex items-center justify-center xl:hover:opacity-80 transition-opacity duration-300">
                    <a
                        href={FACEBOOK_URL}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        aria-label="facebook"
                    >
                        <FacebookIcon className="text-purple w-[27px] h-[27px]" />
                    </a>
                </li>
                <li className="w-9 h-9 flex items-center justify-center xl:hover:opacity-80 transition-opacity duration-300">
                    <a
                        href={TELEGRAM_URL}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        aria-label="telegram"
                    >
                        <TelegramIcon className="text-purple w-7.5 h-7.5" />
                    </a>
                </li> */}
        </motion.ul>
    );
}
