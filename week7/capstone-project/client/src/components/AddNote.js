import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNote } from '../redux'

function AddNote(props) {

    const dispatch = useDispatch()
    const { _id, notes } = props

    const initInput = {
        note: ''
    }
    
    const [input, setInput] = useState(initInput)

    function handleChange(e) {
        const { name, value } = e.target

        setInput(prevInput => ({ ...prevInput, [name]: value }))
    }

    function handleSave() {

        console.log('handleSave: ', input)

        dispatch(addNote(_id, notes, input))
        setInput(initInput)
    }

    return (
        <div className='add-note-form'>
            <div>
                <textarea
                    type='text'
                    name='note'
                    value={input.note}
                    onChange={handleChange}
                    placeholder='Notes' />
            </div>
            <div>
                <button onClick={handleSave}>
                    Add Notes
                </button>
            </div>
        </div>
    )

}

export default AddNote