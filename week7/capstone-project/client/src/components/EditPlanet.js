import React, { useState } from 'react'

function EditPlanet(props) {
    /*
    const {
        planet, host_star, avg_temp, distance_to_earth, moons,
        potentially_habitable, orbit_days, _id
    } = props
    */

    const initInputs = {
        _id: props._id,
        planet: props.planet,
        notes: props.notes
    }

    //console.log('initInputs: ', initInputs)

    //const [editToggle, setEditToggle] = useState(false)
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e) {
        const { name, value } = e.target

        setInputs(prevInputs => ({ ...prevInputs, [name]: value }))
    }

    function savePlanet() {

        //console.log('savePlanet: ', inputs, props._id)

        props.handleEdit(inputs, props._id)
        props.setPlanetEditToggle(false)
    }

    return (
        <div>
            <input
                type='text'
                name='planet'
                value={inputs.planet}
                onChange={handleChange}
                placeholder='Planet' />
            <button
                onClick={savePlanet}>
                Save
            </button>
            <button
                onClick={() => props.setPlanetEditToggle(prevToggle => !prevToggle)}>
                Cancel
            </button>
        </div>
    )
}

export default EditPlanet
