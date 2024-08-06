import type { Metadata } from "next";
import { Header1, Header2 } from "app/components/header";
import { ReactElement } from "react";
import { HorizontalLine } from "app/components/line";
import { Badge } from "app/components/bagde";

export const metadata: Metadata = {
  title: "Projects",
};

function ProjectItem(
  title: string,
  url: string,
  content: ReactElement,
): ReactElement {
  return (
    <div>
      <Header2 text={title} />
      {content}
      <p className="mb-2" />
      <Badge href={url}>
        <svg width="13" height="11" role="img" className="mr-1 inline-flex">
          <use href="/sprite.svg#github" />
        </svg>
        GitHub
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
        "https://github.com/mellevanderlinde/bedrock-apigateway",
        <section>
          <p className="prose prose-neutral dark:prose-invert">
            {`AWS CDK project that deploys an API endpoint to interact with a 
            large language model from Amazon's generative AI service.`}
          </p>
        </section>,
      )}
      <HorizontalLine />
      {ProjectItem(
        "CloudFront Portfolio",
        "https://github.com/mellevanderlinde/portfolio-cloudfront",
        <section>
          <p className="prose prose-neutral dark:prose-invert">
            {`AWS CDK project that serves this portfolio with Amazon CloudFront. 
            This portfolio design is a `}
            <a href="https://github.com/leerob/leerob.io">
              template by Lee Robinson
            </a>
            {`.`}
          </p>
        </section>,
      )}
      <HorizontalLine />
      {ProjectItem(
        "Airflow on AWS",
        "https://github.com/mellevanderlinde/mwaa-airflow",
        <section>
          <p className="prose prose-neutral dark:prose-invert">
            {`AWS CDK project that deploys an MWAA environment for Airflow. 
            The repository contains a minimal DAG that invokes a Lambda function.`}
          </p>
        </section>,
      )}
    </section>
  );
}
