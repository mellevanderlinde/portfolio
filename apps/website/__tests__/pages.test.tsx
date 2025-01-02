import { test, expect } from "vitest";
import { render } from "@testing-library/react";
import Home from "@app/page";
import Projects from "@app/projects/page";
import Work from "@app/work/page";
import Blog from "@app/blog/page";
import NotFound from "@app/not-found";

test("Match home", () => {
  const { container } = render(<Home />);
  expect(container).toMatchSnapshot();
});

test("Match blog", () => {
  const { container } = render(<Blog />);
  expect(container).toMatchSnapshot();
});

test("Match projects", () => {
  const { container } = render(<Projects />);
  expect(container).toMatchSnapshot();
});

test("Match work", () => {
  const { container } = render(<Work />);
  expect(container).toMatchSnapshot();
});

test("Match not found", () => {
  const { container } = render(<NotFound />);
  expect(container).toMatchSnapshot();
});
