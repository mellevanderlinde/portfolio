import {
  Stack,
  StackProps,
  Duration,
  RemovalPolicy,
  aws_s3 as s3,
  aws_logs as logs,
  aws_s3_deployment as s3_deployment,
  aws_cloudfront as cloudfront,
  aws_cloudfront_origins as cloudfront_origins,
  aws_certificatemanager as certificatemanager,
  aws_route53 as route53,
  aws_route53_targets as route53_targets,
} from "aws-cdk-lib";
import { Construct } from "constructs";

export class PortfolioCloudfrontStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const domainName = "mellevanderlinde.com";
    const hostedZone = route53.HostedZone.fromLookup(this, "HostedZone", {
      domainName,
    });
    const bucket = this.createBucket();
    const certificate = this.createCertificate(domainName, hostedZone);
    const distribution = this.createDistribution(
      bucket,
      certificate,
      domainName,
    );
    this.createRecord(distribution, hostedZone);
    this.copyPortfolio(bucket, distribution);
  }

  createBucket(): s3.Bucket {
    return new s3.Bucket(this, "Bucket", {
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      enforceSSL: true,
      removalPolicy: RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    });
  }

  createCertificate(
    domainName: string,
    hostedZone: route53.IHostedZone,
  ): certificatemanager.Certificate {
    return new certificatemanager.Certificate(this, "Certificate", {
      domainName,
      validation: certificatemanager.CertificateValidation.fromDns(hostedZone),
    });
  }

  createDistribution(
    bucket: s3.Bucket,
    certificate: certificatemanager.Certificate,
    domainName: string,
  ): cloudfront.Distribution {
    return new cloudfront.Distribution(this, "Distribution", {
      defaultRootObject: "index.html",
      defaultBehavior: {
        origin: new cloudfront_origins.S3Origin(bucket, {
          originAccessIdentity: new cloudfront.OriginAccessIdentity(
            this,
            "Identity",
          ),
        }),
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
      },
      priceClass: cloudfront.PriceClass.PRICE_CLASS_100,
      httpVersion: cloudfront.HttpVersion.HTTP3,
      domainNames: [domainName],
      certificate,
      errorResponses: [
        {
          httpStatus: 403,
          responseHttpStatus: 403,
          responsePagePath: "/error.html",
          ttl: Duration.minutes(30),
        },
      ],
      geoRestriction: cloudfront.GeoRestriction.allowlist("NL", "BE", "GB"),
    });
  }

  createRecord(
    distribution: cloudfront.Distribution,
    hostedZone: route53.IHostedZone,
  ): route53.ARecord {
    return new route53.ARecord(this, "Record", {
      target: route53.RecordTarget.fromAlias(
        new route53_targets.CloudFrontTarget(distribution),
      ),
      zone: hostedZone,
    });
  }

  copyPortfolio(
    bucket: s3.Bucket,
    distribution: cloudfront.Distribution,
  ): s3_deployment.BucketDeployment {
    const logGroup = new logs.LogGroup(this, "LogGroup", {
      retention: logs.RetentionDays.ONE_DAY,
      removalPolicy: RemovalPolicy.DESTROY,
    });

    return new s3_deployment.BucketDeployment(this, "BucketDeployment", {
      destinationBucket: bucket,
      sources: [s3_deployment.Source.asset("../portfolio/build")],
      distribution,
      distributionPaths: ["/*"],
      logGroup,
    });
  }
}
