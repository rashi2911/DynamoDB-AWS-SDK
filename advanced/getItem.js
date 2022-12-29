//referencing sdk in js file
const AWS = require("aws-sdk");
//specifying aws region where dynamodb table will be created
AWS.config.update({ region: 'us-east-1' });
const docClient = new AWS.DynamoDB.DocumentClient();
// to get an item with the corresponding key parameters
docClient.get({
    TableName: 'demo_sdk',
    Key: {
        user_id: 'two',
        timestamp: 2
    }
}, (err, data)=>{
    if(err) {
        console.log(err);
    } else {
        console.log(data);
    }
});