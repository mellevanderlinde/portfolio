import { Header1 } from "app/components/header";
import { BlogPosts } from "app/components/posts";
import { Metadata } from "next";
import { ReactElement } from "react";

export const metadata: Metadata = {
  title: "Blog",
};

export default function Page(): ReactElement {
  return (
    <section>
      <Header1 title="Blog" />
      <BlogPosts />
    </section>
  );
}
