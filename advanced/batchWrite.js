//referencing sdk in js file
const AWS = require("aws-sdk");
//specifying aws region where dynamodb table will be created
AWS.config.update({ region: 'us-east-1' });
const docClient = new AWS.DynamoDB.DocumentClient();
docClient.batchWrite({
    RequestItems: {
        'demo_sdk': [
            {
              // deletes item , here, only one
                DeleteRequest: {
                    Key: {
                        user_id: 'first',
                        timestamp: 3
                    }
                }
            },
            {
              // inserting two items in the table
                PutRequest: {
                    Item: {
                        user_id: 'new',
                        timestamp: 1,
                        title: 'To Kill a MockingBird',
                        content: 'Harper Lee'
                    }
                }
            },
            {
                PutRequest: {
                    Item: {
                        user_id: 'two',
                        timestamp: 2,
                        title: 'Harry Potter',
                        content: 'J.K Rowling'
                    }
                }
            }
        ]
    }
}, (err, data)=>{
    if(err) {
        console.log(err);
    } else {
        console.log(data);
    }
});