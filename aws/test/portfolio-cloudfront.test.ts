import { App, assertions } from "aws-cdk-lib";
import { PortfolioCloudfrontStack } from "../lib/portfolio-cloudfront-stack";

test("Match with snapshot", () => {
  const app = new App();
  const stack = new PortfolioCloudfrontStack(app, "TestPortfolioCloudfrontStack");
  const template = assertions.Template.fromStack(stack);
  expect(template.toJSON()).toMatchSnapshot();
});
