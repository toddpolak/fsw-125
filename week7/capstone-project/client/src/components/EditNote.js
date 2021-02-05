import React, { useState } from 'react'

function EditNote(props) {

    const initInputs = {
        //_id: props._id,
        note: props.note
    }

    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e) {
        const { name, value } = e.target

        setInputs(prevInputs => ({ ...prevInputs, [name]: value }))
    }

    function saveNote() {

        //console.log('saveNote: ', inputs, props._id, props.index)

        //props.handleSaveNote(props.index, inputs)
        props.handleSaveNote(inputs)

        props.setNoteEditToggle(false)
    }

    return (
        <div>
            <input
                type='text'
                name='note'
                value={inputs.note}
                onChange={handleChange}
                placeholder='Note' />
            <button onClick={saveNote}>
                Save
            </button>
            <button
                onClick={() => props.setNoteEditToggle(prevToggle => !prevToggle)}>
                Cancel
            </button>
        </div>
    )
}

export default EditNote