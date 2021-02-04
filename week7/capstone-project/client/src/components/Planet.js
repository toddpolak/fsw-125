import React, { useState } from 'react'
import EditPlanet from './EditPlanet'
import Notes from './Notes'

function Planet(props) {
    const { planet, notes, _id, handleEdit, handleDelete } = props

    console.log('props: ', props)

    console.log('props: (_id) ', _id)

    console.log('notes: ', notes)

    const [planetEditToggle, setPlanetEditToggle] = useState(false)

    return (
        <div>

            { !planetEditToggle ?
                <>

                    <div className='planet-container'>

                        <div className='planet'>
                            {planet}
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
                                    note={note}
                                    index={index} />)
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
