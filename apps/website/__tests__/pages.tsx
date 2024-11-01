import { render } from "@testing-library/react";
import Home from "@repo/website/app/page";
import Projects from "@repo/website/app/projects/page";
import Work from "@repo/website/app/work/page";
import Blog from "@repo/website/app/blog/page";
import NotFound from "@repo/website/app/not-found";

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
