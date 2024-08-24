import Link from "next/link";
import { Header1 } from "app/components/header";
import { Metadata } from "next";
import { ReactElement } from "react";
import { getBlogPosts } from "./utils";

export const metadata: Metadata = {
  title: "Blog",
};

export default function BlogPage(): ReactElement {
  const blogPosts = getBlogPosts();

  return (
    <section>
      <Header1 text="my blog" />
      {blogPosts
        .sort((a, b) =>
          new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
            ? -1
            : 1,
        )
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col">
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {post.metadata.title}
              </p>
            </div>
          </Link>
        ))}
    </section>
  );
}
