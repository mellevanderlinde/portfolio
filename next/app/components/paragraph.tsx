import { ReactElement } from "react";

export function Paragraph({ content }): ReactElement {
  return (
    <p className="mb-2 prose prose-neutral dark:prose-invert">{content}</p>
  );
}
