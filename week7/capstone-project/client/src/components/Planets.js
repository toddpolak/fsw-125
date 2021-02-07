import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPlanets, getFilteredPlanets, editPlanet, deletePlanet } from '../redux'
import Planet from './Planet'

function Planets() {
    const planets = useSelector(planets => planets)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPlanets())
    }, [dispatch])

    function filter(filter) {
        filter === 'all'
            ? dispatch(getPlanets())
            : dispatch(getFilteredPlanets(filter))
    }

    function handleEdit(inputs, id) {
        dispatch(editPlanet(inputs, id))
    }

    function handleDelete(id) {
        dispatch(deletePlanet(id))
    }

    return (
        <div>
            <div className='filter'>
                <label>Filter:</label>
                <button onClick={() => { filter(true) }}>Habitable</button>
                <button onClick={() => { filter(false) }}>Non-Habitable</button>
                <button onClick={() => { filter('all') }}>All</button>
            </div>
            <div>
                {
                    planets.map((planet, index) =>
                        <Planet
                            {...planet}
                            key={index}
                            handleEdit={handleEdit}
                            handleDelete={handleDelete} />)
                }
            </div>
        </div>
    )
}

export default Planets
