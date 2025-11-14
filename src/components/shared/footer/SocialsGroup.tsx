import InstagramIcon from "../icons/InstagramIcon";
//import FacebookIcon from "../icons/FacebookIcon";
//import TelegramIcon from "../icons/TelegramIcon";
import {
    INSTAGRAM_URL,
    //FACEBOOK_URL,
    //TELEGRAM_URL,
} from "@/constants/constants";
import { fadeInAnimation, listVariants } from "@/utils/animationVarints";
import { motion } from "framer-motion";

interface SocialsGroupProps {
    className?: string;
}

export default function SocialsGroup({ className }: SocialsGroupProps) {
    return (
        <motion.div
            variants={fadeInAnimation({ delay: 0.3 })}
            initial="hidden"
            animate="visible"
            className={className}
        >
            <motion.ul
                variants={listVariants({ delayChildren: 0.3 })}
                initial="hidden"
                animate="visible"
                className="flex items-center gap-6"
            >
                <li className="w-9 h-9 flex items-center justify-center hover:opacity-80 transition-opacity duration-300">
                    <a
                        href={INSTAGRAM_URL}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        aria-label="instagram"
                    >
                        <InstagramIcon className="text-purple w-8 h-8" />
                    </a>
                </li>
                {/*                 <li className="w-9 h-9 flex items-center justify-center hover:opacity-80 transition-opacity duration-300">
                    <a
                        href={FACEBOOK_URL}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        aria-label="facebook"
                    >
                        <FacebookIcon className="text-purple w-[27px] h-[27px]" />
                    </a>
                </li>
                <li className="w-9 h-9 flex items-center justify-center hover:opacity-80 transition-opacity duration-300">
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
        </motion.div>
    );
}
