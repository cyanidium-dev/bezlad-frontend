"use client";
import { useState } from "react";
import RulesPopup from "./RulesPopup";
import Backdrop from "../backdrop/Backdrop";

export default function RulesButton() {
    const [isRulesPopupShown, setIsRulesPopupShown] = useState(false);
    return (
        <>
            <button
                onClick={() => setIsRulesPopupShown(true)}
                type="button"
                className="cursor-pointer w-[162px] lg:w-[148px] lg:mr-[54px] text-[16px] leading-[19px] font-semibold text-purple text-left uppercase"
            >
                Правила відвідування пісочниці
            </button>
            <RulesPopup
                isRulesPopupShown={isRulesPopupShown}
                setIsRulesPopupShown={setIsRulesPopupShown}
            />
            <Backdrop
                isVisible={isRulesPopupShown}
                onClick={() => setIsRulesPopupShown(false)}
            />
        </>
    );
}
