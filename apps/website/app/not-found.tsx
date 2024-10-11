import { ReactNode } from "react";
import { Metadata } from "next";
import { Header1 } from "./components/header";

const title = "404 - Page not found";

export const metadata: Metadata = {
  title,
};

export default function NotFound(): ReactNode {
  return (
    <section>
      <Header1 title={title} />
      <p className="mb-4">The page you are looking for does not exist.</p>
    </section>
  );
}
