import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

export function getPlanets() {

}

export function addPlanet(planet) {
    return {
        type: 'ADD_PLANET',
        payload: planet
    }
}

export function editContact(planet, index) {
    return {
        type: 'EDIT_PLANET',
        payload: planet,
        index: index
    }
}

export function deletePlanet(index) {
    return {
        type: 'DELETE_PLANET',
        payload: index
    }
}

function reducer(planets = [], action) {
    switch (action.type) {
        case 'ADD_PLANET':
            return planets = [...planets, action.payload]

        case 'EDIT_PLANET':
            return planets = planets.map((planet, index) => action.index !== index ? planet : action.payload)

        case 'DELETE_PLANET':
            const updatedPlanets = planets.filter((planet, index) => index !== action.payload)

            return planets = updatedPlanets

        default:
            return planets
    }
}

const store = createStore(reducer, applyMiddleware(thunk))

store.subscribe(() => console.log(store.getState()))

export default store
