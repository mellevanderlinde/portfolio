# Portfolio with Amazon CloudFront

This repository contains my portfolio, served with Amazon CloudFront and S3 on [mellevanderlinde.com](https://mellevanderlinde.com). The portfolio design is a [template by Lee Robinson](https://github.com/leerob/leerob.io).

## Deploy

To install the project's dependencies, build the website and deploy to AWS, run the following:

```
# Build website
cd portfolio
npm ci
npm run build

# Deploy to AWS
cd ../aws
npm ci
npx cdk deploy -c accountId=012345678912
```
