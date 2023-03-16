import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import { Roboto_Slab } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const satoshi = localFont({
  src: [
    {
      path: "../../public/fonts/Satoshi/Satoshi-Variable.ttf",
      weight: "300 900",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi/Satoshi-VariableItalic.ttf",
      weight: "300 900",
      style: "italic",
    },
  ],
  variable: "--font-satoshi",
});

const roboto = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-roboto",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${roboto.variable} font-serif`}>
      <div className={`${satoshi.variable} font-sans`}>
        <Component {...pageProps} />
        <Analytics />
      </div>
    </main>
  );
}
