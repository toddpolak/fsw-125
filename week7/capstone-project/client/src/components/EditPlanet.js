import React, { useState } from 'react'

function EditPlanet(props) {
    const initInputs = {
        _id: props._id,
        planet: props.planet,
        notes: props.notes
    }

    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e) {
        const { name, value } = e.target

        setInputs(prevInputs => ({ ...prevInputs, [name]: value }))
    }

    function savePlanet() {
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
