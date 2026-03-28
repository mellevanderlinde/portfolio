import type { Album, Job, Link, Post, Project } from './interfaces'

export const projects: Project[] = [
  {
    description: 'Setup for automated drift detection, budgets, garbage collection and more.',
    id: 'aws-setup',
    link: 'https://github.com/mellevanderlinde/aws-setup',
    name: 'AWS Account Setup',
  },
  {
    description:
      'Project serving this website. Website design is by ibelick.',
    id: 'portfolio',
    link: 'https://github.com/mellevanderlinde/portfolio',
    name: 'Portfolio',
  },
  {
    description:
      'Trusts a repo to invoke AWS actions from GitHub Actions using OpenID Connect.',
    id: 'oidc-aws-github',
    link: 'https://github.com/mellevanderlinde/oidc-aws-github',
    name: 'OIDC for AWS and GitHub Actions',
  },
  {
    description:
      'Shows some contributions (mostly bug fixes) to the AWS CDK project.',
    id: 'aws-cdk-contributions',
    link: 'https://github.com/aws/aws-cdk/commits/main/?author=mellevanderlinde',
    name: 'Contributions to AWS CDK',
  },
]

export const jobs: Job[] = [
  {
    company: 'PostNL',
    end: 'Present',
    id: 'cloud-engineer',
    link: 'https://postnl.nl/en',
    start: '2023',
    title: 'Cloud Engineer',
  },
  {
    company: 'PostNL',
    end: '2023',
    id: 'mlops-engineer',
    link: 'https://postnl.nl/en',
    start: '2021',
    title: 'MLOps Engineer',
  },
]

export const posts: Post[] = [
  {
    description: 'How to use CDK and GitHub Actions to deploy to AWS',
    id: 'blog-oidc',
    link: '/blog/openid-connect-aws-github',
    title: 'Connect GitHub Actions with AWS using OpenID Connect',
  },
]

export const links: Link[] = [
  {
    link: 'https://github.com/mellevanderlinde',
    name: 'GitHub',
  },
  {
    link: 'https://www.linkedin.com/in/mellevdlinde',
    name: 'LinkedIn',
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
  {
    id: 'ab67616d0000b2732c25dad9f8fd54652f7ba5df',
    name: 'Daft Punk - Discovery',
  },
  {
    id: 'ab67616d0000b2738ac778cc7d88779f74d33311',
    name: 'Daft Punk - Homework',
  },
  {
    id: 'ab67616d0000b2731216e4f7e84af70ef18146ed',
    name: 'Air - Moon Safari',
  },
  {
    id: 'ab67616d0000b273988970b40aca1d4cfb3edc3d',
    name: 'Air - Premiers Symptômes',
  },
  {
    id: 'ab67616d0000b27345e164e2e09a77ae799832d3',
    name: 'Koop - Waltz For Koop',
  },
]
