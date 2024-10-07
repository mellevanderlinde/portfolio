import { Paragraph } from "./components/paragraph";
import { Header1 } from "./components/header";
import { ReactNode } from "react";
import { Metadata } from "next";

const title = "404 - Page not found";

export const metadata: Metadata = {
  title,
};

export default function NotFound(): ReactNode {
  return (
    <section>
      <Header1 title={title} />
      <Paragraph content="The page you are looking for does not exist." />
    </section>
  );
}
