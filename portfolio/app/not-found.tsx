import { Header1 } from "./components/headers";
import { Paragraph } from "./components/paragraph";
import { ReactElement } from "react";

export default function NotFound(): ReactElement {
  return (
    <section>
      <Header1 title="404 - Page Not Found" />
      <Paragraph text="The page you are looking for does not exist." />
    </section>
  );
}
