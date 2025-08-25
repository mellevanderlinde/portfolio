# Portfolio

This repository contains my portfolio, served with Amazon CloudFront and S3 on [mellevanderlinde.com](https://mellevanderlinde.com). The portfolio is designed by [ibelick](https://github.com/ibelick/nim).

## Deploy

To install the project's dependencies, build the website and deploy to AWS, run the following:

```
pnpm install
pnpm run ci
cd apps/infra
cdk deploy -c accountId=012345678912
```
