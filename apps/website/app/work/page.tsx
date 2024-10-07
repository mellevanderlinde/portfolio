import type { Metadata } from "next";
import { Header1 } from "../components/header";
import { HorizontalLine } from "../components/line";
import { ReactNode } from "react";
import { Paragraph } from "../components/paragraph";
import { Link } from "next-view-transitions";

export const metadata: Metadata = {
  title: "Work",
};

function WorkItem(
  company: string,
  title: string,
  content: ReactNode,
): ReactNode {
  return (
    <div>
      <h2 className="text-xl font-medium tracking-tighter">{company}</h2>
      <div className="flex justify-between items-center mt-1 mb-4 text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {title}
        </p>
      </div>
      {content}
    </div>
  );
}

export default function Page(): ReactNode {
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
                  <Link href="https://docs.github.com/en/actions/security-for-github-actions/security-hardening-your-deployments/configuring-openid-connect-in-amazon-web-services">
                    AWS
                  </Link>
                  {" and "}
                  <Link href="https://jfrog.com/help/r/jfrog-platform-administration-documentation/openid-connect-integration">
                    JFrog
                  </Link>
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
          "MLOps Engineer, 2021 — 2023",
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
