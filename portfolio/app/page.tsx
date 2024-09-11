import { PreloadResources } from "app/preload";
import { Header1 } from "./components/header";
import { ReactElement } from "react";
import { Link } from "next-view-transitions";
import { Paragraph } from "./components/paragraph";
import { BlogPosts } from "./components/posts";

export default function Page(): ReactElement {
  return (
    <section>
      <PreloadResources />
      <Header1 title="My Portfolio" />
      <Paragraph
        content={
          <>
            {`I have an interest in cloud engineering, machine learning, technology 
            and sustainability. After completing my Master's in Behavioural Data Science, 
            I joined PostNL as MLOps Engineer, where I now `}
            <Link href="/work">work</Link>
            {` as Cloud Engineer.`}
          </>
        }
      />
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
