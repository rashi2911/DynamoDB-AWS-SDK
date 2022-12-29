//referencing sdk in js file
const AWS = require("aws-sdk");
//specifying aws region where dynamodb table will be created
AWS.config.update({ region: 'us-east-1' });
const docClient = new AWS.DynamoDB.DocumentClient();
//here we specify th query condition or the where clause, for instance if we
// have multiple table entries for a user_id and want to get all those items at
//once (in this case we don't, but for the sake of learning XD)
docClient.query({
    TableName: 'demo_sdk',
// condition is: user_id must be equal to the value of expression attribute id
    KeyConditionExpression: "user_id = :id",
    ExpressionAttributeValues: {
        ":id": "new"
    }
}, (err, data)=>{
    if(err) {
        console.log(err);
    } else {
        console.log(data);
    }
});