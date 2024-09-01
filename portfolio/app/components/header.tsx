import { ReactElement } from "react";

export function Header1({ text }): ReactElement {
  return (
    <h1 className="mb-8 text-2xl font-semibold tracking-tighter">{text}</h1>
  );
}

export function Header2({ text }): ReactElement {
  return <h2 className="mb-4 text-xl font-medium tracking-tighter">{text}</h2>;
}
