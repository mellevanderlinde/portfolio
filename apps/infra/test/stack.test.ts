import { App, assertions } from "aws-cdk-lib";
import { expect, test } from "vitest";
import { PortfolioStack } from "../lib/portfolio-stack";

test("Match with snapshot", () => {
  const app = new App();
  const stack = new PortfolioStack(app, "PortfolioStack", {
    env: { region: "us-east-1", account: "012345678912" },
  });
  const template = assertions.Template.fromStack(stack);

  // Remove hashes from snapshot
  const bucketDeployment = template.findResources(
    "Custom::CDKBucketDeployment",
  );
  for (const key of Object.keys(bucketDeployment)) {
    bucketDeployment[key].Properties.SourceObjectKeys = ["removed-hash"];
  }
  const lambdaFunction = template.findResources("AWS::Lambda::Function");
  for (const key of Object.keys(lambdaFunction)) {
    lambdaFunction[key].Properties.Code.S3Key = "removed-hash";
  }
  const layerVersion = template.findResources("AWS::Lambda::LayerVersion");
  for (const key of Object.keys(layerVersion)) {
    layerVersion[key].Properties.Content.S3Key = "removed-hash";
  }

  expect(template).toMatchSnapshot();
});
