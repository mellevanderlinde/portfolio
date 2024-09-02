#!/usr/bin/env node
import "source-map-support/register";
import { App, Aspects, IAspect, CfnResource, RemovalPolicy } from "aws-cdk-lib";
import { IConstruct } from "constructs";
import { PortfolioCloudfrontStack } from "../lib/portfolio-cloudfront-stack";

class RemovalPolicyDestroyAspect implements IAspect {
  visit(node: IConstruct): void {
    if (CfnResource.isCfnResource(node)) {
      node.applyRemovalPolicy(RemovalPolicy.DESTROY);
    }
  }
}

const app = new App();
new PortfolioCloudfrontStack(app, "PortfolioCloudfrontStack", {
  env: {
    account: app.node.getContext("accountId"), // required because of HostedZone lookup
    region: "us-east-1", // required, see https://docs.aws.amazon.com/acm/latest/userguide/acm-regions.html
  },
});
Aspects.of(app).add(new RemovalPolicyDestroyAspect());
