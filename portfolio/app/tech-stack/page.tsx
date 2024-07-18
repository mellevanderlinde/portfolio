export const metadata = {
  title: "Tech Stack",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        Tech Stack
      </h1>
      <ul className="list-disc ml-6">
        <li>AWS</li>
        <li>TypeScript</li>
        <li>Python</li>
        <li>Docker</li>
        <li>Apache Airflow</li>
        <li>GitHub Actions</li>
      </ul>
    </section>
  );
}
