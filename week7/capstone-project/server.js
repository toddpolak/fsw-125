const express = require('express')
const morgan = require('morgan')
const app = express()

// Middleware (for every request)
app.use('/', express.json())
app.use(morgan('dev'))

// Routes
app.use('/planets', require('./routes/router'))

// Error handler
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({ errMsg: err.message })
})

// Status Codes:
// 200 - Successful Request
// 201 - Successful Insert /Seccessful update
// 404 - Not found
// 500 - Server Error

// Server Listen
app.listen(9000, () => {
    console.log('The server is listening on port 9000!');
});
