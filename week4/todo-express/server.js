const express = require('express')
const morgan = require('morgan')

const app = express()

app.use('/', express.json())

app.use(morgan('dev'))

app.use('/todos', require('./routes/todoRouter'))

app.listen(9000, () => {
    console.log('The server is listening on port 9000!');
});
