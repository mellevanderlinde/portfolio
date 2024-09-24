"use client";

import ReactDOM from "react-dom";

export function PreloadResources(): null {
  ReactDOM.preload("sprite.svg", { as: "image" });
  return null;
}
