import { Link } from "next-view-transitions";
import { formatDate, getBlogPosts } from "app/blog/utils";
import { ReactElement } from "react";

export function BlogPosts(): ReactElement {
  const blogPosts = getBlogPosts();

  return (
    <div>
      {blogPosts
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p
                className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums"
                style={{ viewTransitionName: `post-date-${post.slug}` }}
              >
                {formatDate(post.metadata.publishedAt)}
              </p>
              <p
                className="text-neutral-900 dark:text-neutral-100 tracking-tight"
                style={{ viewTransitionName: `post-title-${post.slug}` }}
              >
                {post.metadata.title}
              </p>
            </div>
          </Link>
        ))}
    </div>
  );
}
