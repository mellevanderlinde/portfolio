# Portfolio

This repository contains my portfolio, served with Amazon CloudFront and S3 on [mellevanderlinde.com](https://mellevanderlinde.com). The portfolio is designed by [ibelick](https://github.com/ibelick/nim).

## Commands

To install the project's dependencies and build the assets, run:

```
pnpm install
pnpm run ci
```

To deploy to AWS:
```
cd apps/infra
cdk deploy -c accountId=012345678912
```
