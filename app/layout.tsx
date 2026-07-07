import type { Metadata } from "next";
import { Lexend, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? new URL(`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`)
    : process.env.VERCEL_URL
    ? new URL(`https://${process.env.VERCEL_URL}`)
    : new URL("http://localhost:3000"),
  title: {
    default: "Youth Sport Development Sierra Leone",
    template: "%s | Youth Sport Development Sierra Leone",
  },
  description:
    "Based in Lakka, we empower the next generation by bridging the gap between classroom learning and athletic excellence.",
  openGraph: {
    images: ["/web-app-manifest-192x192.png"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/web-app-manifest-192x192.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="MyWebSite" />
      </head>
      <body
        className={`${lexend.variable} ${manrope.variable} bg-surface font-body text-on-surface selection:bg-tertiary-container`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
