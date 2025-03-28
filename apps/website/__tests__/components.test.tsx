import Footer from "@app/components/footer";
import { Header1 } from "@app/components/header";
import { Navbar } from "@app/components/nav";
import { getBlogPosts } from "@app/lib/posts";
import robots from "@app/robots";
import sitemap from "@app/sitemap";
import { render } from "@testing-library/react";
import { expect, test } from "vitest";

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
  // Change to static date for snapshot
  for (const item of result) {
    item.lastModified = "2024-01-01T00:00:00.000Z";
  }
  expect(result).toMatchSnapshot();
});
