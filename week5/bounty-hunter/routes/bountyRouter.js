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
    .post((req, res) => {
        const newBounty = req.body
        newBounty._id = uuid()
        bounties.push(newBounty)
        res.send(newBounty)
    })

bountyRouter.route('/:bountyId')
    .get((req, res) => {
        const bountyId = req.params.bountyId
        const foundBounty = bounties.find(bounty => bounty._id === bountyId)
        res.send(foundBounty)
    })
    .put((req, res) => {
        const bountyId = req.params.bountyId
        const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
        const updatedBounty = Object.assign(bounties[bountyIndex], req.body)
        res.send(updatedBounty)
    })
    .delete((req, res) => {
        const bountyId = req.params.bountyId
        const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
        bounties.splice(bountyIndex, 1)
        res.send(`Successfully deleted bounty: ${bountyId}`)
    })

module.exports = bountyRouter
