import type { Metadata } from "next";
import Link from "next/link";
import { Header1 } from "app/components/header";
import { Paragraph } from "app/components/paragraph";
import { HorizontalLine } from "app/components/line";
import { ReactElement } from "react";

export const metadata: Metadata = {
  title: "Work",
};

function WorkSection(
  company: string,
  title: string,
  content: ReactElement,
): ReactElement {
  return (
    <div>
      <h2 className="font-medium text-xl mb-1 tracking-tighter">{company}</h2>
      <p className="text-neutral-600 dark:text-neutral-400 text-sm">{title}</p>
      {content}
    </div>
  );
}

export default function WorkPage(): ReactElement {
  return (
    <section>
      <Header1 text="my work" />
      <div className="prose prose-neutral dark:prose-invert">
        <Paragraph text="Here's a brief summary of my work so far." />
        <HorizontalLine />

        {WorkSection(
          "PostNL",
          "Cloud Engineer",
          <section>
            <p>
              I joined <a href="https://vercel.com/home">Vercel</a> early to
              grow <a href="https://nextjs.org">Next.js</a> and our developer
              community. I built our Developer Relations team to teach our
              community about our products.
            </p>
            <ul>
              <li>
                In 2021, I was promoted to Director of DevRel. We{" "}
                <a href="https://twitter.com/kelseyhightower/status/1105985400110112768">
                  translated customer pain
                </a>{" "}
                back into the product roadmap. We spoke at{" "}
                <Link href="/blog/nextjs-conf-2022-recap">conferences</Link>,
                wrote blog posts, and created videos. We built open-source
                examples and contributed back to the product.
              </li>
              <li>
                In 2022, I was promoted to VP of Developer Experience, now also
                leading our product documentation team. My team created a{" "}
                <a href="https://nextjs.org/learn">new free course</a> to teach
                Next.js, which had 17 million page views that year.{" "}
                <a href="https://twitter.com/leeerob/status/1608900031859527682">
                  I shipped.
                </a>{" "}
                I partnered with our open-source community, collaborating with
                frameworks like{" "}
                <a href="https://vercel.com/docs/frameworks/nuxt">Nuxt</a> and{" "}
                <a href="https://astro.build/blog/vercel-official-hosting-partner/">
                  Astro
                </a>{" "}
                and sponsoring individuals and projects.
              </li>
              <li>
                In 2023, I was promoted to VP of Product, now also leading
                Product Management.
              </li>
            </ul>
            <p>
              Since I joined Vercel in 2020, Next.js active developers have
              grown 1000%, now at ~900k. Next.js is now a top 10 software
              project on GitHub with.
            </p>
          </section>,
        )}

        <HorizontalLine />

        {WorkSection(
          "PostNL",
          "MLOps Engineer, 2021 — 2023",
          <p>
            Hy-Vee, an almost 100-year-old grocery chain in the United States,
            wanted to build a new version of their digital storefront. I joined
            a team of{" "}
            <Link href="/blog/product-engineers">product engineers</Link>{" "}
            working across web and mobile to rebuild their legacy .NET
            application (~500k MAU) with React and React Native.
          </p>,
        )}
      </div>
    </section>
  );
}
