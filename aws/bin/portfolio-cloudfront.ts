#!/usr/bin/env node
import "source-map-support/register";
import { App } from "aws-cdk-lib";
import { PortfolioCloudfrontStack } from "../lib/portfolio-cloudfront-stack";

const app = new App();
new PortfolioCloudfrontStack(app, "PortfolioCloudfrontStack", {
  env: {
    account: app.node.getContext("accountId"), // required because of HostedZone lookup
    region: "us-east-1", // required, see https://docs.aws.amazon.com/acm/latest/userguide/acm-regions.html
  },
});
