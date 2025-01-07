import { Header1 } from "@components/header";
import type { ReactNode } from "react";

export default function Page(): ReactNode {
  return (
    <section>
      <Header1 title="My Portfolio" />
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I have an interest in cloud engineering, machine learning, technology
          and sustainability. After completing my Master's in Behavioural Data
          Science, I joined PostNL as MLOps Engineer, where I now work as Cloud
          Engineer.
        </p>
      </div>
    </section>
  );
}
