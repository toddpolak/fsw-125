const express = require('express')
const morgan = require('morgan')
const app = express()

// Middleware (for every request)
app.use('/', express.json())
app.use(morgan('dev'))

// Routes
app.use('/items', require('./routes/router'))

// Error handler
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({ errMsg: err.message })
})

// Server Listen
app.listen(9000, () => {
    console.log('The server is listening on port 9000!');
});
