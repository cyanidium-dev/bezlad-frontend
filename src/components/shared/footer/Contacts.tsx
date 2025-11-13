import { ADDRESS, EMAIL, PHONE, SCHEDULE } from "@/constants/constants";

export default function Contacts() {
    return (
        <address className="not-italic">
            <ul>
                <li className="mb-8">
                    <h3 className="text-[14px] leading-[150%] font-light">
                        Графік роботи
                    </h3>
                    <p className="text-[16px] leading-[19px] uppercase font-semibold">
                        {SCHEDULE[0]}
                    </p>
                    <p className="text-[12px] leading-[14px] uppercase font-semibold">
                        {SCHEDULE[1]}
                    </p>
                </li>
                <li className="mb-8">
                    <h3 className="text-[14px] leading-[150%] font-light">
                        Наша адреса
                    </h3>
                    <p className="text-[16px] leading-[19px] uppercase font-semibold">
                        {ADDRESS}
                    </p>
                </li>
                <li className="mb-8">
                    <h3 className="text-[14px] leading-[150%] font-light">
                        Зателефонуйте:
                    </h3>
                    <p className="text-[16px] leading-[19px] uppercase font-semibold">
                        {PHONE}
                    </p>
                </li>
                <li>
                    <h3 className="text-[14px] leading-[150%] font-light">
                        Або напишіть нам:
                    </h3>
                    <p className="text-[16px] leading-[19px] uppercase font-semibold">
                        {EMAIL}
                    </p>
                </li>
            </ul>
        </address>
    );
}
