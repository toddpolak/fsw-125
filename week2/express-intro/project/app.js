const express = require("express")
const app = express()

//Middleware (for every request) //
app.use('/', express.json()) // Looks for a request body, and turns it into 'req.body'

const users = [
    { name: 'Todd', age: 48},
    { name: 'Joe', age: 26},
    { name: 'Jane', age: 30}
]

app.get("/users", (req, res) => {
    res.send(users)
});

app.post("/users", (req, res) => {
    //console.log(req)
    const newUser = req.body
    users.push(newUser)
    res.send(`Successfully added ${newUser.name} to database!`)
})

app.listen(3000, () => {
    console.log("App is listening on port 3000!");
});
