import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "../context/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mateus Felipe | Full-Stack Developer",
  description: "Portfolio of Mateus Felipe - Building the digital future.",
};

import Navbar from "../components/Navbar";
import ClickSpark from "@/components/effects/mouse_spark";

import SmoothScroll from "@/components/SmoothScroll";
import SplashScreen from "@/components/SplashScreen";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
        <LanguageProvider>
          <SmoothScroll>
            <Navbar />
            <SplashScreen />
            <ClickSpark
              sparkColor='#fff'
              sparkSize={10}
              sparkRadius={15}
              sparkCount={8}
              duration={400}
            >
              {children}
            </ClickSpark>
          </SmoothScroll>
        </LanguageProvider>
      </body>
    </html>
  );
}
