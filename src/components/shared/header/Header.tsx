"use client";
import Container from "../container/Container";
import Navigation from "./navigation/Navigation";
import clsx from "clsx";
import { useScroll } from "framer-motion";
import MainButton from "../buttons/MainButton";
import Logo from "../icons/Logo";
import StarIcon from "../icons/StarIcon";

export default function Header() {
    const { scrollYProgress } = useScroll();
    return (
        <header
            className={clsx(
                "fixed top-[25px] left-0 right-0 z-50",
                scrollYProgress.get() > 0.1 ? "backdrop-blur-[38px]" : ""
            )}
        >
            <Container className="w-full pr-[19px]">
                <div className="flex items-center justify-between">
                    <a href="/">
                        <Logo className="w-[55px] h-[51px] lg:w-[71.4px] lg:h-[65.69px]" />
                    </a>
                    <div className="flex items-center lg:gap-6 space-between gap-4.5">
                        <Navigation />
                        <StarIcon className="hidden lg:block text-black-light" />
                        <MainButton
                            className="w-[175px] h-[43px] lg:w-[219px] lg:h-13.5 text-[10px] leading-[12px] lg:text-[12px] lg:leading-[14px] font-azbuka uppercase"
                            variant="outline"
                        >
                            Забронювати відвідування
                        </MainButton>
                        <button
                            type="button"
                            className="lg:hidden group relative z-60 w-10 h-10 outline-none flex flex-col justify-center items-center gap-2 hover:bg-black-light/10 rounded-[10px] transition duration-300 ease-in-out"
                        >
                            <div className="w-[26.6px] h-[2px] bg-black-light"></div>
                            <div className="w-[26.6px] h-[2px] bg-black-light"></div>
                            <div className="w-[26.6px] h-[2px] bg-black-light"></div>
                        </button>
                    </div>
                </div>
            </Container>
        </header>
    );
}
