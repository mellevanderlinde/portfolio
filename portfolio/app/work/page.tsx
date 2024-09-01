import type { Metadata } from "next";
import { Header1, Header2 } from "app/components/header";
import { HorizontalLine } from "app/components/line";
import { ReactElement } from "react";
import { Paragraph } from "app/components/paragraph";

export const metadata: Metadata = {
  title: "Work",
};

function WorkItem(
  company: string,
  title: string,
  content: ReactElement,
): ReactElement {
  return (
    <div>
      <Header2 title={title} />
      {content}
    </div>
  );
}

export default function Page(): ReactElement {
  return (
    <section>
      <Header1 title="Work" />
      <div>
        {WorkItem(
          "PostNL",
          "Cloud Engineer",
          <section>
            <Paragraph
              content={`In 2023 I joined the Cloud Center of Excellence (CCoE) team. 
                My (platform) team works on the serverless cloud platform on AWS, 
                used by all engineers. The stack includes a wide variety of services 
                from AWS (e.g., IAM, CloudFormation, API Gateway, Organizations, 
                Lambda, DynamoDB).`}
            />
            <Paragraph
              content={
                <>
                  {`
                  As an example project, I guided engineering teams to migrate their 
                  GitHub Actions to use OpenID Connect (OIDC) for `}
                  <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create_oidc.html">
                    AWS
                  </a>
                  {` and `}
                  <a href="https://jfrog.com/help/r/jfrog-platform-administration-documentation/openid-connect-integration">
                    JFrog
                  </a>
                  {` integrations. This project uses an internal tool I developed to 
                  make OIDC integration easier for engineers.`}
                </>
              }
            />
          </section>,
        )}
        <HorizontalLine />
        {WorkItem(
          "PostNL",
          "MLOps Engineer, PostNL (2021 — 2023)",
          <Paragraph
            content={`Responsible for the deployment and monitoring of data science
              models on AWS. The stack included containerization (Docker), 
              infrastructure as code (AWS CDK), CI/CD (GitHub Actions and AWS 
              CodePipeline), orchestration (Airflow), parallelization (PySpark).`}
          />,
        )}
      </div>
    </section>
  );
}
