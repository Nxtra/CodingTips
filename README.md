# Serverless Application Model tutorial project with DynamoDB and Lambda

## Package 
`aws cloudformation package --template-file template.yml --s3-bucket coding-tips --output-template-file packaged-template.yml`

This will package and store the package on an s3 bucket in your account.
You can specify a specific region other than your default with `aws --region region cloudformation ..`
It will generate a packaged-template.yml file with a new CodeUri. 
This CodeUri points to the zip file of your project on S3.  
You can download this zip file with `aws s3 cp s3://coding-tips/md5hashons3 localname`

## Deploy
`aws cloudformation deploy --template-file ./packaged-template.yml --stack-name coding-tips --capabilities CAPABILITY_IAM`

This will deploy your stack. 
It will be visible in the CloudFormation tab of the AWS Console

## Delete
`aws cloudformation delete-stack --stack-name coding-tips`

Delete the stack and remove it from your aws account.
It will no longer be visible in the CloudFormation tab.
