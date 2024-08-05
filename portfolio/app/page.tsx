import Link from "next/link";
import { PreloadResources } from "app/preload";
import { Header1 } from "./components/header";
import { Paragraph } from "./components/paragraph";
import { ReactElement } from "react";

function Badge(props): ReactElement {
  return (
    <a
      {...props}
      target="_blank"
      className="inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
    />
  );
}

function ArrowIcon(): ReactElement {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

function FooterItem(name: string, url: string): ReactElement {
  return (
    <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href={url}
          >
            <ArrowIcon />
            <p className="ml-2 h-7">{name}</p>
          </a>
        </li>
  )
}

export default function Page(): ReactElement {
  return (
    <section>
      <PreloadResources />
      <Header1 text="hey, I'm melle 👋" />
      <p className="prose prose-neutral dark:prose-invert">
        {`I have an interest in cloud engineering, machine learning, technology 
        and sustainability. After completing my Master's in Behavioural Data 
        Science, I joined `}
        <span className="not-prose">
          <Badge href="https://postnl.nl">
            <svg width="13" height="11" role="img" className="mr-1 inline-flex">
              <use href="/sprite.svg#postnl" />
            </svg>
            PostNL
          </Badge>
        </span>
        {` as MLOps Engineer, where I now `}
        <Link href="/work">work</Link>
        {` as Cloud Engineer.`}
      </p>
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        {FooterItem("github", "https://github.com/mellevanderlinde")}
        {FooterItem("linkedin", "https://linkedin.com/in/mellevdlinde")}
        {FooterItem("source", "https://github.com/mellevanderlinde/portfolio-cloudfront")}
      </ul>
    </section>
  );
}
