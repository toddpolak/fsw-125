import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { editNote } from '../redux'
import EditNote from './EditNote'

function Notes(props) {

    const dispatch = useDispatch()

    //const { _id, index, note, handleSaveNote } = props
    const { _id, index, notes, note } = props

    //console.log('index: ', index)

    const [noteEditToggle, setNoteEditToggle] = useState(false)

    function handleSaveNote(note) {

        //console.log('handleSaveNote: ', note)

        dispatch(editNote(_id, index, notes, note))

    }

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
                            setNoteEditToggle={setNoteEditToggle}
                            handleSaveNote={handleSaveNote} />
                    </div>


                </>

            }



            




        </div>

    )

}

export default Notes
