import React, { useState } from 'react'

function EditPlanet(props) {
    const initInputs = {
        _id: props._id,
        planet: props.planet,
        host_star: props.host_star,
        avg_temp: props.avg_temp,
        distance_to_earth: props.distance_to_earth,
        potentially_habitable: props.potentially_habitable,
        orbit_days: props.orbit_days,
        imgUrl: props.imgUrl,
        notes: props.notes
    }

    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e) {
        let { name, value } = e.target

        if (name === 'potentially_habitable') {
            value === 'yes' ? value = true : value = false
        }

        setInputs(prevInputs => ({ ...prevInputs, [name]: value }))
    }

    function savePlanet() {
        props.handleEdit(inputs, props._id)
        props.setPlanetEditToggle(false)
    }
    return (
        <div className='edit-planet-form'>


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
                <input
                    type='text'
                    name='orbit_days'
                    value={inputs.orbit_days}
                    onChange={handleChange}
                    placeholder='Orbit Days' />
                <textarea
                    type='text'
                    name='imgUrl'
                    value={inputs.imgUrl}
                    onChange={handleChange}
                    placeholder='Image URL' />
            </div>


            <div>
                <button
                    onClick={savePlanet}>
                    Save
                </button>
                    <button
                        onClick={() => props.setPlanetEditToggle(prevToggle => !prevToggle)}>
                        Cancel
                </button>
            </div>
        </div>
    )
}

export default EditPlanet
