import React, { useState } from 'react'
import EditForm from './EditForm'

function Planet(props) {
    const { planet, _id, handleEdit, handleDelete } = props

    console.log('props: ', props)

    console.log('props: (_id) ', _id)


    const [editToggle, setEditToggle] = useState(false)

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
                        <button
                            onClick={() => handleDelete(_id)}>
                            Delete
                        </button>
                    </div>
                </>
                :
                <>
                    <EditForm 
                        planet={planet}
                        _id={_id}
                        handleEdit={handleEdit}
                        setEditToggle={setEditToggle}
                    />
                </>
            }
        </div>
    )
}

export default Planet
