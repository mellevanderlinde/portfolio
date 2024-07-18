import { ArrowIcon } from "app/components/footer";

export const metadata = {
  title: "Projects",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Projects</h1>

      <h2 className="font-semibold text-xl mb-4 tracking-tighter">
        Bedrock API
      </h2>
      <p className="mb-4">
        {`AWS CDK project that deploys an API endpoint to interact with a large
        language model from Amazon's generative AI service.`}
        <a
          className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/mellevanderlinde/bedrock-apigateway"
        >
          <ArrowIcon />
          <p className="ml-2 h-7">Repository</p>
        </a>
      </p>

      <h2 className="font-semibold text-xl mb-4 tracking-tighter">
        CloudFront Portfolio
      </h2>
      <p className="mb-4">
        {`AWS CDK project that serves this portfolio with CloudFront. The portfolio design is a `}
        <a
          className="transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
          rel="noopener noreferrer"
          target="_blank"
          href="https://vercel.com/templates/next.js/portfolio-starter-kit"
        >
          template from Vercel
        </a>
        {`.`}
        <a
          className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/mellevanderlinde/portfolio-cloudfront"
        >
          <ArrowIcon />
          <p className="ml-2 h-7">Repository</p>
        </a>
      </p>

      <h2 className="font-semibold text-xl mb-4 tracking-tighter">
        Airflow on AWS
      </h2>
      <p className="mb-4">
        {`AWS CDK project that deploys an MWAA environment for Airflow and an example DAG.`}
        <a
          className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/mellevanderlinde/mwaa-airflow"
        >
          <ArrowIcon />
          <p className="ml-2 h-7">Repository</p>
        </a>
      </p>
    </section>
  );
}
