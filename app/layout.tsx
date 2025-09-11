import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "GardenCityBDC - Trusted FX & Mint Notes",
  description: "Convert, Calculate, and Buy with Confidence - Black Market Forex",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lato.variable} font-lato antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
