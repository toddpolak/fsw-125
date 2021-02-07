import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPlanet } from '../redux'

function AddPlanet() {

    const dispatch = useDispatch()

    const initInputs = {
        planet: '',
        host_star: '',
        avg_temp: '',
        distance_to_earth: '',
        orbit_days: '',
        imgUrl: '',
        notes: []
    }

    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e) {
        let { name, value } = e.target

        if (name === 'potentially_habitable') {
            value === 'yes' ? value = true : value = false
        }

        setInputs(prevInputs => ({ ...prevInputs, [name]: value }))
    }

    function handleSave() {
        dispatch(addPlanet(inputs))
        setInputs(initInputs)
    }

    return (
        <div className='add-planet-form'>


            <div>
                <input
                    type='text'
                    name='planet'
                    value={inputs.planet}
                    onChange={handleChange}
                    placeholder='Planet' />
                <input
                    type='text'
                    name='host_star'
                    value={inputs.host_star}
                    onChange={handleChange}
                    placeholder='Host Star' />
                <input
                    type='text'
                    name='avg_temp'
                    value={inputs.avg_temp}
                    onChange={handleChange}
                    placeholder='Average Temp' />
                <input
                    type='text'
                    name='distance_to_earth'
                    value={inputs.distance_to_earth}
                    onChange={handleChange}
                    placeholder='Distance to Earth' />
                <input
                    type='text'
                    name='orbit_days'
                    value={inputs.orbit_days}
                    onChange={handleChange}
                    placeholder='Orbit Days' />
            </div>
            <div>
                <textarea
                    type='text'
                    name='imgUrl'
                    value={inputs.imgUrl}
                    onChange={handleChange}
                    placeholder='Image URL' />
            </div>
            <div className='radio'>
                <label>Potentially Habitable:</label>
                <div>
                    <label>Yes</label>
                    <input
                        type='radio'
                        name='potentially_habitable'
                        value='yes'
                        checked={inputs.potentially_habitable === true}
                        onChange={handleChange} />
                    <label>No</label>
                    <input
                        type='radio'
                        name='potentially_habitable'
                        value='no'
                        checked={inputs.potentially_habitable === false}
                        onChange={handleChange} />
                </div>
            </div>


            <div className='add-planet-btn'>
                <button onClick={handleSave}>
                    Add Planet
                </button>
            </div>
        </div>
    )

}

export default AddPlanet
