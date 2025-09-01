type HttpsLink = `https://${string}`
type BlogLink = `/blog/${string}`

interface Project {
  name: string
  description: string
  link: HttpsLink
  id: string
}

interface Job {
  company: string
  title: string
  start: string
  end: string
  link: HttpsLink
  id: string
}

interface Post {
  title: string
  description: string
  link: BlogLink
  id: string
}

interface Link {
  name: string
  link: HttpsLink
}

interface Album {
  id: string
  name: string
}

export const projects: Project[] = [
  {
    name: 'AWS Account Setup',
    description: 'Setup for automated drift detection, budgets, garbage collection and more.',
    link: 'https://github.com/mellevanderlinde/aws-setup',
    id: 'aws-setup',
  },
  {
    name: 'Portfolio',
    description:
      'Project serving this website. Website design is by ibelick.',
    link: 'https://github.com/mellevanderlinde/portfolio',
    id: 'portfolio',
  },
  {
    name: 'OIDC for AWS and GitHub Actions',
    description:
      'Trusts a repo to invoke AWS actions from GitHub Actions using OpenID Connect.',
    link: 'https://github.com/mellevanderlinde/oidc-aws-github',
    id: 'oidc-aws-github',
  },
  {
    name: 'Contributions to AWS CDK',
    description:
      'Shows some contributions (mostly bug fixes) to the AWS CDK project.',
    link: 'https://github.com/aws/aws-cdk/commits/main/?author=mellevanderlinde',
    id: 'aws-cdk-contributions',
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
    name: 'GitHub',
    link: 'https://github.com/mellevanderlinde',
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/mellevdlinde',
  },
]

export const albums: Album[] = [
  {
    id: 'ab67616d0000b273b2f893f4215f2930e7320355',
    name: 'Kaytranada - 99.9%',
  },
  {
    id: 'ab67616d0000b27395570172e1bd5b3874b50a99',
    name: 'George Benson - Living Inside Your Love',
  },
  {
    id: 'ab67616d0000b273b5e18a80757ba2f787213d21',
    name: 'Erykah Badu - Baduizm',
  },
  {
    id: 'ab67616d0000b27393d15172f9f99db10257401e',
    name: 'SIM—OJ - Cirkels',
  },
  {
    id: 'ab67616d0000b273cac9b52107643faf13a7587b',
    name: 'Olivia Dean - Messy',
  },
  {
    id: 'ab67616d0000b273487cf157c88f06f786b263f3',
    name: 'Toco - Outro Lugar',
  },
  {
    id: 'ab67616d0000b2739aa950a88e0dc1d58dcaaa2c',
    name: 'Champion - Motherboard EP',
  },
  {
    id: 'ab67616d0000b2733d5b8fe604275dfab677bd0d',
    name: 'Anderson .Paak - Ventura',
  },
  {
    id: 'ab67616d0000b273f6465d4b8cdd34ed4d7853e2',
    name: 'D\'Angelo - Brown Sugar',
  },
  {
    id: 'ab67616d0000b273fdab242b02783baa895a5a70',
    name: 'N.E.R.D. - In Search Of...',
  },
  {
    id: 'ab67616d0000b273d254ca497999ae980a5a38c5',
    name: 'Queen - Hot Space',
  },
  {
    id: 'ab67616d0000b27320e994fc0903d4a586991a2e',
    name: 'Sam Gellaitry - VF VOL II',
  },
  {
    id: 'ab67616d000082c18d4db6f2356f933e0321633f',
    name: 'Yussef Dayes - Black Classical Music',
  },
]
