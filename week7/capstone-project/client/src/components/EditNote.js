import React, { useState } from 'react'

function EditNote(props) {

    const initInputs = {
        note: props.note
    }

    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e) {
        const { name, value } = e.target

        setInputs(prevInputs => ({ ...prevInputs, [name]: value }))
    }

    function saveNote() {
        props.handleSaveNote(inputs)
        props.setNoteEditToggle(false)
    }

    return (
        <div>
            <div className='edit-note-form'>
                <textarea
                    type='text'
                    name='note'
                    value={inputs.note}
                    onChange={handleChange}
                    placeholder='Note' />
            </div>
            <div>
                <button onClick={saveNote}>
                    Save
                </button>
                <button
                    onClick={() => props.setNoteEditToggle(prevToggle => !prevToggle)}>
                    Cancel
                </button>
            </div>
        </div>
    )
}

export default EditNote
