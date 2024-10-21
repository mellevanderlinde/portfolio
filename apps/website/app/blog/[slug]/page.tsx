import { notFound } from "next/navigation";
import { CustomMDX } from "app/components/mdx";
import { formatDate, getBlogPosts } from "app/lib/posts";
import { Metadata } from "next";
import { ReactNode } from "react";
import { getReadingTime } from "@repo/reading-time";

export function generateMetadata({ params }): Metadata {
  const post = getBlogPosts().find((post) => post.slug === params.slug);
  return { title: post?.metadata.title };
}

export default function Blog({ params }): ReactNode {
  const post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section>
      <h1
        className="title mb-3 font-medium text-2xl tracking-tight"
        style={{ viewTransitionName: `blog-title-${post.slug}` }}
      >
        {post.metadata.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-medium">
        <p
          className="text-sm text-neutral-600 dark:text-neutral-400"
          style={{
            viewTransitionName: `blog-date-${post.metadata.publishedAt}`,
          }}
        >
          {formatDate(post.metadata.publishedAt)} •{" "}
          {getReadingTime(post.content)} minute read
        </p>
      </div>
      <article className="prose prose-quoteless prose-neutral dark:prose-invert">
        <CustomMDX source={post.content} />
      </article>
    </section>
  );
}

export function generateStaticParams(): { slug: string }[] {
  return getBlogPosts().map((post) => ({ slug: post.slug }));
}
