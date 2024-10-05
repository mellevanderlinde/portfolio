# Portfolio with CloudFront and Next.js

This repository contains my portfolio, served with Amazon CloudFront and S3 on [mellevanderlinde.com](https://mellevanderlinde.com). The portfolio design is a [template by Vercel](https://vercel.com/templates/next.js/portfolio-starter-kit).

## Deploy

To install the project's dependencies, build the website and deploy to AWS, run the following:

```
# Build website
cd website
npm ci
npm run build

# Deploy to AWS
cd ../infra
npm ci
npx cdk deploy -c accountId=012345678912
```
