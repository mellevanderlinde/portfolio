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
        "OpenID Connect for AWS and GitHub Actions",
        "https://github.com/mellevanderlinde/oidc-aws-github",
        <section>
          <p className="prose prose-neutral dark:prose-invert">
            {`This repository demonstrates how to allow a specific GitHub repository 
            to invoke actions on AWS from GitHub Actions using `}
            <a href="https://openid.net/developers/how-connect-works">
              OpenID Connect
            </a>
            {`.`}
          </p>
        </section>,
      )}
      <HorizontalLine />
      {ProjectItem(
        "Contributions to AWS CDK",
        "https://github.com/aws/aws-cdk/commits/main/?author=mellevanderlinde",
        <section>
          <p className="prose prose-neutral dark:prose-invert">
            {`This link shows some contributions (tiny, mostly bug fixes) to the `}
            <a href="https://docs.aws.amazon.com/cdk/v2/guide/home.html">
              AWS CDK
            </a>
            {` repository.`}
          </p>
        </section>,
      )}
      <HorizontalLine />
      {ProjectItem(
        "Bedrock API",
        "https://github.com/mellevanderlinde/bedrock-apigateway",
        <section>
          <p className="prose prose-neutral dark:prose-invert">
            {`AWS CDK project that deploys an API endpoint using API Gateway. 
            The endpoint interacts with a large language model from `}
            <a href="https://aws.amazon.com/bedrock/">
              {`Amazon's generative AI service`}
            </a>
            {`.`}
          </p>
        </section>,
      )}
      <HorizontalLine />
      {ProjectItem(
        "Apache Airflow on AWS",
        "https://github.com/mellevanderlinde/mwaa-airflow",
        <section>
          <p className="prose prose-neutral dark:prose-invert">
            {`AWS CDK project that deploys an MWAA environment for `}
            <a href="https://airflow.apache.org">Apache Airflow</a>
            {`. The repository contains a minimal DAG that invokes a Lambda function.`}
          </p>
        </section>,
      )}
    </section>
  );
}
