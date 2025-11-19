export const revalidate = 60;

import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/shared/header/Header";
import Footer from "@/components/shared/footer/Footer";
import { Montserrat } from "next/font/google";

const raleway = Raleway({
    variable: "--font-raleway",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    display: "swap",
    preload: true,
});

const azbuka = localFont({
    src: [
        {
            path: "../../public/fonts/azbuka04.woff2",
            weight: "400",
            style: "normal",
        },
    ],
    variable: "--font-azbuka",
    display: "swap",
    preload: true,
    fallback: ["Arial", "sans-serif"],
});

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"],
    weight: ["600"],
    display: "swap",
    preload: false,
});

export const metadata: Metadata = {
    title: "Безлад: безпечний простір природної гри з інтерактивними зонами",
    description:
        "Безлад — територія природної гри з інтерактивними зонами, індивідуальним супроводом нянь, відеоспостереженням та затишною кавʼярнею. Все для комфорту, розвитку й безпеки дітей.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="uk" className="scroll-smooth">
            <head>
                <link
                    rel="preload"
                    href="/fonts/azbuka04.woff2"
                    as="font"
                    type="font/woff2"
                    crossOrigin="anonymous"
                    fetchPriority="high"
                />
                <link rel="preconnect" href="https://cdn.sanity.io" />
                <link
                    rel="preload"
                    href="/images/hero/dashedLine.svg"
                    as="image"
                    fetchPriority="high"
                />
            </head>
            <body
                className={`${raleway.variable} ${azbuka.variable} ${montserrat.variable} flex min-h-screen flex-col text-[16px] font-normal leading-[120%] antialiased`}
            >
                <Header />
                <main className="flex-1 overflow-hidden"> {children}</main>
                <Footer />
            </body>
        </html>
    );
}
