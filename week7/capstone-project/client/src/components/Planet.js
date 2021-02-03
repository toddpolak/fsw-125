import React, { useState } from 'react'

function Planet(props) {
    /*
    const {
        planet, host_star, avg_temp, distance_to_earth, moons,
        potentially_habitable, orbit_days, _id
    } = props
    */

    const initInputs = {
        _id: props._id,
        planet: props.planet
    }

    const [editToggle, setEditToggle] = useState(false)
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e) {
        const { name, value } = e.target

        setInputs(prevInputs => ({ ...prevInputs, [name]: value }))
    }

    function savePlanet() {
        props.handleEdit(inputs, props._id)
        setEditToggle(false)
    }

    return (
        <div>
            { !editToggle ?
                <>
                    <div className='planet'>
                        {`${props.planet}`}
                        <button
                            onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                            Edit
                        </button>
                    </div>
                </>
                :
                <>
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
                            onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                            Cancel
                        </button>
                    </div>
                </>
            }
        </div>
    )
}

export default Planet
