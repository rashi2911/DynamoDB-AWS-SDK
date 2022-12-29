//referencing sdk in js file
const AWS = require("aws-sdk");
//specifying aws region where dynamodb table will be created
AWS.config.update({ region: 'us-east-1' });
//instantiate dynamodb class
const dynamodb = new AWS.DynamoDB();
dynamodb.describeTable({
    TableName: "demo_sdk"
}, (err, data)=>{
    if(err) {
        console.log(err);
    } else {
        console.log(JSON.stringify(data, null, 2));// '2' is to beautify the output 
    }
});