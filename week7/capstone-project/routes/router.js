const express = require('express')
const router = express.Router()
const { v4: uuid } = require('uuid')

const planets = [
    {
        planet: 'Kepler-452b',
        host_star: 'Kepler-452',
        avg_temp: '17 Degrees F',
        distance_to_earth: '1402',
        moons: [
            'unknown'
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
        moons: [
            'Phobos', 'Deimos'
        ],
        potentially_habitable: true,
        orbit_days: 687,
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
router.route('/:planetId')
    .put((req, res) => {
        const planetId = req.params.planetId
        const planetIndex = planets.findIndex(planet => planet._id === planetId)
        const updatedPlanet = Object.assign(planets[planetIndex], req.body)
        res.send(updatedPlanet)
    })

module.exports = router
