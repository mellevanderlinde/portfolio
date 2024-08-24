import { ReactElement, Suspense } from "react";
import { notFound } from "next/navigation";
import { CustomMDX } from "app/components/mdx";
import { getBlogPosts } from "app/blog/utils";
import { Metadata } from "next";

export function generateMetadata({ params }): Metadata {
  const post = getBlogPosts().find((post) => post.slug === params.slug);
  return { title: post!.metadata.title };
}

function formatDate(date: string): string {
  return new Date(date).toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function Blog({ params }): ReactElement {
  const post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section>
      <h1 className="title font-medium text-2xl tracking-tighter max-w-[650px]">
        {post.metadata.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
        <Suspense fallback={<p className="h-5" />}>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {formatDate(post.metadata.publishedAt)}
          </p>
        </Suspense>
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
