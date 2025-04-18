interface Project {
  name: string
  description: string
  link: string
  id: string
}

interface Job {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

interface Post {
  title: string
  description: string
  link: string
  id: string
}

interface Link {
  label: string
  link: string
}

export const projects: Project[] = [
  {
    name: 'Energy Data on AWS with Raspberry Pi',
    description:
      'Store home energy data on DynamoDB with Raspberry Pi.',
    link: 'https://github.com/mellevanderlinde/energy-meter',
    id: 'energy-meter',
  },
  {
    name: 'Portfolio with CloudFront and Next.js',
    description:
      'Project serving this website. Website design is by ibelick.',
    link: 'https://github.com/mellevanderlinde/portfolio',
    id: 'portfolio',
  },
  {
    name: 'OpenID Connect for AWS and GitHub Actions',
    description:
      'Shows how to allow a repo to run AWS actions from GitHub Actions using OIDC.',
    link: 'https://github.com/mellevanderlinde/oidc-aws-github',
    id: 'oidc-aws-github',
  },
  {
    name: 'Contributions to AWS CDK',
    description:
      'Shows some contributions (tiny, mostly bug fixes) to the AWS CDK project.',
    link: 'https://github.com/aws/aws-cdk/commits/main/?author=mellevanderlinde',
    id: 'aws-cdk-contributions',
  },
  {
    name: 'Apache Airflow on AWS',
    description:
      'Deploys MWAA environment for Apache Airflow.',
    link: 'https://github.com/mellevanderlinde/mwaa-airflow',
    id: 'mwaa-airflow',
  },
  {
    name: 'Bedrock API',
    description:
      'Interact with Bedrock through an endpoint on API Gateway.',
    link: 'https://github.com/mellevanderlinde/bedrock-apigateway',
    id: 'bedrock-apigateway',
  },
]

export const jobs: Job[] = [
  {
    company: 'PostNL',
    title: 'Cloud Engineer',
    start: '2023',
    end: 'Present',
    link: 'https://postnl.nl/en',
    id: 'cloud-engineer',
  },
  {
    company: 'PostNL',
    title: 'MLOps Engineer',
    start: '2021',
    end: '2023',
    link: 'https://postnl.nl/en',
    id: 'mlops-engineer',
  },
]

export const posts: Post[] = [
  {
    title: 'Connect GitHub Actions with AWS using OpenID Connect',
    description: 'How to use CDK and GitHub Actions to deploy to AWS',
    link: '/blog/openid-connect-aws-github',
    id: 'blog-oidc',
  },
]

export const links: Link[] = [
  {
    label: 'GitHub',
    link: 'https://github.com/mellevanderlinde',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/mellevdlinde',
  },
]
