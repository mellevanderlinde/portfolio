import type { Metadata } from "next";
import { Header1 } from "app/components/header";
import { Paragraph } from "app/components/paragraph";
import { HorizontalLine } from "app/components/line";
import { ReactElement } from "react";
import { Badge } from "app/components/bagde";

export const metadata: Metadata = {
  title: "Work",
};

function WorkSection(
  company: string,
  title: string,
  content: ReactElement,
): ReactElement {
  return (
    <div>
      <h2 className="font-medium text-xl mb-1 tracking-tighter">{company}</h2>
      <p className="text-neutral-600 dark:text-neutral-400 text-sm">{title}</p>
      {content}
    </div>
  );
}

export default function WorkPage(): ReactElement {
  return (
    <section>
      <Header1 text="my work" />
      <div className="prose prose-neutral dark:prose-invert">
        <Paragraph text="Here's a brief summary of my work so far." />

        <HorizontalLine />

        {WorkSection(
          "PostNL",
          "Cloud Engineer",
          <section>
            <p>
              {`In 2023 I joined the Cloud Center of Excellence (CCoE) team. 
              My (platform) team works on the serverless cloud platform on AWS, 
              used by all engineers. The stack includes a wide variety of services 
              from AWS (e.g., IAM, CloudFormation, API Gateway, Organizations, 
              Lambda, DynamoDB).`}
            </p>
            <p>
              {`
              As an example project, I guided engineering teams to migrate their 
              GitHub Actions to use OpenID Connect (OIDC) for `}
              <Badge href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create_oidc.html">
                <svg
                  width="13"
                  height="11"
                  role="img"
                  className="mr-1 inline-flex"
                >
                  <use href="/sprite.svg#aws" />
                </svg>
                AWS
              </Badge>
              {` and `}
              <Badge href="https://jfrog.com/help/r/jfrog-platform-administration-documentation/openid-connect-integration">
                <svg
                  width="13"
                  height="11"
                  role="img"
                  className="mr-1 inline-flex"
                >
                  <use href="/sprite.svg#jfrog" />
                </svg>
                JFrog
              </Badge>
              {` integrations. This project used an internal tool I developed to 
              make OIDC integration easier for engineers.`}
            </p>
          </section>,
        )}

        <HorizontalLine />

        {WorkSection(
          "PostNL",
          "MLOps Engineer, 2021 — 2023",
          <p>
            {`In this role, my team was responsible for the deployment and 
            monitoring of data science models on AWS. The stack included
            containerization (Docker), infrastructure as code (AWS CDK), CI/CD 
            (GitHub Actions and AWS CodePipeline), orchestration (Airflow), 
            parallelization (PySpark).`}
          </p>,
        )}
      </div>
    </section>
  );
}
