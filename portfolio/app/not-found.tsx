import { Paragraph } from "./components/paragraph";
import { Header1 } from "./components/header";
import { ReactElement } from "react";

export default function NotFound(): ReactElement {
  return (
    <section>
      <Header1 text="404 - page not found" />
      <Paragraph text="The page you are looking for does not exist." />
    </section>
  );
}
