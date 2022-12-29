//referencing sdk in js file
const AWS = require("aws-sdk");
//specifying aws region where dynamodb table will be created
AWS.config.update({ region: 'us-east-1' });
//instantiate dynamodb class
const dynamodb = new AWS.DynamoDB();
dynamodb.createTable({
    TableName: "demo_sdk",
    AttributeDefinitions: [
        {
            AttributeName: "id",
            AttributeType: "S" //string
        },
        {
            AttributeName: "timestamp",
            AttributeType: "N" //number
        }
    ],
    KeySchema: [
        {
            AttributeName: "id",
            KeyType: "HASH"
        },
        {
            AttributeName: "timestamp",
            KeyType: "RANGE"
        }
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1
    }
}, (err, data)=>{
    if(err) {
        console.log(err);
    } else {
        console.log(JSON.stringify(data, null, 2));
    }
});