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

export function editNote(id, noteIndex, notes, noteEdit) {
    const updatedNotes = notes.map((note, index) => noteIndex !== index ? note : noteEdit.note)
    const objNotes = {}

    objNotes.notes = updatedNotes

    return function (dispatch) {
        return axios.put(`/planets/${id}`, objNotes)
            .then(res => {
                dispatch({
                    type: 'EDIT_NOTE',
                    id: id,
                    index: noteIndex,
                    payload: updatedNotes
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
            return planets = [...planets, action.payload]
        case 'EDIT_PLANET':
            const planets_editedPlanets = planets

            return planets_editedPlanets.map(planet => action.id !== planet._id ? planet : action.payload)
        case 'DELETE_PLANET':
            return planets.filter((planet) => planet._id !== action.id)

        case 'EDIT_NOTE':
            const planets_noteEdit = [...planets]
            const planetIndex = planets_noteEdit.findIndex(planet => planet._id === action.id)

            planets_noteEdit[planetIndex].notes = action.payload

            return planets = [...planets_noteEdit]
        default:
            return planets
    }
}

const store = createStore(reducer, applyMiddleware(thunk))

export default store
