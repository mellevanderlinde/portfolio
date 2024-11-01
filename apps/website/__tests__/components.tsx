import { render } from "@testing-library/react";
import Footer from "@repo/website/app/components/footer";
import { Header1 } from "@repo/website/app/components/header";
import { Navbar } from "@repo/website/app/components/nav";
import robots from "@repo/website/app/robots";
import sitemap from "@repo/website/app/sitemap";
import { getBlogPosts } from "@repo/website/app/lib/posts";

test("Match footer", () => {
  const { container } = render(<Footer />);
  expect(container).toMatchSnapshot();
});

test("Match header", () => {
  const { container } = render(<Header1 title="Test" />);
  expect(container).toMatchSnapshot();
});

test("Match navbar", () => {
  const { container } = render(<Navbar />);
  expect(container).toMatchSnapshot();
});

test("Match posts", () => {
  const result = getBlogPosts();
  expect(result).toMatchSnapshot();
});

test("Match robots", () => {
  const result = robots();
  expect(result).toMatchSnapshot();
});

test("Match sitemap", () => {
  const result = sitemap();
  expect(result).toMatchSnapshot();
});
