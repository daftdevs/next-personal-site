import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";

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

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${satoshi.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
