const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

// add a middleware that extracts the body
app.use(bodyParser.json());

// middleware - registered, counting no of requests
let noOfRequests = 0;
function middleware1(req, res, next) {
    noOfRequests++;
    console.log("from inside middleware with req-count : " + noOfRequests);
    next();
}

// example of middleware which errors out and doesn't call next
function middlewareError(req, res, next) {
    console.log("from inside middleware : " + req.headers.counter);
    res.send("Error from inside middleware, stopping");
}

// add/use middleware in the app
//app.use(middleware1);

// business logic
function calculateSum(counter) {
    let sum = 0;
    for (let i = 0; i <= counter; i++) {
        sum = sum + i;
    }
    return sum;
}

function calculateMul(counter) {
    let mul = 1;
    for (let i = 1; i <= counter; i++) {
        mul = mul * i;
    }
    return mul;
}

// root route
function handleFirstRequest(req, res) {
    res.send("welcome to the app !!");
}
app.get('/', handleFirstRequest);

// add user
function handleSum(req, res) {
    var counter = req.headers.counter;
    console.log("received counter in header as " + counter);

    if (counter < 1000) {
        let calculatedSum = calculateSum(counter);
        let calculatedMul = calculateMul(counter);

        var ansObject = {
            sum: calculatedSum,
            mul: calculatedMul
        }

        res.send(ansObject);    
    } else {
        res.status(411).send("Send no below 1000");
    }


}
app.post('/handleSum', handleSum);



function handleSumHtml(req, res) {

    res.send(`<head>
    <title>
        Hello from the app
    </title>
</head>
<body>
    <b>Hi there guys !</b>
</body>`)

}
app.post('/handleSumHtml', handleSumHtml);


// __dirname
function handleHtml(req, res) {
    res.sendFile(__dirname + "/index.html");
}
app.get('/handleHtml', handleHtml);

function handleSumBody(req, res) {
    console.log(req.body.counter);
    res.send("trying " + req.body.counter);
}
app.post('/handleSumBody', handleSumBody);

function started() {
    console.log(`Example app listening on port ${port}`);
}
app.listen(port, started);
