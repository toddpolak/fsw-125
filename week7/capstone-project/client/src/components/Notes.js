import React, { useState } from 'react'
import EditNote from './EditNote'

function Notes(props) {

    const { _id, index, note } = props

    console.log('index: ', index)

    const [noteEditToggle, setNoteEditToggle] = useState(false)

    return (

        <div className='notes'>

            { !noteEditToggle ?

                <>

                    <div className='note'>

                        {note}

                        <button
                            onClick={() => setNoteEditToggle(prevToggle => !prevToggle)}>
                            Edit
                        </button>
                        <button>
                            Delete
                        </button>

                    </div>

                </>

                :

                <>

                    <div className='note'>
                        <EditNote
                            note={note}
                            _id={_id}
                            index={index}
                            setNoteEditToggle={setNoteEditToggle} />
                    </div>


                </>

            }



            




        </div>

    )

}

export default Notes
