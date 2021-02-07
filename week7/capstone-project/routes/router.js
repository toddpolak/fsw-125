const express = require('express')
const router = express.Router()
const { v4: uuid } = require('uuid')

const planets = [
    {
        planet: 'Kepler-452b',
        host_star: 'Kepler-452',
        avg_temp: '17 Degrees F',
        distance_to_earth: '1,402 (ly)',
        notes: [
            'Kepler-452b has a probable mass five times that of Earth, and its surface gravity is nearly twice as Earths, though calculations of mass for exoplanets are only rough estimates.',
            'It is not known if Kepler-452b is a rocky planet but based on its small radius, Kepler-452b is likely to be rocky'
        ],
        potentially_habitable: true,
        orbit_days: 385,
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Kepler-452b_artist_concept.jpg/220px-Kepler-452b_artist_concept.jpg',
        _id: uuid()
    },
    {
        planet: 'Mars',
        host_star: 'Sun',
        avg_temp: '-81 Degrees F',
        distance_to_earth: '115.82 mill (mi)',
        notes: [
            'Notes for Mars 2/4/2021',
            'Additional notes for Mars',
            'More notes for Mars'
        ],
        potentially_habitable: true,
        orbit_days: 687,
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/220px-OSIRIS_Mars_true_color.jpg',
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

router.route('/planet')
    .get((req, res) => {
        const habitable = (req.query.habitable == 'true')
        const filteredItems = planets.filter(planet => planet.potentially_habitable === habitable)

        res.status(200).send(filteredItems)
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
