import { App, assertions } from "aws-cdk-lib";
import { PortfolioCloudfrontStack } from "../lib/portfolio-cloudfront-stack";

test("Match with snapshot", () => {
  const app = new App();
  const stack = new PortfolioCloudfrontStack(
    app,
    "TestPortfolioCloudfrontStack",
    {
      env: { region: "us-east-1", account: "012345678912" },
    },
  );
  const template = assertions.Template.fromStack(stack);

  // Remove hashes from snapshot
  const resource = template.findResources("Custom::CDKBucketDeployment");
  Object.keys(resource).forEach((key) => {
    resource[key].Properties.SourceObjectKeys = ["removed-hash"];
  });
  expect(template).toMatchSnapshot();
});
