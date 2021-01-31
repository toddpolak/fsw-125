const express = require('express')
const router = express.Router()

const items = [
    {
        name: 'bannana',
        type: 'fruit',
        color: 'yellow',
        amount: .75
    },
    {
        name: 'orange',
        type: 'fruit',
        color: 'orange',
        amount: .50
    },
    {
        name: 'apple',
        type: 'fruit',
        color: 'red',
        amount: .25
    },
    {
        name: 'carrot',
        type: 'vegetable',
        color: 'orange',
        amount: .20
    },
    {
        name: 'cucumber',
        type: 'vegetable',
        color: 'green',
        amount: .50
    },
    {
        name: 'spanich',
        type: 'vegetable',
        color: 'green',
        amount: .25
    }
]

router.route('/')
    .get((req, res) => {
        res.send(items)
    })

router.route('/fruit')
    .get((req, res) => {
        let filteredItems = items.filter(item => item.type === 'fruit')

        if (req.query.color !== undefined) {
            filteredItems = filteredItems.filter(item => item.color === req.query.color)
        }
        res.send(filteredItems)
    })

router.route('/vegetable')
    .get((req, res) => {
        let filteredItems = items.filter(item => item.type === 'vegetable')

        if (req.query.color !== undefined) {
            filteredItems = filteredItems.filter(item => item.color === req.query.color)
        }
        res.send(filteredItems)
    })

router.route('/search/price')
    .get((req, res) => {
        const amount = req.query.amount
        const filteredItems = items.filter(item => item.amount === Number(amount))
        res.send(filteredItems)
    })

module.exports = router
