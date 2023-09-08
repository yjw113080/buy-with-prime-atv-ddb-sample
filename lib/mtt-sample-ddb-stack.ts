import * as cdk from 'aws-cdk-lib';
import * as ddb from 'aws-cdk-lib/aws-dynamodb';
import * as iam from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';


export class SampleDynamoDBStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
  
    const sampleTable = new ddb.Table(this, 'SampleTenantDataTable', {
        partitionKey: { name: 'tenant_id', type: ddb.AttributeType.STRING },
        removalPolicy: cdk.RemovalPolicy.DESTROY
    })

    new cdk.custom_resources.AwsCustomResource(this, 'ddbInitData', {
        onCreate: {
          service: 'DynamoDB',
          action: 'putItem',
          parameters: {
            TableName: sampleTable.tableName,
            Item: {
              tenant_id: { S: 'TEST_CORRECT_ID' },
              s_data: { S: 'ABCD' },
            }
          },
          physicalResourceId: cdk.custom_resources.PhysicalResourceId.of(Date.now().toString()),
        },
        policy: cdk.custom_resources.AwsCustomResourcePolicy.fromSdkCalls({
          resources: [sampleTable.tableArn],
        }),
      });

    const ddbAllowedRole = new iam.Role(this, 'TestRoleToBeAssumedByTestRunner', {
      assumedBy: new iam.ServicePrincipal('codebuild.amazonaws.com')
    });
}}
