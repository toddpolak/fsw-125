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
    }
]

bountyRouter.route('/')
    .get((req, res) => {
        res.send(bounties)
    })
    .post((req, res) => {
        const newBounty = req.body
        newBounty._id = uuid()
        bounties.push(newBounty)
        res.send(`Successfully added ${newBounty.first_name}  ${newBounty.last_name} to database!`)
    })

module.exports = bountyRouter
