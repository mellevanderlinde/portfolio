import { H1 } from "./components/header";
import { ReactElement } from "react";

export default function Page(): ReactElement {
  return (
    <section>
      <H1 title="Melle van der Linde" />
      <p className="mb-4">
        {`I have an interest in cloud engineering, machine learning, technology 
        and sustainability. After completing my Master's in Behavioural Data 
        Science, I joined PostNL as MLOps Engineer, where I now work as Cloud Engineer.`}
      </p>
    </section>
  );
}
