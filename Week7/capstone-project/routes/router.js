const express = require('express')
const router = express.Router()
const { v4: uuid } = require('uuid')

const data = [
    {
        field1: 'Test Data'
    }
]

router.route('/')
    .get((req, res) => {
        res.send(data)
    })
    .post((req, res) => {
        const newData = req.body
        newData._id = uuid()
        data.push(newData)
        res.send(newData)
    })

module.exports = router
