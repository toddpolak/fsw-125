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

    function handleEdit(inputs, index) {
        dispatch(editPlanet(inputs, index))
    }

    return (
        <div>

            {console.log('planets: ', planets)}

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
