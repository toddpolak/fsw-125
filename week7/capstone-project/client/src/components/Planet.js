import React, { useState } from 'react'
import EditPlanet from './EditPlanet'
import Notes from './Notes'

function Planet(props) {
    const {
        planet, host_star, avg_temp, distance_to_earth, potentially_habitable, orbit_days,
        notes, _id, handleEdit, handleDelete
    } = props
    const [planetEditToggle, setPlanetEditToggle] = useState(false)

    return (
        <div>
            { !planetEditToggle ?
                <>
                    <div className='planet-container'>
                        <div className='planet'>
                            <div className='items'>
                                <span className='left_column'>Planet: </span>
                                <span className='right_column'>{planet}</span>
                            </div>
                            <div className='items'>
                                <span className='left_column'>Host Star: </span>
                                <span className='right_column'>{host_star}</span>
                            </div>
                            <div className='items'>
                                <span className='left_column'>Average Temp: </span>
                                <span className='right_column'>{avg_temp}</span>
                            </div>
                            <div className='items'>
                                <span className='left_column'>Distance to Earth: </span>
                                <span className='right_column'>{distance_to_earth}</span>
                            </div>
                            <div className='items'>
                                <span className='left_column'>Potentially Habitable: </span>
                                <span className='right_column'>{potentially_habitable === true ? 'Yes' : 'No'}</span>
                            </div>
                            <div className='items'>
                                <span className='left_column'>Orbit Days: </span>
                                <span className='right_column'>{orbit_days}</span>
                            </div>
                            <button
                                onClick={() => setPlanetEditToggle(prevToggle => !prevToggle)}>
                                Edit
                            </button>
                            <button
                                onClick={() => handleDelete(_id)}>
                                Delete
                            </button>
                        </div>
                        <div className='notes-container'>
                            {notes.map((note, index) =>
                                <Notes
                                    key={index}
                                    _id={_id}
                                    index={index}
                                    notes={notes}
                                    note={note} />)
                            }
                        </div>
                    </div>
                </>
                :
                <>
                    <div className='planet-container'>
                        <div className='planet'>
                            <EditPlanet 
                                planet={planet}
                                notes={notes}
                                _id={_id}
                                handleEdit={handleEdit}
                                setPlanetEditToggle={setPlanetEditToggle} />
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default Planet
