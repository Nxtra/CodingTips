console.log('function starts')

const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient({region: 'eu-west-1'})

exports.handler = function(event, context, callback){
    console.log('processing event data: ' + JSON.stringify(event.body, null, 2))

    let data = JSON.parse(event.body)
    console.log('data is : ' + data)

    let currentMonth = new Date().getMonth() + 1
    let currentYear = new Date().getFullYear()

    let params =  {
        Item: {
            Date: Date.now(),
            Author: data.author ? data.author : "Anonymous",
            Tip: data.tip,
            Category: data.category,
            MonthAttribute: currentMonth,
            YearAttribute: currentYear,
            YearMonthAttribute: currentYear + "-" + currentMonth
        },

        TableName: 'Tips'
    };


    console.log('Putting item in database : ' + JSON.stringify(params.Item))
    docClient.put(params, function(err,data){
        if(err) {
            callback(err, null)
        }else{
            callback(null, data)
        }
    });

}