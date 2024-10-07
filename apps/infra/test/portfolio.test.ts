import { App, assertions } from "aws-cdk-lib";
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
  Object.keys(bucketDeployment).forEach((key) => {
    bucketDeployment[key].Properties.SourceObjectKeys = ["removed-hash"];
  });
  const lambdaFunction = template.findResources("AWS::Lambda::Function");
  Object.keys(lambdaFunction).forEach((key) => {
    lambdaFunction[key].Properties.Code.S3Key = "removed-hash";
  });

  expect(template).toMatchSnapshot();
});
