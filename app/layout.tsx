import type { Metadata } from "next";
import { Noto_Sans_SC, Noto_Serif_SC, Outfit } from "next/font/google";
import "./globals.css";

const latinFont = Outfit({
  variable: "--font-latin",
  subsets: ["latin"],
});

const bodyFontCn = Noto_Sans_SC({
  variable: "--font-body-cn",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const displayFontCn = Noto_Serif_SC({
  variable: "--font-display-cn",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ShuangShuang",
  description:
    "A bilingual Apple-style product page for ShuangShuang, a calm Android app for word lookup, listening, and daily English learning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${latinFont.variable} ${bodyFontCn.variable} ${displayFontCn.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
