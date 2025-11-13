import InstagramIcon from "../icons/InstagramIcon";
import FacebookIcon from "../icons/FacebookIcon";
import TelegramIcon from "../icons/TelegramIcon";
import {
    INSTAGRAM_URL,
    FACEBOOK_URL,
    TELEGRAM_URL,
} from "@/constants/constants";

interface SocialsGroupProps {
    className?: string;
}

export default function SocialsGroup({ className }: SocialsGroupProps) {
    return (
        <div className={className}>
            <ul className="flex items-center gap-6">
                <li>
                    <a
                        href={INSTAGRAM_URL}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        aria-label="instagram"
                    >
                        <InstagramIcon className="text-purple w-9 h-9" />
                    </a>
                </li>
                <li>
                    <a
                        href={FACEBOOK_URL}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        aria-label="facebook"
                    >
                        <FacebookIcon className="text-purple w-9 h-9" />
                    </a>
                </li>
                <li>
                    <a
                        href={TELEGRAM_URL}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        aria-label="telegram"
                    >
                        <TelegramIcon className="text-purple w-9 h-9" />
                    </a>
                </li>
            </ul>
        </div>
    );
}
