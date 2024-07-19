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
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        Tech Stack
      </h1>
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
