`# Serverless Application Model tutorial project with DynamoDB and Lambda

The stack is described in template.yml.
This file contains the full version of the stack definition.  
In stack.json or stack.yml you can see what aws creates behind the scenes when deploying the stack.

The file simple-template.yml contains the more simple definition of the stack.
Though there is no usage plan or explicit response defined for the API Gateways in this case.

## Package 
`aws cloudformation package --template-file template.yml --s3-bucket coding-tips --output-template-file packaged-template.yml`

This will package and store the package on an s3 bucket in your account.
You can specify a specific region other than your default with `aws --region region cloudformation ..`
It will generate a packaged-template.yml file with a new CodeUri. 
This CodeUri points to the zip file of your project on S3.  
You can download this zip file with `aws s3 cp s3://sam-test-basic-bucket/md5hashons3 localname`

## Deploy
`aws cloudformation deploy --template-file ./packaged-template.yml --stack-name coding-tips --capabilities CAPABILITY_IAM`

This will deploy your stack. 
It will be visible in the CloudFormation tab of the AWS Console

## Delete
`aws cloudformation delete-stack --stack-name coding-tips`

Delete the stack and remove it from your aws account.
It will no longer be visible in the CloudFormation tab.

## Retrieving a template
`aws cloudformation get-template --stack-name coding-tips`

## Convert yaml <> json
json to yaml: 
`ruby -ryaml -rjson -e 'puts YAML.dump(JSON.load(ARGF))' < template.json > template.yml`

yaml to json: 
`ruby -rjson -ryaml -e "puts JSON.pretty_generate(YAML.load(ARGF))" < template.yml > template.json`