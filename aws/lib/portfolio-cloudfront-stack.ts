import {
  Stack,
  StackProps,
  RemovalPolicy,
  aws_s3 as s3,
  aws_s3_deployment as s3_deployment,
  aws_cloudfront as cloudfront,
  aws_cloudfront_origins as cloudfront_origins,
} from "aws-cdk-lib";
import { Construct } from "constructs";

export class PortfolioCloudfrontStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const bucket = this.createBucket();
    const distribution = this.createDistribution(bucket);
    this.copyPortfolio(bucket, distribution);
  }

  createBucket(): s3.Bucket {
    return new s3.Bucket(this, "Bucket", {
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      removalPolicy: RemovalPolicy.DESTROY, // not recommended in production
      autoDeleteObjects: true, // not recommended in production
    });
  }

  createDistribution(bucket: s3.Bucket): cloudfront.Distribution {
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
