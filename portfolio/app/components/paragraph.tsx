import { ReactElement } from "react";

export function Paragraph({ text }): ReactElement {
  return <p className="mb-4">{text}</p>;
}
