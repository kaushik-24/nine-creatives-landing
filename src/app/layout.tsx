import type { Metadata } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/Header";
import Loader from "@/components/Loader";
import "./globals.css";

const cabinet = localFont({
  src: "../fonts/CabinetGrotesk-Variable.woff2",
  variable: "--font-display",
  display: "swap",
  weight: "100 900",
});

const switzer = localFont({
  src: "../fonts/Switzer-Variable.woff2",
  variable: "--font-sans",
  display: "swap",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ninecreatives.com"),
  title: "Nine Creatives — Web Design & Development Studio",
  description:
    "We help service businesses in Australia and the UK build fast, professional websites that bring in enquiries.",
  icons: [{ rel: "icon", url: "/images/nine-creatives-site-icon-image.jpg" }],
  openGraph: {
    type: "website",
    siteName: "Nine Creatives",
    title: "Nine Creatives — Web Design & Development Studio",
    description:
      "We help service businesses in Australia and the UK build fast, professional websites that bring in enquiries.",
    images: [
      {
        url: "/images/nine-creatives-logo-image.png",
        width: 1200,
        height: 630,
        alt: "Nine Creatives",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nine Creatives — Web Design & Development Studio",
    description:
      "We help service businesses in Australia and the UK build fast, professional websites that bring in enquiries.",
    images: ["/images/nine-creatives-logo-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className={`${cabinet.variable} ${switzer.variable} font-sans`}>
        <Loader />
        <Header />
        <main id="page-root" className="relative min-h-screen">{children}</main>
      </body>
    </html>
  );
}
