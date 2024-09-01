import { ReactElement } from "react";

export function Header1({ title }): ReactElement {
  return (
    <h1 className="mb-8 text-2xl font-semibold tracking-tighter">{title}</h1>
  );
}

export function Header2({ title }): ReactElement {
  return <h2 className="mb-4 text-xl font-medium tracking-tighter">{title}</h2>;
}
