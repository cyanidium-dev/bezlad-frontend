import { ADDRESS, EMAIL, PHONE, SCHEDULE } from "@/constants/constants";
import { contactsPhoneRegex } from "@/regex/regex";

interface ContactsProps {
    className?: string;
}

export default function Contacts({ className }: ContactsProps) {
    return (
        <address className={`not-italic ${className}`}>
            <ul>
                <li className="mb-8">
                    <h3 className="text-[14px] leading-[150%] font-light mb-[3px]">
                        Графік роботи
                    </h3>
                    <p className="text-[16px] leading-[19px] uppercase font-semibold mb-[1px]">
                        {SCHEDULE[0]}
                    </p>
                    <p className="text-[12px] leading-[14px] uppercase font-semibold">
                        {SCHEDULE[1]}
                    </p>
                </li>
                <li className="mb-8">
                    <h3 className="text-[14px] leading-[150%] font-light mb-[3px]">
                        Наша адреса
                    </h3>
                    <p className="text-[12px] leading-[150%] uppercase font-semibold max-w-[162px]  whitespace-pre-line">
                        {ADDRESS}
                    </p>
                </li>
                <li className="mb-[27px]">
                    <h3 className="text-[14px] leading-[16px] font-light mb-3">
                        Зателефонуйте:
                    </h3>
                    <p className="text-[16px] leading-[19px] uppercase font-semibold">
                        {PHONE.replace(contactsPhoneRegex, "+38 $1 $2 $3 $4")}
                    </p>
                </li>
                <li>
                    <h3 className="text-[14px] leading-[16px] font-light mb-3">
                        Або напишіть нам:
                    </h3>
                    <p className="text-[16px] leading-[19px] uppercase font-bold">
                        {EMAIL}
                    </p>
                </li>
            </ul>
        </address>
    );
}
