# Portfolio with Amazon CloudFront

This project is my personal portfolio, served with Amazon CloudFront and S3. The portfolio design is a React template made by Eldora Boo.

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
