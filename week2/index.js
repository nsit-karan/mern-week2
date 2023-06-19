const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

// add a middleware that extracts the body
app.use(bodyParser.json());

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

function handleSum(req, res) {
    // let counter = req.body.counter;
    // console.log(req.body.counter);

    let counter = req.query.counter;
    let calculatedSum = calculateSum(counter);
    let calculatedMul = calculateMul(counter);

    var ansObject = {
        sum: calculatedSum,
        mul: calculatedMul
    }

    res.send(ansObject);

}
app.get('/handleSum', handleSum);

function started() {
    console.log(`Example app listening on port ${port}`);
}
app.listen(port, started);
