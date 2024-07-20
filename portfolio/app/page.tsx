import { Header1 } from "./components/headers";
import { Paragraph } from "./components/paragraph";
import { ReactElement } from "react";

export default function Page(): ReactElement {
  return (
    <section>
      <Header1 title="Melle van der Linde" />
      <Paragraph
        text="I have an interest in cloud engineering, machine learning, technology 
        and sustainability. After completing my Master's in Behavioural Data 
        Science, I joined PostNL as MLOps Engineer, where I now work as Cloud Engineer."
      />
    </section>
  );
}
