import { ReactElement } from "react";

export function Header1({ text }): ReactElement {
  return <h1 className="font-medium text-2xl mb-8 tracking-tighter">{text}</h1>;
}
