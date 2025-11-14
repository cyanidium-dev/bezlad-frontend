"use client";
import Container from "../container/Container";
import Navigation from "./navigation/Navigation";
import clsx from "clsx";
import { useScroll } from "framer-motion";
import MainButton from "../buttons/MainButton";
import Logo from "../icons/Logo";
import StarIcon from "../icons/StarIcon";
import Link from "next/link";

export default function Header() {
    const { scrollYProgress } = useScroll();
    return (
        <header
            className={clsx(
                "fixed top-[25px] left-0 right-0 z-50 lg:z-0",
                scrollYProgress.get() > 0.1 ? "backdrop-blur-[38px]" : ""
            )}
        >
            <Container className="w-full pr-[19px]">
                <div className="flex items-center justify-between">
                    <Link href="/">
                        <Logo className="w-[55px] h-[51px] lg:w-[71.4px] lg:h-[65.69px]" />
                    </Link>
                    <div className="flex items-center lg:gap-6 justify-between gap-4.5">
                        <Navigation />
                        <StarIcon className="hidden lg:block text-black" />
                        <MainButton
                            className="w-[175px] h-[43px] lg:w-[219px] lg:h-13.5 text-[10px] leading-[120%] lg:text-[12px] font-azbuka uppercase"
                            variant="outline"
                        >
                            Забронювати відвідування
                        </MainButton>
                        <button
                            type="button"
                            className="lg:hidden group relative z-60 w-10 h-10 outline-none flex flex-col justify-center items-center gap-2 xl:focus-visible:bg-black/10 rounded-[10px] transition duration-300 ease-in-out"
                        >
                            <div className="w-[26.6px] h-[2px] bg-black rounded-full"></div>
                            <div className="w-[26.6px] h-[2px] bg-black rounded-full"></div>
                            <div className="w-[26.6px] h-[2px] bg-black rounded-full"></div>
                        </button>
                    </div>
                </div>
            </Container>
        </header>
    );
}
