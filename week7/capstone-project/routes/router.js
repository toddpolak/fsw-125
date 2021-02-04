const express = require('express')
const router = express.Router()
const { v4: uuid } = require('uuid')

const planets = [
    {
        planet: 'Kepler-452b',
        host_star: 'Kepler-452',
        avg_temp: '17 Degrees F',
        distance_to_earth: '1402',
        notes: [
            'Notes for Kepler-452b',
            'Additional notes for Kepler-452b'
        ],
        potentially_habitable: true,
        orbit_days: 385,
        _id: uuid()
    },
    {
        planet: 'Mars',
        host_star: 'Sun',
        avg_temp: '-81 Degrees F',
        distance_to_earth: '',
        notes: [
            'Notes for Mars',
            'Additional notes for Mars'
        ],
        potentially_habitable: true,
        orbit_days: 687,
        _id: uuid()
    }
]

router.route('/')
    .get((req, res) => {
        res.status(200).send(planets)
    })
    .post((req, res) => {
        const newPlanet = req.body

        newPlanet._id = uuid()
        planets.push(newPlanet)
        res.status(201).send(newPlanet)
    })

router.route('/:planetId')
    .get((req, res, next) => {
        const planetId = req.params.planetId
        const foundPlanet = planets.find(planet => planet._id === planetId)

        if (!foundPlanet) {
            const error = new Error(`The item with _id: ${planetId} was not found.`)
            res.status(500)
            return next(error)
        }
        res.status(200).send(foundPlanet)
    })
    .put((req, res) => {
        const planetId = req.params.planetId
        const planetIndex = planets.findIndex(planet => planet._id === planetId)
        const updatedPlanet = Object.assign(planets[planetIndex], req.body)

        res.status(201).send(updatedPlanet)
    })
    .delete((req, res) => {
        const planetId = req.params.planetId
        const planetIndex = planets.findIndex(planet => planet._id === planetId)

        planets.splice(planetIndex, 1)
        res.send(`${planetId} deleted`)
    })

module.exports = router
