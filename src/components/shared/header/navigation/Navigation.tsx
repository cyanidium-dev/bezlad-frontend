import { navList } from "./navList";
import { twMerge } from "tailwind-merge";

interface NavigationProps {
    className?: string;
    variant?: "default" | "burger";
}

export default function Navigation({
    className,
    variant = "default",
}: NavigationProps) {
    return (
        <nav className={className}>
            <ul
                className={twMerge(
                    "flex items-center gap-7 w-full",
                    variant === "burger" && "flex-col gap-5 items-start"
                )}
            >
                {navList.map(item => (
                    <li key={item.href}>
                        <a
                            href={item.href}
                            className="text-black font-azbuka uppercase text-4 leading-[120%] xl:hover:text-purple xl:focus-visible:text-purple transition duration-300 ease-in-out"
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
