import { Badge } from "../components/bagde";
import { Header1, Header2 } from "../components/header";
import { HorizontalLine } from "../components/line";
import { Link } from "next-view-transitions";
import type { Metadata } from "next";
import { Paragraph } from "../components/paragraph";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Projects",
};

function ProjectItem(
  title: string,
  url: string,
  content: ReactNode,
): ReactNode {
  return (
    <div>
      <Header2 title={title} />
      {content}
      <Badge href={url}>
        <svg width="13" height="11" role="img" className="mr-1 inline-flex">
          <use href="/sprite.svg#github" />
        </svg>
        GitHub
      </Badge>
    </div>
  );
}

export default function Page(): ReactNode {
  return (
    <section>
      <Header1 title="Projects" />
      {ProjectItem(
        "OpenID Connect for AWS and GitHub Actions",
        "https://github.com/mellevanderlinde/oidc-aws-github",
        <Paragraph
          content={
            <>
              {`This repository demonstrates how to allow a specific GitHub repository 
              to invoke actions on AWS from GitHub Actions using `}
              <Link href="https://openid.net/developers/how-connect-works">
                OpenID Connect
              </Link>
              {"."}
            </>
          }
        />,
      )}
      <HorizontalLine />
      {ProjectItem(
        "Contributions to AWS CDK",
        "https://github.com/aws/aws-cdk/commits/main/?author=mellevanderlinde",
        <Paragraph
          content={
            <>
              {
                "This link shows some contributions (tiny, mostly bug fixes) to the "
              }
              <Link href="https://docs.aws.amazon.com/cdk/v2/guide/home.html">
                AWS CDK
              </Link>
              {" repository."}
            </>
          }
        />,
      )}
      <HorizontalLine />
      {ProjectItem(
        "Portfolio with CloudFront and Next.js",
        "https://github.com/mellevanderlinde/portfolio",
        <Paragraph
          content={
            <>
              {`AWS CDK project that serves this Next.js portfolio with Amazon CloudFront. 
                This portfolio design is a `}
              <Link href="https://vercel.com/templates/next.js/portfolio-starter-kit">
                template by Vercel
              </Link>
              {"."}
            </>
          }
        />,
      )}
      <HorizontalLine />
      {ProjectItem(
        "Bedrock API",
        "https://github.com/mellevanderlinde/bedrock-apigateway",
        <Paragraph
          content={
            <>
              {`AWS CDK project that deploys an API endpoint using API Gateway. 
              The endpoint interacts with a large language model from `}
              <Link href="https://aws.amazon.com/bedrock/">
                {"Amazon's generative AI service"}
              </Link>
              {"."}
            </>
          }
        />,
      )}
      <HorizontalLine />
      {ProjectItem(
        "Apache Airflow on AWS",
        "https://github.com/mellevanderlinde/mwaa-airflow",
        <Paragraph
          content={
            <>
              {"AWS CDK project that deploys an MWAA environment for "}
              <Link href="https://airflow.apache.org">Apache Airflow</Link>
              {
                ". The repository contains a minimal DAG that invokes a Lambda function."
              }
            </>
          }
        />,
      )}
    </section>
  );
}
