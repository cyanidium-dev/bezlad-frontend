import {
    ADDRESS,
    ADDRESS_URL,
    EMAIL,
    PHONE,
    SCHEDULE,
} from "@/constants/constants";
import { contactsPhoneRegex } from "@/regex/regex";
import { fadeInAnimation, listVariants } from "@/utils/animationVarints";
import { motion } from "framer-motion";

interface ContactsProps {
    className?: string;
}

export default function Contacts({ className }: ContactsProps) {
    return (
        <motion.address
            variants={listVariants({ delayChildren: 1 })}
            initial="hidden"
            animate="visible"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.1 }}
            className={`not-italic w-full ${className}`}
        >
            <div className="lg:flex lg:justify-between">
                <motion.div
                    variants={fadeInAnimation({ delay: 0.3, y: 20 })}
                    initial="hidden"
                    animate="visible"
                    whileInView="visible"
                    exit="exit"
                    viewport={{ once: true, amount: 0.1 }}
                    className="mb-8 lg:mb-0"
                >
                    <h3 className="text-[14px] leading-[150%] font-light mb-[3px]">
                        Графік роботи
                    </h3>
                    <p className="text-[16px] leading-[19px] uppercase font-semibold mb-px">
                        {SCHEDULE[0]}
                    </p>
                    <p className="text-[12px] leading-[14px] uppercase font-semibold">
                        {SCHEDULE[1]}
                    </p>
                </motion.div>
                <motion.div
                    variants={fadeInAnimation({ delay: 0.6, y: 20 })}
                    initial="hidden"
                    animate="visible"
                    whileInView="visible"
                    exit="exit"
                    viewport={{ once: true, amount: 0.1 }}
                    className="mb-8 lg:mb-0"
                >
                    <h3 className="text-[14px] leading-[150%] font-light mb-[3px]">
                        Наша адреса
                    </h3>
                    <a
                        href={ADDRESS_URL}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="text-[12px] leading-[150%] uppercase font-semibold max-w-[162px] whitespace-pre-line xl:hover:text-purple transition-colors duration-300"
                    >
                        {ADDRESS}
                    </a>
                </motion.div>
                <div className="mb-8 lg:mb-0">
                    <motion.div
                        variants={fadeInAnimation({ delay: 0.9, y: 20 })}
                        initial="hidden"
                        animate="visible"
                        whileInView="visible"
                        exit="exit"
                        viewport={{ once: true, amount: 0.1 }}
                        className="mb-[27px] "
                    >
                        <h3 className="text-[14px] leading-[16px] font-light mb-3">
                            Зателефонуйте:
                        </h3>
                        <a
                            href={`tel:${PHONE}`}
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            className="text-[16px] leading-[19px] uppercase font-semibold xl:hover:text-purple transition-colors duration-300"
                        >
                            {PHONE.replace(
                                contactsPhoneRegex,
                                "+38 $1 $2 $3 $4"
                            )}
                        </a>
                    </motion.div>
                    <motion.div
                        variants={fadeInAnimation({ delay: 1.2, y: 20 })}
                        initial="hidden"
                        animate="visible"
                        whileInView="visible"
                        exit="exit"
                        viewport={{ once: true, amount: 0.1 }}
                        className="lg:ml-auto"
                    >
                        <h3 className="text-[14px] leading-[16px] font-light mb-3">
                            Або напишіть нам:
                        </h3>
                        <a
                            href={`mailto:${EMAIL}`}
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            className="text-[16px] leading-[19px] uppercase font-bold xl:hover:text-purple transition-colors duration-300"
                        >
                            {EMAIL}
                        </a>
                    </motion.div>
                </div>
            </div>
        </motion.address>
    );
}
