import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPlanets, editPlanet, deletePlanet } from '../redux'
import Planet from './Planet'

function Planets() {
    const planets = useSelector(planets => planets)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPlanets())
     }, [dispatch])

    function handleEdit(inputs, id) {
        dispatch(editPlanet(inputs, id))
    }

    function handleDelete(id) {
        dispatch(deletePlanet(id))
    }

    return (
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
    )
}

export default Planets
