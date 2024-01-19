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
  expect(template.toJSON()).toMatchSnapshot();
});
