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
    return function (dispatch) {
        return axios.post('/planets', planet)
            .then(res => {
                dispatch({
                    type: 'ADD_PLANET',
                    payload: res.data
                })
            })
            .catch(err => console.log(err))
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

export function deletePlanet(id) {

    console.log('deletePlanet: ', id)

    return function (dispatch) {
        return axios.delete(`/planets/${id}`)
            .then(res => {
                dispatch({
                    type: 'DELETE_PLANET',
                    id: id
                })
            })
            .catch(err => console.log(err))
    }
}

function reducer(planets = [], action) {
    switch (action.type) {

        case 'GET_PLANETS':
            return planets = [...action.payload]
        case 'ADD_PLANET':

            console.log('ADD_PLANET: ', action.payload)

            return planets = [...planets, action.payload]

        case 'EDIT_PLANET':

            const editedPlanets = planets

            //console.log('EDIT_PLANET: ', editedPlanets)

            return editedPlanets.map(planet => action.id !== planet._id ? planet : action.payload)

        case 'DELETE_PLANET':

            console.log('DELETE_PLANET: ', action.id)

            return planets.filter((planet) => planet._id !== action.id)

            //const updatedPlanets = planets.filter((planet) => planet._id !== action.id)

            //console.log('DELETE_PLANET: ', updatedPlanets)

            //return updatedPlanets

        default:
            return planets
    }
}

const store = createStore(reducer, applyMiddleware(thunk))

export default store
