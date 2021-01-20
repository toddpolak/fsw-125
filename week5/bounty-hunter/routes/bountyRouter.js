const express = require('express')
const bountyRouter = express.Router()
const { v4: uuid } = require('uuid')

const bounties = [
    { 
        first_name: 'Darth', 
        last_name: 'Millenial', 
        living: true,
        bounty_amount: 50,
        type: 'Sith',
        _id: uuid() 
    },
    {
        first_name: 'Ahsoka',
        last_name: 'Tano',
        living: true,
        bounty_amount: 80,
        type: 'Jedi',
        _id: uuid() 
    }
]

bountyRouter.route('/')
    .get((req, res) => {
        res.send(bounties)
    })

module.exports = bountyRouter