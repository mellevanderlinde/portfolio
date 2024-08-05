import type { Metadata } from "next";
import { Header1 } from "app/components/header";
import { ReactElement } from "react";

export const metadata: Metadata = {
  title: "Projects",
};

export default function WorkPage(): ReactElement {
  return (
    <section>
      <Header1 text="my projects" />
    </section>
  );
}

// TODO
// {createProject(
//     "Bedrock API",
//     "AWS CDK project that deploys an API endpoint to interact with a large language model from Amazon's generative AI service.",
//     "https://github.com/mellevanderlinde/bedrock-apigateway",
//   )}

//   {createProject(
//     "CloudFront Portfolio",
//     "AWS CDK project that serves this portfolio with CloudFront. The portfolio design is a template from Vercel.",
//     "https://github.com/mellevanderlinde/portfolio-cloudfront",
//   )}

//   {createProject(
//     "Airflow on AWS",
//     "AWS CDK project that deploys an MWAA environment for Airflow and an example DAG.",
//     "https://github.com/mellevanderlinde/mwaa-airflow",
//   )}
