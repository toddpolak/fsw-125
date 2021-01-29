const express = require('express')
const router = express.Router()

const items = [
    {
        name: 'bannana',
        type: 'fruit',
        color: 'yellow'
    },
    {
        name: 'orange',
        type: 'fruit',
        color: 'orange'
    },
    {
        name: 'apple',
        type: 'fruit',
        color: 'red'
    },
    {
        name: 'carrot',
        type: 'vegetable',
        color: 'orange'
    },
    {
        name: 'cucumber',
        type: 'vegetable',
        color: 'green'
    },
    {
        name: 'spanich',
        type: 'vegetable',
        color: 'green'
    }
]

router.route('/')
    .get((req, res) => {
        res.status(200).send(items)
    })

router.route('/search/color')
    .get((req, res) => {
        const color = req.query.color
        const filteredItems = items.filter(item => item.color === color)
        res.status(200).send(filteredItems)
    })

router.route('/search/type')
    .get((req, res) => {
        const type = req.query.type
        const filteredItems = items.filter(item => item.type === type)
        res.status(200).send(filteredItems)
    })

module.exports = router
