const express = require('express')
const app = express()

app.use('/', express.json())

app.use('/bounties', require('./routes/bountyRouter'))

app.listen(9000, () => {
    console.log("The server is listening on port 9000!");
});
