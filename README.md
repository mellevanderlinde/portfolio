# Portfolio with Amazon CloudFront

This repository contains my portfolio, served with Amazon CloudFront and S3 on [mellevanderlinde.com](https://mellevanderlinde.com/). The portfolio design is a React template made by [Raj Shekhar](https://github.com/rajshekhar26/cleanfolio).

## Deploy

To install the project's dependencies, build the website and deploy to AWS, run the following:

```
# Build website
cd portfolio
yarn install
yarn build

# Deploy to AWS
cd ../aws
npm install
npx cdk deploy -c accountId=012345678912
```
