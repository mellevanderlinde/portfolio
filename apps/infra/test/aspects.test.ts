import { App, Aspects, Stack } from 'aws-cdk-lib'
import { Template } from 'aws-cdk-lib/assertions'
import { Bucket } from 'aws-cdk-lib/aws-s3'
import { beforeEach, describe, it } from 'vitest'
import { RemovalPolicyDestroyAspect } from '../lib/aspects'

describe('removalPolicyDestroyAspect', () => {
  let app: App
  let stack: Stack

  beforeEach(() => {
    app = new App()
    stack = new Stack(app, 'Stack')

    new Bucket(stack, 'Bucket')
  })

  it('has no destroy removal policy by default', () => {
    Template.fromStack(stack).hasResource('AWS::S3::Bucket', {
      DeletionPolicy: 'Retain',
      UpdateReplacePolicy: 'Retain',
    })
  })

  it('has a destroy removal policy when specified', () => {
    Aspects.of(app).add(new RemovalPolicyDestroyAspect())

    Template.fromStack(stack).hasResource('AWS::S3::Bucket', {
      DeletionPolicy: 'Delete',
      UpdateReplacePolicy: 'Delete',
    })
  })
})
