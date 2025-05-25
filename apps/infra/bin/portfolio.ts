import {
  App,
  Aspects,
} from 'aws-cdk-lib'
import { AwsSolutionsChecks } from 'cdk-nag'
import { RemovalPolicyDestroyAspect } from '../lib/aspects'
import { PortfolioStack } from '../lib/portfolio-stack'
import 'source-map-support/register'

const app = new App()

new PortfolioStack(app, 'PortfolioStack', {
  env: {
    account: app.node.getContext('accountId'), // Required because of HostedZone lookup
    region: 'us-east-1', // Required, see https://docs.aws.amazon.com/acm/latest/userguide/acm-regions.html
  },
})

Aspects.of(app).add(new RemovalPolicyDestroyAspect())
Aspects.of(app).add(new AwsSolutionsChecks())
