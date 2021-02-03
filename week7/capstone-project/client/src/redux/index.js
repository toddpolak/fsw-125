import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'

export function getPlanets() {
    return function(dispatch) {
        return axios.get('/planets')
            .then(res => {
                dispatch({
                    type: 'GET_PLANETS',
                    payload: res.data
                })
            })
            .catch(err => console.log(err))
    }
}

export function addPlanet(planet) {
    return {
        type: 'ADD_PLANET',
        payload: planet
    }
}

export function editPlanet(planet, id) {
    return function (dispatch) {
        return axios.put(`/planets/${id}`, planet)
            .then(res => {
                dispatch({
                    type: 'EDIT_PLANET',
                    payload: planet,
                    id: id
                })
            })
            .catch(err => console.log(err))
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

        case 'GET_PLANETS':
            return planets = [...action.payload]

        case 'ADD_PLANET':
            return planets = [...planets, action.payload]

        case 'EDIT_PLANET':
            const editedPlanets = planets = planets.map(planet => action.id !== planet._id ? planet : action.payload)

            console.log('editedPlanets: ', editedPlanets)

            return editedPlanets

            //return planets = planets.map((planet, index) => action.index !== index ? planet : action.payload)

        case 'DELETE_PLANET':
            break;
            //let updatedPlanets = planets.filter((planet, index) => index !== action.payload)

            //return planets = updatedPlanets
        default:
            return planets
    }
}

const store = createStore(reducer, applyMiddleware(thunk))

export default store
