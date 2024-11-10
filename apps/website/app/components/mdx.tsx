import Link from "next/link";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import { ReactNode, createElement } from "react";
import hljs from "highlight.js/lib/core";
import typescript from "highlight.js/lib/languages/typescript";
import yaml from "highlight.js/lib/languages/yaml";

hljs.registerLanguage("typescript", typescript);
hljs.registerLanguage("yaml", yaml);

function CustomLink(props: { href: string; children: ReactNode }): ReactNode {
  const href = props.href;
  if (href.startsWith("/")) {
    return <Link {...props}>{props.children}</Link>;
  }
  if (href.startsWith("#")) {
    return <a {...props} />;
  }
  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}

function Code({ children, ...props }): ReactNode {
  const language = props.className?.replace("language-", "") || "yaml";
  const __html = hljs.highlight(children, { language }).value;
  return <code dangerouslySetInnerHTML={{ __html }} {...props} />;
}

function Callout(props): ReactNode {
  return (
    <div className="px-4 py-3 rounded p-1 text-sm flex items-center text-neutral-900 dark:text-neutral-100 mb-8 bg-white dark:bg-black text-black border border-neutral-200 dark:border-[#2e2e2e]">
      <div className="flex items-center w-4 mr-4">{props.emoji}</div>
      <div className="w-full callout leading-relaxed">{props.children}</div>
    </div>
  );
}

function slugify(str: string): string {
  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/&/g, "-and-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");
}

function createHeading(level: number) {
  const Heading = ({ children }) => {
    const slug = slugify(children);
    return createElement(
      `h${level}`,
      { id: slug },
      [
        createElement("a", {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: "anchor",
        }),
      ],
      children,
    );
  };
  Heading.displayName = `Heading${level}`;
  return Heading;
}

const components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  a: CustomLink,
  code: Code,
  Callout,
};

export function CustomMDX(props: MDXRemoteProps): ReactNode {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
