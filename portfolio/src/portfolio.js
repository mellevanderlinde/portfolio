const header = {
  homepage: 'https://mellevanderlinde.com',
  title: 'ML',
}

const about = {
  name: 'Melle',
  role: 'Cloud Engineer @ PostNL',
  description:
    'I have an interest in cloud engineering, machine learning, technology and sustainability. Since 2021 I have been working at PostNL.',
  // resume: 'https://example.com',
  social: {
    linkedin: 'https://linkedin.com/in/mellevdlinde',
    github: 'https://github.com/mellevanderlinde',
  },
}

const projects = [
  {
    name: 'Bedrock API',
    description:
      "AWS CDK project that deploys an API endpoint to interact with a large language model from Amazon's generative AI service.",
    stack: ['AWS', 'TypeScript'],
    sourceCode: 'https://github.com/mellevanderlinde/bedrock-apigateway',
  },
  {
    name: 'CloudFront Portfolio',
    description:
      'AWS CDK project that serves this portfolio with CloudFront. The portfolio design is a React template made by Raj Shekhar.',
    stack: ['AWS', 'TypeScript'],
    sourceCode: 'https://github.com/mellevanderlinde/portfolio-cloudfront',
  },
  {
    name: 'Airflow on AWS',
    description:
      'AWS CDK project that deploys an MWAA environment for Airflow and an example DAG.',
    stack: ['AWS', 'TypeScript', 'Python'],
    sourceCode: 'https://github.com/mellevanderlinde/mwaa-airflow',
  },
]

const skills = [
  'AWS',
  'IaC',
  'TypeScript',
  'Python',
  'Docker',
  'Airflow',
  'GitHub Actions',
  'ML',
  
]

const contact = {
  // email: 'email@example.com',
}

export { header, about, projects, skills, contact }
