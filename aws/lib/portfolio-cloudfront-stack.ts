import {
  Stack,
  StackProps,
  RemovalPolicy,
  aws_s3 as s3,
  aws_s3_deployment as s3_deployment,
  aws_iam as iam,
  aws_cloudfront as cloudfront,
  aws_cloudfront_origins as cloudfront_origins,
} from "aws-cdk-lib";
import { Construct } from "constructs";

export class PortfolioCloudfrontStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const identity = new cloudfront.OriginAccessIdentity(this, "Identity");
    const bucket = this.createBucket(identity);
    const distribution = this.createDistribution(bucket, identity);
    this.copyPortfolio(bucket, distribution);
  }

  createBucket(identity: cloudfront.OriginAccessIdentity): s3.Bucket {
    const bucket = new s3.Bucket(this, "Bucket", {
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      removalPolicy: RemovalPolicy.DESTROY, // not recommended in production
      autoDeleteObjects: true, // not recommended in production
    });

    bucket.addToResourcePolicy(
      new iam.PolicyStatement({
        actions: ["s3:GetObject"],
        resources: [bucket.arnForObjects("*")],
        principals: [
          new iam.CanonicalUserPrincipal(
            identity.cloudFrontOriginAccessIdentityS3CanonicalUserId,
          ),
        ],
      }),
    );

    return bucket;
  }

  createDistribution(
    bucket: s3.Bucket,
    identity: cloudfront.OriginAccessIdentity,
  ): cloudfront.Distribution {
    return new cloudfront.Distribution(this, "Distribution", {
      defaultRootObject: "index.html",
      defaultBehavior: {
        origin: new cloudfront_origins.S3Origin(bucket, {
          originAccessIdentity: identity,
        }),
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
      },
      priceClass: cloudfront.PriceClass.PRICE_CLASS_100,
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
