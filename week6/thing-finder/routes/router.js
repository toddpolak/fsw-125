const express = require('express')
const router = express.Router()

const items = [
    {
        name: 'bannana',
        type: 'fruit',
        color: 'yellow',
        price: .75
    },
    {
        name: 'orange',
        type: 'fruit',
        color: 'orange',
        price: .50
    },
    {
        name: 'apple',
        type: 'fruit',
        color: 'red',
        price: .25
    },
    {
        name: 'carrot',
        type: 'vegetable',
        color: 'orange',
        price: .20
    },
    {
        name: 'cucumber',
        type: 'vegetable',
        color: 'green',
        price: .50
    },
    {
        name: 'spanich',
        type: 'vegetable',
        color: 'green',
        price: .25
    }
]

router.route('/')
    .get((req, res) => {
        res.send(items)
    })

router.route('/fruit')
    .get((req, res) => {
        const filteredItems = items.filter(item => item.type === 'fruit')
        res.send(filteredItems)
    })

router.route('/vegetable')
    .get((req, res) => {
        const filteredItems = items.filter(item => item.type === 'vegetable')
        res.send(filteredItems)
    })

router.route('/search/color')
    .get((req, res) => {
        const color = req.query.color
        const filteredItems = items.filter(item => item.color === color)
        res.send(filteredItems)
    })

router.route('/search/name')
    .get((req, res) => {
        const name = req.query.name
        const filteredItems = items.filter(item => item.name === name)
        res.send(filteredItems)
    })
router.route('/search/price')
    .get((req, res) => {
        const price = req.query.price
        const filteredItems = items.filter(item => item.price === Number(price))
        res.send(filteredItems)
    })

module.exports = router
