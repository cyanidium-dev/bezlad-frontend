export const revalidate = 60;

import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/shared/header/Header";
import Footer from "@/components/shared/footer/Footer";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
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
    <html lang="uk">
      <body
        className={`${raleway.variable} ${azbuka.variable} flex min-h-screen flex-col text-[16px] font-normal leading-[120%] antialiased`}
      >
        <Header />
        <main className="flex-1"> {children}</main>
        <Footer />
      </body>
    </html>
  );
}
