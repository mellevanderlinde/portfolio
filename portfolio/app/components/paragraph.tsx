import { ReactElement } from "react";

export function Paragraph({ text }): ReactElement {
  return <p className="prose prose-neutral dark:prose-invert">{text}</p>;
}
