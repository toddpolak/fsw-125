const express = require('express')
const router = express.Router()
const { v4: uuid } = require('uuid')

const planets = [
    {
        planet: 'Kepler-452b',
        host_star: 'Kepler-452',
        potentially_habitable: true,
        info: [
            {
                temp: '248 F',
                distance_to_earth: '1402'
            }
        ],
        orbit_days: 385,
        _id: uuid()
    }
]

router.route('/')
    .get((req, res) => {
        res.send(planets)
    })
    .post((req, res) => {
        const newPlanet = req.body
        newPlanet._id = uuid()
        planets.push(newPlanet)
        res.send(newPlanet)
    })

module.exports = router
