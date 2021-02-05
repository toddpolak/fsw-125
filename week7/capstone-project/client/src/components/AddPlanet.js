import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPlanet } from '../redux'

function AddPlanet(props) {

    const dispatch = useDispatch()

    const initInputs = {
        planet: '',
        notes: []
    }

    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e) {
        const { name, value } = e.target

        setInputs(prevInputs => ({ ...prevInputs, [name]: value }))
    }

    function handleSave() {
        dispatch(addPlanet(inputs))
        setInputs(initInputs)
    }

    return (
        <div className='form'>
            <input
                type='text'
                name='planet'
                value={inputs.planet}
                onChange={handleChange}
                placeholder='Planet' />
            <button onClick={handleSave}>
            Add Planet
            </button>
        </div>
    )

}

export default AddPlanet
