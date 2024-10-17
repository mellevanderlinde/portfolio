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

test("Check if website is available", async () => {
  const result = await fetch("https://mellevanderlinde.com");
  const text = await result.text();

  expect(result.status).toBe(200);
  expect(result.statusText).toBe("OK");
  expect(text).toMatch("Melle van der Linde");
  expect(text).toMatch("My Portfolio");
  expect(text).toMatch(
    "I have an interest in cloud engineering, machine learning, technology and sustainability.",
  );
});
