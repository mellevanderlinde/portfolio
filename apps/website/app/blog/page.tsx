import { Header1 } from "../components/header";
import { BlogPosts } from "../components/posts";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Blog",
};

export default function Page(): ReactNode {
  return (
    <section>
      <Header1 title="Blog" />
      <BlogPosts />
    </section>
  );
}
