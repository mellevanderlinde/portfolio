import { ArrowIcon } from "app/components/footer";
import { ReactElement } from "react";

export const metadata = {
  title: "Projects",
};

function createProject(
  title: string,
  description: string,
  repositoryUrl: string,
): ReactElement {
  return (
    <section>
      <h2 className="font-semibold text-xl mb-4 tracking-tighter">{title}</h2>
      <p className="mb-4">
        {description}
        <a
          className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
          rel="noopener noreferrer"
          target="_blank"
          href={repositoryUrl}
        >
          <ArrowIcon />
          <p className="ml-2 h-7">Repository</p>
        </a>
      </p>
    </section>
  );
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Projects</h1>

      {createProject(
        "Bedrock API",
        "AWS CDK project that deploys an API endpoint to interact with a large language model from Amazon's generative AI service.",
        "https://github.com/mellevanderlinde/bedrock-apigateway",
      )}

      {createProject(
        "CloudFront Portfolio",
        "AWS CDK project that serves this portfolio with CloudFront. The portfolio design is a template from Vercel.",
        "https://github.com/mellevanderlinde/portfolio-cloudfront",
      )}

      {createProject(
        "Airflow on AWS",
        "AWS CDK project that deploys an MWAA environment for Airflow and an example DAG.",
        "https://github.com/mellevanderlinde/mwaa-airflow",
      )}
    </section>
  );
}
