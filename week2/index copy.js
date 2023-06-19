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

// add user
function handleAddUser(req, res) {
    res.send("trying to add user");
}
app.post('/createUser', handleAddUser);

function started() {
    console.log(`Example app listening on port ${port}`);
}
app.listen(port, started);
