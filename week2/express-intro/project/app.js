const express = require("express");
const app = express();

const users = [
    { name: 'Todd', age: 48},
    { name: 'Joe', age: 26},
    { name: 'Jane', age: 30}
]

app.get('/users', (req, res) => {
    res.send(users);
});

app.listen(3000, () => {
    console.log("App is listening on port 3000!");
});
