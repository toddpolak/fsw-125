import React, { useState } from 'react'
import EditPlanet from './EditPlanet'
import AddNote from './AddNote'
import Notes from './Notes'

function Planet(props) {
    const {
        planet, host_star, avg_temp, distance_to_earth, potentially_habitable, orbit_days, imgUrl, 
        notes, _id, handleEdit, handleDelete
    } = props
    const [planetEditToggle, setPlanetEditToggle] = useState(false)

    return (
            <div className='planet-container'>
                {!planetEditToggle ?
                    <>
                        <div className='planet'>
                            <div>
                                <div className='items'>
                                    <span className='left-column'>Planet: </span>
                                    <span><h2>{planet}</h2></span>
                                </div>
                                <div className='items'>
                                    <span className='left-column'>Host Star: </span>
                                    <span>{host_star}</span>
                                </div>
                                <div className='items'>
                                    <span className='left-column'>Average Temp: </span>
                                    <span>{avg_temp}</span>
                                </div>
                                <div className='items'>
                                    <span className='left-column'>Distance to Earth: </span>
                                    <span>{distance_to_earth}</span>
                                </div>
                                <div className='items'>
                                    <span className='left-column'>Potentially Habitable: </span>
                                    <span>{potentially_habitable === true ? 'Yes' : 'No'}</span>
                                </div>
                                <div className='items'>
                                    <span className='left-column'>Orbit Days: </span>
                                    <span>{orbit_days}</span>
                                </div>
                                <div className='items'>
                                    <span><img src={imgUrl} alt='' /></span>
                                </div>
                            </div>
                            <div>
                                <button
                                    onClick={() => setPlanetEditToggle(prevToggle => !prevToggle)}>
                                    Edit
                            </button>
                                <button
                                    onClick={() => handleDelete(_id)}>
                                    Delete
                            </button>
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <div className='planet'>
                            <EditPlanet
                                planet={planet}
                                host_star={host_star}
                                avg_temp={avg_temp}
                                distance_to_earth={distance_to_earth}
                                potentially_habitable={potentially_habitable}
                                orbit_days={orbit_days}
                                imgUrl={imgUrl}
                                notes={notes}
                                _id={_id}
                                handleEdit={handleEdit}
                                setPlanetEditToggle={setPlanetEditToggle} />
                        </div>
                    </>
                }
                <div className='notes-container'>
                    <div>
                        <AddNote
                            _id={_id}
                            notes={notes}
                        />
                    </div>
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
        )
}

export default Planet
