#!/usr/bin/env node
import "source-map-support/register";
import { App } from "aws-cdk-lib";
import { PortfolioCloudfrontStack } from "../lib/portfolio-cloudfront-stack";

const app = new App();
new PortfolioCloudfrontStack(app, "PortfolioCloudfrontStack");
