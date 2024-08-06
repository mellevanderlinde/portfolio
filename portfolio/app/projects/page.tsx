import type { Metadata } from "next";
import { Header1, Header2 } from "app/components/header";
import { ReactElement } from "react";
import { Paragraph } from "app/components/paragraph";
import { HorizontalLine } from "app/components/line";
import { Badge } from "app/components/bagde";

export const metadata: Metadata = {
  title: "Projects",
};

function ProjectItem(
  title: string,
  description: string,
  url: string,
): ReactElement {
  return (
    <div>
      <Header2 text={title} />
      <Paragraph text={description} />
      <Badge href={url}>
        <svg width="13" height="11" role="img" className="mr-1 inline-flex">
          <use href="/sprite.svg#github" />
        </svg>
        Repository
      </Badge>
    </div>
  );
}

export default function ProjectsPage(): ReactElement {
  return (
    <section>
      <Header1 text="my projects" />
      {ProjectItem(
        "Bedrock API",
        "AWS CDK project that deploys an API endpoint to interact with a large language model from Amazon's generative AI service.",
        "https://github.com/mellevanderlinde/bedrock-apigateway",
      )}
      <HorizontalLine />
      {ProjectItem(
        "CloudFront Portfolio",
        "AWS CDK project that serves this portfolio with CloudFront. The portfolio design is a template from Vercel.",
        "https://github.com/mellevanderlinde/portfolio-cloudfront",
      )}
      <HorizontalLine />
      {ProjectItem(
        "Airflow on AWS",
        "AWS CDK project that deploys an MWAA environment for Airflow and an example DAG.",
        "https://github.com/mellevanderlinde/mwaa-airflow",
      )}
    </section>
  );
}
