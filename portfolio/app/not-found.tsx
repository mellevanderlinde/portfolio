import { H1 } from "./components/header";
import { ReactElement } from "react";

export default function NotFound(): ReactElement {
  return (
    <section>
      <H1 title="404 - Page Not Found" />
      <p className="mb-4">The page you are looking for does not exist.</p>
    </section>
  );
}
