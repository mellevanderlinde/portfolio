#!/usr/bin/env node
import "source-map-support/register";
import {
  App,
  Aspects,
  CfnResource,
  type IAspect,
  RemovalPolicy,
} from "aws-cdk-lib";
import { AwsSolutionsChecks } from "cdk-nag";
import type { IConstruct } from "constructs";
import { PortfolioStack } from "../lib/portfolio-stack";

class RemovalPolicyDestroyAspect implements IAspect {
  visit(node: IConstruct): void {
    if (CfnResource.isCfnResource(node)) {
      node.applyRemovalPolicy(RemovalPolicy.DESTROY);
    }
  }
}

const app = new App();
new PortfolioStack(app, "PortfolioStack", {
  env: {
    account: app.node.getContext("accountId"), // Required because of HostedZone lookup
    region: "us-east-1", // Required, see https://docs.aws.amazon.com/acm/latest/userguide/acm-regions.html
  },
});

Aspects.of(app).add(new RemovalPolicyDestroyAspect());
Aspects.of(app).add(new AwsSolutionsChecks());
