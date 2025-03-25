import type { ReactNode } from "react";

export function Header1({ title }: { title: string }): ReactNode {
  return <h1 className="mb-8 text-2xl font-medium tracking-tight">{title}</h1>;
}
