import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPlanets, addPlanet, editPlanet, deletePlanet } from '../redux'
import AddPlanet from './AddPlanet'
import Planet from './Planet'

function Planets() {
    const planets = useSelector(planets => planets)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPlanets())
     }, [dispatch])

    function handleEdit(inputs, id) {

        //console.log('handleEdit: ', inputs)

        dispatch(editPlanet(inputs, id))
    }

    function handleSave(planet) {

        //console.log('handleSave: ', planet)

        dispatch(addPlanet(planet))
    }

    function handleDelete(id) {

        //console.log('handleDelete: ', id)

        dispatch(deletePlanet(id))
    }

    /*
    function handleSaveNote(note) {

        console.log('handleSaveNote: ', note)

        dispatch(editNote(note))

    }
    */

    return (

        <div>

            <div>
                <AddPlanet
                    handleSave={handleSave} />
            </div>

            {
                
                planets.map((planet, index) =>
                    <Planet
                        {...planet}
                        key={index}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                    //handleSaveNote={handleSaveNote} 
                    />)

            }

        </div>

    )
}

export default Planets
