"use client";

import { ReactNode } from "react";
import ReactDOM from "react-dom";

export function PreloadResources(): ReactNode {
  ReactDOM.preload("sprite.svg", { as: "image" });
  return null;
}
