import { ReactNode } from "react";

export function Header1({ title }): ReactNode {
  return (
    <h1 className="mb-8 text-2xl font-semibold tracking-tighter">{title}</h1>
  );
}

export function Header2({ title }): ReactNode {
  return <h2 className="mb-1 text-xl font-medium tracking-tighter">{title}</h2>;
}
