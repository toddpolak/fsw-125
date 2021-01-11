const express = require('express')
const app = express()
const { v4: uuidv4 } = require('uuid')

//Middleware (for every request) //
app.use('/', express.json()) // Looks for a request body, and turns it into 'req.body'

const users = [
    { name: 'Todd', age: 48, _id: uuidv4() },
    { name: 'Joe', age: 26, _id: uuidv4() },
    { name: 'Jane', age: 30, _id: uuidv4() }
]

app.get("/users", (req, res) => {
    res.send(users)
});

app.post('/users', (req, res) => {
    console.log(req)
    const newUser = req.body
    newUser._id = uuidv4()
    users.push(newUser)
    res.send(`Successfully added ${newUser.name} to database!`)
})

app.listen(3000, () => {
    console.log("App is listening on port 3000!");
});
