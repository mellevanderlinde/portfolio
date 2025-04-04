export interface Job {
  company: string
  title: string
  description: string[]
  start: number
  end: number | undefined
}

export const jobs: Job[] = [
  {
    company: 'PostNL',
    title: 'Cloud Engineer',
    description: [
      `In 2023 I joined the Cloud Center of Excellence (CCoE) team. My (platform) 
      team works on the serverless cloud platform on AWS, used by all engineers. 
      The stack includes a wide variety of services from AWS (e.g., IAM, 
      CloudFormation, API Gateway, Organizations, Lambda, DynamoDB).`,
      `As an example project, I guided engineering teams to migrate their GitHub 
      Actions to use OpenID Connect (OIDC) for AWS and JFrog integrations. This 
      project uses an internal tool I developed to make OIDC integration easier for engineers.
      The new solution is more secure, easier to maintain and more cost-effective.`,
    ],
    start: 2023,
    end: undefined,
  },
  {
    company: 'PostNL',
    title: 'MLOps Engineer',
    description: [
      `Responsible for the deployment and monitoring of data science
        models on AWS. The stack included containerization (Docker), 
        infrastructure as code (AWS CDK), CI/CD (GitHub Actions and AWS 
        CodePipeline), orchestration (Airflow), parallelization (PySpark).`,
    ],
    start: 2021,
    end: 2023,
  },
]
