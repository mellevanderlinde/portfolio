import { H1 } from "./components/header";
import { P } from "./components/paragraph";
import { ReactElement } from "react";

export default function NotFound(): ReactElement {
  return (
    <section>
      <H1 title="404 - Page Not Found" />
      <P text="The page you are looking for does not exist." />
    </section>
  );
}
