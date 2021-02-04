import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPlanets, addPlanet, editPlanet, deletePlanet } from '../redux'
import AddForm from './AddForm'
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

    function handleSave(planet) {

        //console.log('handleSave: ', planet)   {...planet}

        dispatch(addPlanet(planet))
    }

    function handleDelete(id) {

        console.log('handleDelete: ', id)

        dispatch(deletePlanet(id))
    }

    return (
        <div>

            { console.log('Planets.js: ', planets)}

            <div>
                <AddForm
                    handleSave={handleSave} />
            </div>

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
