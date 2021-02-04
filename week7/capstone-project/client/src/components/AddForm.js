import React, { useState } from 'react'

function AddForm(props) {

    const initInputs = {
        planet: ''
    }

    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e) {
        const { name, value } = e.target

        setInputs(prevInputs => ({ ...prevInputs, [name]: value }))
    }

    function addPlanet() {
        props.handleSave(inputs)
        setInputs(initInputs)
    }

    return (
        <div>
            <input
                type='text'
                name='planet'
                value={inputs.planet}
                onChange={handleChange}
                placeholder='Planet' />
            <button onClick={addPlanet}>
            Add Planet
            </button>
        </div>
    )

}

export default AddForm
