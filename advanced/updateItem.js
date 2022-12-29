//referencing sdk in js file
const AWS = require("aws-sdk");
//specifying aws region where dynamodb table will be created
AWS.config.update({ region: 'us-east-1' });
const docClient = new AWS.DynamoDB.DocumentClient();
docClient.update({
    TableName: 'demo_sdk',
    Key: {
        user_id: 'first',
        timestamp: 3
    },
    UpdateExpression: 'set #old = :new',
    ExpressionAttributeNames: {
        '#old': 'The Secret' 
    },
    ExpressionAttributeValues: {
       //Title of item is updated
        ':new': "Hall of Games"
    }
}, (err, data)=>{
    if(err) {
        console.log(err);
    } else {
        console.log(data);
    }
});