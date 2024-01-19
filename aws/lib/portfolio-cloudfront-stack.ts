import {
  Stack,
  StackProps,
  RemovalPolicy,
  aws_s3 as s3,
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
    const bucket = this.createBucket();
    const certificate = this.createCertificate(domainName);
    const distribution = this.createDistribution(
      bucket,
      certificate,
      domainName,
    );
    this.createRecord(distribution, domainName);
    this.copyPortfolio(bucket, distribution);
  }

  createBucket(): s3.Bucket {
    return new s3.Bucket(this, "Bucket", {
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      removalPolicy: RemovalPolicy.DESTROY, // not recommended in production
      autoDeleteObjects: true, // not recommended in production
    });
  }

  createCertificate(domainName: string): certificatemanager.Certificate {
    return new certificatemanager.Certificate(this, "Certificate", {
      domainName,
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
    });
  }

  createRecord(
    distribution: cloudfront.Distribution,
    domainName: string,
  ): route53.ARecord {
    return new route53.ARecord(this, "Record", {
      target: route53.RecordTarget.fromAlias(
        new route53_targets.CloudFrontTarget(distribution),
      ),
      zone: route53.HostedZone.fromLookup(this, "HostedZone", {
        domainName,
      }),
    });
  }

  copyPortfolio(
    bucket: s3.Bucket,
    distribution: cloudfront.Distribution,
  ): s3_deployment.BucketDeployment {
    return new s3_deployment.BucketDeployment(this, "BucketDeployment", {
      destinationBucket: bucket,
      sources: [s3_deployment.Source.asset("../portfolio/build")],
      distribution,
    });
  }
}
