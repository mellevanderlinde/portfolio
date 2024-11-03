# Portfolio with CloudFront and Next.js

This repository contains my portfolio, served with Amazon CloudFront and S3 on [mellevanderlinde.com](https://mellevanderlinde.com). The portfolio design is a [template by Vercel](https://vercel.com/templates/next.js/nextfolio-a-simple-next-js-portfolio).

## Deploy

To install the project's dependencies, build the website and deploy to AWS, run the following:

```
bun install
bun run build
cd apps/infra
npx cdk deploy -c accountId=012345678912
```
