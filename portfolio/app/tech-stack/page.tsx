import { Header1 } from "app/components/headers";
import { ReactElement } from "react";

export const metadata = {
  title: "Tech Stack",
};

function createItemList(items: string[]): ReactElement {
  return (
    <ul className="list-disc ml-6">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function Page(): ReactElement {
  return (
    <section>
      <Header1 title="Tech Stack" />
      {createItemList([
        "AWS",
        "TypeScript",
        "Python",
        "Docker",
        "Apache Airflow",
        "GitHub Actions",
      ])}
    </section>
  );
}
