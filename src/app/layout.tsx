import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieConsent from "@/components/CookieBanner";
import SchemaOrg from "./seo/SchemaOrg";
import { Header } from "@/components/header";
import Footer from "@/components/footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-Franlin-Gothic-Heavy",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Grande Minas",
  description: "Site Grande Minas colégio técnico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth scroll-pt-24">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className= {`${geistSans.variable} ${geistMono.variable} antialiased  bg-gray-200`}
      >
        {children}
        <SchemaOrg />
        <Header/>
        <WhatsAppButton />
        <CookieConsent />
        <Footer/>
      </body>
    </html>
  );
}
