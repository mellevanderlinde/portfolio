import "../styles/global.css";
import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import { Navbar } from "../components/nav";
import { ReactNode } from "react";
import Footer from "../components/footer";
import { baseUrl } from "./sitemap";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Melle van der Linde",
    template: "%s | Melle van der Linde",
  },
};

export default function RootLayout(props: { children: ReactNode }): ReactNode {
  return (
    <ViewTransitions>
      <html
        lang="en"
        className="text-black bg-white dark:text-white dark:bg-[#111010]"
      >
        <body className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
          <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
            <Navbar />
            {props.children}
            <Footer />
          </main>
        </body>
      </html>
    </ViewTransitions>
  );
}
