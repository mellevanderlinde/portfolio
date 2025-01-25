import {
  Duration,
  RemovalPolicy,
  Stack,
  type StackProps,
  aws_certificatemanager as certificatemanager,
  aws_cloudfront as cloudfront,
  aws_cloudfront_origins as cloudfront_origins,
  aws_logs as logs,
  aws_route53 as route53,
  aws_route53_targets as route53_targets,
  aws_s3 as s3,
  aws_s3_deployment as s3_deployment,
} from "aws-cdk-lib";
import { NagSuppressions } from "cdk-nag";
import type { Construct } from "constructs";

export class PortfolioStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const domainName = "mellevanderlinde.com";
    const wwwDomainName = `www.${domainName}`;
    const zone = route53.HostedZone.fromLookup(this, "HostedZone", {
      domainName,
    });

    const bucket = new s3.Bucket(this, "Bucket", {
      bucketName: domainName,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      enforceSSL: true,
      removalPolicy: RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    });

    NagSuppressions.addResourceSuppressions(bucket, [
      {
        id: "AwsSolutions-S1",
        reason: "Server access logging is not required",
      },
    ]);

    const certificate = new certificatemanager.Certificate(
      this,
      "Certificate",
      {
        certificateName: domainName,
        domainName,
        validation: certificatemanager.CertificateValidation.fromDns(zone),
        subjectAlternativeNames: [wwwDomainName],
      },
    );

    const function_ = new cloudfront.Function(this, "Function", {
      functionName: domainName.replace(".", "-"),
      code: cloudfront.FunctionCode.fromFile({ filePath: "src/index.js" }),
      runtime: cloudfront.FunctionRuntime.JS_2_0,
      comment: "Add index.html to URI (required for Next.js)",
    });

    const distribution = new cloudfront.Distribution(this, "Distribution", {
      defaultRootObject: "index.html",
      defaultBehavior: {
        origin:
          cloudfront_origins.S3BucketOrigin.withOriginAccessControl(bucket),
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        functionAssociations: [
          {
            function: function_,
            eventType: cloudfront.FunctionEventType.VIEWER_REQUEST,
          },
        ],
        responseHeadersPolicy:
          cloudfront.ResponseHeadersPolicy.SECURITY_HEADERS,
      },
      priceClass: cloudfront.PriceClass.PRICE_CLASS_100,
      httpVersion: cloudfront.HttpVersion.HTTP3,
      domainNames: [domainName, wwwDomainName],
      enableIpv6: true,
      certificate,
      errorResponses: [
        {
          httpStatus: 403,
          responseHttpStatus: 404,
          responsePagePath: "/404.html",
          ttl: Duration.minutes(30),
        },
      ],
      geoRestriction: cloudfront.GeoRestriction.allowlist(
        "AT",
        "BE",
        "CH",
        "DE",
        "DK",
        "ES",
        "FR",
        "GB",
        "IE",
        "IT",
        "LU",
        "NL",
        "PL",
        "PT",
        "US",
      ),
    });

    NagSuppressions.addResourceSuppressions(distribution, [
      {
        id: "AwsSolutions-CFR2",
        reason: "AWS WAF is not required",
      },
      {
        id: "AwsSolutions-CFR3",
        reason: "Access logging is not required",
      },
    ]);

    const target = route53.RecordTarget.fromAlias(
      new route53_targets.CloudFrontTarget(distribution),
    );

    new route53.ARecord(this, "ARecord", {
      recordName: domainName,
      target,
      zone,
    });

    new route53.ARecord(this, "WwwARecord", {
      recordName: wwwDomainName,
      target,
      zone,
    });

    new route53.AaaaRecord(this, "AaaaRecord", {
      recordName: domainName,
      target,
      zone,
    });

    new route53.AaaaRecord(this, "WwwAaaaRecord", {
      recordName: wwwDomainName,
      target,
      zone,
    });

    new route53.TxtRecord(this, "TxtRecord", {
      values: [
        "google-site-verification=cdnxZVubxHlWGwUWIl8O3zQA57brfgrjMC-gzOibbEQ",
      ],
      zone,
    });

    const logGroup = new logs.LogGroup(this, "LogGroup", {
      logGroupName: domainName,
      retention: logs.RetentionDays.ONE_DAY,
    });

    const bucketDeployment = new s3_deployment.BucketDeployment(
      this,
      "BucketDeployment",
      {
        destinationBucket: bucket,
        sources: [s3_deployment.Source.asset("../website/out")],
        distribution,
        distributionPaths: ["/*"],
        logGroup,
        memoryLimit: 2048,
      },
    );

    NagSuppressions.addResourceSuppressionsByPath(
      this,
      "/PortfolioStack/Custom::CDKBucketDeployment8693BB64968944B69AAFB0CC9EB8756C2048MiB/Resource",
      [
        {
          id: "AwsSolutions-L1",
          reason: "This Lambda is managed by CDK",
        },
      ],
    );

    NagSuppressions.addResourceSuppressions(
      bucketDeployment.handlerRole,
      [
        {
          id: "AwsSolutions-IAM5",
          reason: "Full S3 access is required",
        },
        {
          id: "AwsSolutions-IAM4",
          reason: "Write access to CloudWatch is allowed",
        },
      ],
      true,
    );
  }
}
