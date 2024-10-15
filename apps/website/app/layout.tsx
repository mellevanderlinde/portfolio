import "./global.css";
import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "./components/nav";
import { ReactNode } from "react";
import Footer from "./components/footer";
import { baseUrl } from "./sitemap";
import { ViewTransitions } from "next-view-transitions";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Melle van der Linde",
    template: "%s | Melle van der Linde",
  },
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout(props: { children: ReactNode }): ReactNode {
  return (
    <ViewTransitions>
      <html lang="en" className={cx(GeistSans.variable, GeistMono.variable)}>
        <body className="antialiased flex flex-col items-center justify-center mx-auto mt-2 lg:mt-8 mb-20 lg:mb-40">
          <main className="flex-auto min-w-0 mt-2 md:mt-6 flex flex-col px-6 sm:px-4 md:px-0 max-w-[640px] w-full">
            <Navbar />
            {props.children}
            <Footer />
          </main>
        </body>
        <GoogleAnalytics gaId="G-4BPVNPLM1Q" />
      </html>
    </ViewTransitions>
  );
}
