export interface Project {
  title: string;
  description: string;
  year: number;
  url: string;
}

export const projects: Project[] = [
  {
    title: "Energy Data on AWS with Raspberry Pi",
    description:
      "Creates a service on a Raspberry Pi to store home energy usage data on DynamoDB by reading the P1 port.",
    year: 2025,
    url: "https://github.com/mellevanderlinde/energy-meter",
  },
  {
    title: "Portfolio with CloudFront and Next.js",
    description:
      "AWS CDK project that serves this Next.js portfolio with Amazon CloudFront. This portfolio design is a template by Vercel.",
    year: 2024,
    url: "https://github.com/mellevanderlinde/portfolio",
  },
  {
    title: "OpenID Connect for AWS and GitHub Actions",
    description:
      "This repository demonstrates how to allow a specific GitHub repository to invoke actions on AWS from GitHub Actions using OpenID Connect.",
    year: 2024,
    url: "https://github.com/mellevanderlinde/oidc-aws-github",
  },
  {
    title: "Contributions to AWS CDK",
    description:
      "This link shows some contributions (tiny, mostly bug fixes) to the AWS CDK repository.",
    year: 2024,
    url: "https://github.com/aws/aws-cdk/commits/main/?author=mellevanderlinde",
  },
  {
    title: "Apache Airflow on AWS",
    description:
      "AWS CDK project that deploys an MWAA environment for Apache Airflow. The repository contains a minimal DAG that invokes a Lambda function.",
    year: 2024,
    url: "https://github.com/mellevanderlinde/mwaa-airflow",
  },
  {
    title: "Bedrock API",
    description:
      "AWS CDK project that deploys an API endpoint using API Gateway. The endpoint interacts with a large language model from Amazon's generative AI service.",
    year: 2023,
    url: "https://github.com/mellevanderlinde/bedrock-apigateway",
  },
];
