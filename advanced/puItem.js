//referencing sdk in js file
const AWS = require("aws-sdk");
//specifying aws region where dynamodb table will be created
AWS.config.update({ region: 'us-east-1' });
const docClient = new AWS.DynamoDB.DocumentClient();
docClient.put({
    TableName: 'demo_sdk',
    Item: {
// specify attributes as key value pairs
        user_id: 'first',
  //timestamp is the primary key
        timestamp: 3,
        title: 'The Secret',
        content: 'Book'
    }
}, (err, data)=>{
    if(err) {
        console.log(err);
    } else {
        console.log(data);
    }
});