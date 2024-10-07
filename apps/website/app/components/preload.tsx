"use client";

import ReactDOM from "react-dom";
import { ReactNode } from "react";

export function PreloadResources(): ReactNode {
  ReactDOM.preload("sprite.svg", { as: "image" });
  return null;
}
