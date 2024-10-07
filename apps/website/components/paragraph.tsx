import { ReactNode } from "react";

export function Paragraph({ content }): ReactNode {
  return (
    <p className="mb-2 prose prose-neutral dark:prose-invert">{content}</p>
  );
}
