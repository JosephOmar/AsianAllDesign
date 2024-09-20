import SessionAuthProvider from "@/context/SessionAuthProvider";
import NavbarMain from "@/components/NavbarMain";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './globals.css'
import ChangeTheme from "@/components/ChangeTheme";
import Script from "next/script";
import FooterMain from "@/components/FooterMain";
import CarouselMain from "@/components/Carousel";
import { ViewTransitions } from "next-view-transitions";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Asian All Designs",
  description: "Diseños K-pop,Animes y lo mejor de la cultura asiatica",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className={inter.className}>
          {/* <SessionAuthProvider> */}
            <NavbarMain/>
            <main className="bg-gray-200">
            <CarouselMain />
              {children}
            {/* <ChangeTheme /> */}
            </main>
            <FooterMain />
          {/* </SessionAuthProvider> */}
        </body>
      </html>
    </ViewTransitions>
  );
}
