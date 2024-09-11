import { Link } from "next-view-transitions";
import { MDXRemote } from "next-mdx-remote/rsc";
import React, { ReactElement } from "react";
import hljs from "highlight.js/lib/core";
import typescript from "highlight.js/lib/languages/typescript";
import yaml from "highlight.js/lib/languages/yaml";

hljs.registerLanguage("typescript", typescript);
hljs.registerLanguage("yaml", yaml);

function CustomLink(props): ReactElement {
  const href = props.href;
  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }
  if (href.startsWith("#")) {
    return <a {...props} />;
  }
  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}

function Code({ children, ...props }): ReactElement {
  const language = props.className?.replace("language-", "") || "yaml";
  const __html = hljs.highlight(children, { language }).value;
  return <code dangerouslySetInnerHTML={{ __html }} {...props} />;
}

function slugify(str: string): string {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w-]+/g, "") // Remove all non-word characters except for -
    .replace(/--+/g, "-"); // Replace multiple - with single -
}

function createHeading(level: number) {
  const Heading = ({ children }) => {
    const slug = slugify(children);
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement("a", {
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
};

export function CustomMDX(props): ReactElement {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
