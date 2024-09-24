import { notFound } from "next/navigation";
import { CustomMDX } from "components/mdx";
import { formatDate, getBlogPosts } from "app/blog/utils";
import { Metadata } from "next";
import { ReactNode } from "react";

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
      <h1 className="title font-semibold text-2xl tracking-tighter">
        {post.metadata.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(post.metadata.publishedAt)}
        </p>
      </div>
      <article className="prose">
        <CustomMDX source={post.content} />
      </article>
    </section>
  );
}

export function generateStaticParams(): { slug: string }[] {
  return getBlogPosts().map((post) => ({ slug: post.slug }));
}
