import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPlanets, editPlanet } from '../redux'
import Planet from '../components/Planet'

function Planets() {
    const planets = useSelector(planets => planets)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPlanets())
     }, [dispatch])

    function handleEdit(inputs, id) {
        dispatch(editPlanet(inputs, id))
    }

    return (
        <div>
            {
                planets.map((planet, index) =>
                    <Planet
                        {...planet}
                        key={index}
                        handleEdit={handleEdit} />)
            }
        </div>
    )
}

export default Planets
