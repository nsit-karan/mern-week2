const express = require('express')
const app = express()
const port = 3000

// business logic
function calculateSum(counter) {
    let sum = 0;
    for (let i = 0; i <= counter; i++) {
        sum = sum + i;
    }
    return sum;
}

// root route
function handleFirstRequest(req, res) {
    res.send("welcome to the app !!");
}
app.get('/', handleFirstRequest);

// help route
function handleHelp(req, res) {
    res.send("You can get the help you want here - wait for a bit");
}
app.get('/help', handleHelp);

// hello world route
function handleHelloWorld(req, res) {
    res.send("Hello world guys !!");
}
app.get('/hello-world', handleHelloWorld);

// sum handler
function handleSum(req, res) {
    let counter = req.query.counter;
    console.log("counter is " + counter);
    console.log("couner2 is " + req.query.counter2);
    res.send("the sum is " + calculateSum(counter));
}
app.get('/handleSum', handleSum);

function started() {
    console.log(`Example app listening on port ${port}`);
}
app.listen(port, started);
