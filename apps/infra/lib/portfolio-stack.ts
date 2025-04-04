import type { StackProps } from 'aws-cdk-lib'
import type { Construct } from 'constructs'
import { Duration, RemovalPolicy, Stack } from 'aws-cdk-lib'
import {
  Certificate,
  CertificateValidation,
} from 'aws-cdk-lib/aws-certificatemanager'
import {
  Function as CloudFrontFunction,
  Distribution,
  FunctionCode,
  FunctionEventType,
  FunctionRuntime,
  GeoRestriction,
  HttpVersion,
  PriceClass,
  ResponseHeadersPolicy,
  ViewerProtocolPolicy,
} from 'aws-cdk-lib/aws-cloudfront'
import { S3BucketOrigin } from 'aws-cdk-lib/aws-cloudfront-origins'
import { LogGroup, RetentionDays } from 'aws-cdk-lib/aws-logs'
import {
  AaaaRecord,
  ARecord,
  HostedZone,
  RecordTarget,
  TxtRecord,
} from 'aws-cdk-lib/aws-route53'
import { CloudFrontTarget } from 'aws-cdk-lib/aws-route53-targets'
import { BlockPublicAccess, Bucket } from 'aws-cdk-lib/aws-s3'
import { BucketDeployment, Source } from 'aws-cdk-lib/aws-s3-deployment'
import { NagSuppressions } from 'cdk-nag'

export class PortfolioStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props)

    const domainName = 'mellevanderlinde.com'
    const wwwDomainName = `www.${domainName}`
    const zone = HostedZone.fromLookup(this, 'HostedZone', {
      domainName,
    })

    const bucket = new Bucket(this, 'Bucket', {
      bucketName: domainName,
      blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
      enforceSSL: true,
      removalPolicy: RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    })

    NagSuppressions.addResourceSuppressions(bucket, [
      {
        id: 'AwsSolutions-S1',
        reason: 'Server access logging is not required',
      },
    ])

    const certificate = new Certificate(this, 'Certificate', {
      certificateName: domainName,
      domainName,
      validation: CertificateValidation.fromDns(zone),
      subjectAlternativeNames: [wwwDomainName],
    })

    const function_ = new CloudFrontFunction(this, 'Function', {
      functionName: domainName.replace('.', '-'),
      code: FunctionCode.fromFile({ filePath: 'src/index.js' }),
      runtime: FunctionRuntime.JS_2_0,
      comment: 'Add index.html to URI (required for Next.js)',
    })

    const distribution = new Distribution(this, 'Distribution', {
      defaultRootObject: 'index.html',
      defaultBehavior: {
        origin: S3BucketOrigin.withOriginAccessControl(bucket),
        viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        functionAssociations: [
          {
            function: function_,
            eventType: FunctionEventType.VIEWER_REQUEST,
          },
        ],
        responseHeadersPolicy: ResponseHeadersPolicy.SECURITY_HEADERS,
      },
      priceClass: PriceClass.PRICE_CLASS_100,
      httpVersion: HttpVersion.HTTP3,
      domainNames: [domainName, wwwDomainName],
      enableIpv6: true,
      certificate,
      errorResponses: [
        {
          httpStatus: 403,
          responseHttpStatus: 404,
          responsePagePath: '/404.html',
          ttl: Duration.minutes(30),
        },
      ],
      geoRestriction: GeoRestriction.allowlist(
        'AT',
        'BE',
        'CH',
        'DE',
        'DK',
        'ES',
        'FR',
        'GB',
        'IE',
        'IT',
        'LU',
        'NL',
        'PL',
        'PT',
        'US',
      ),
    })

    NagSuppressions.addResourceSuppressions(distribution, [
      {
        id: 'AwsSolutions-CFR2',
        reason: 'AWS WAF is not required',
      },
      {
        id: 'AwsSolutions-CFR3',
        reason: 'Access logging is not required',
      },
    ])

    const target = RecordTarget.fromAlias(new CloudFrontTarget(distribution))

    new ARecord(this, 'ARecord', {
      recordName: domainName,
      target,
      zone,
    })

    new ARecord(this, 'WwwARecord', {
      recordName: wwwDomainName,
      target,
      zone,
    })

    new AaaaRecord(this, 'AaaaRecord', {
      recordName: domainName,
      target,
      zone,
    })

    new AaaaRecord(this, 'WwwAaaaRecord', {
      recordName: wwwDomainName,
      target,
      zone,
    })

    new TxtRecord(this, 'TxtRecord', {
      values: [
        'google-site-verification=cdnxZVubxHlWGwUWIl8O3zQA57brfgrjMC-gzOibbEQ',
      ],
      zone,
    })

    const logGroup = new LogGroup(this, 'LogGroup', {
      logGroupName: domainName,
      retention: RetentionDays.ONE_DAY,
    })

    const bucketDeployment = new BucketDeployment(this, 'BucketDeployment', {
      destinationBucket: bucket,
      sources: [Source.asset('../website/out')],
      distribution,
      distributionPaths: ['/*'],
      logGroup,
      memoryLimit: 2048,
    })

    NagSuppressions.addResourceSuppressionsByPath(
      this,
      '/PortfolioStack/Custom::CDKBucketDeployment8693BB64968944B69AAFB0CC9EB8756C2048MiB/Resource',
      [
        {
          id: 'AwsSolutions-L1',
          reason: 'This Lambda is managed by CDK',
        },
      ],
    )

    NagSuppressions.addResourceSuppressions(
      bucketDeployment.handlerRole,
      [
        {
          id: 'AwsSolutions-IAM5',
          reason: 'Full S3 access is required',
        },
        {
          id: 'AwsSolutions-IAM4',
          reason: 'Write access to CloudWatch is allowed',
        },
      ],
      true,
    )
  }
}
