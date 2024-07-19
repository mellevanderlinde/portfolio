import { ReactElement } from "react";

export function H1({ title }): ReactElement {
  return (
    <h1 className="mb-8 text-2xl font-semibold tracking-tighter">{title}</h1>
  );
}
