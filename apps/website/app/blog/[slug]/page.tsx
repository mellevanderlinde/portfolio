import { CustomMDX } from "app/components/mdx";
import { formatDate, getBlogPosts } from "app/lib/posts";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { getReadingTime } from "reading-time";

export async function generateMetadata({ params }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPosts().find((post) => post.slug === slug);
  return { title: post?.metadata.title };
}

export default async function Page({ params }): Promise<ReactNode> {
  const { slug } = await params;
  const post = getBlogPosts().find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <section>
      <h1 className="title mb-3 font-medium text-2xl tracking-tight">
        {post.metadata.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-medium">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(post.metadata.publishedAt)} •{" "}
          {getReadingTime(post.content)}-minute read
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
