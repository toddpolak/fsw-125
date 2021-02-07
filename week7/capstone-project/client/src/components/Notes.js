import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { editNote, deleteNote } from '../redux'
import EditNote from './EditNote'

function Notes(props) {
    const dispatch = useDispatch()
    const { _id, index, notes, note } = props
    const [noteEditToggle, setNoteEditToggle] = useState(false)

    function handleSaveNote(note) {
        dispatch(editNote(_id, index, notes, note))
    }

    function handleDeleteNote() {
        dispatch(deleteNote(_id, index, notes))
    }

    return (
        <div className='notes'>
            { !noteEditToggle ?
                <>
                    <div className='note'>
                        {note}
                    </div>
                    <div>
                        <button
                            onClick={() => setNoteEditToggle(prevToggle => !prevToggle)}>
                            Edit
                        </button>
                        <button onClick={handleDeleteNote}>
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
