import React, { useState } from 'react'

function AddBountyForm(props) {
    const initInputs = {
        first_name: props.first_name || '',
        last_name: props.last_name || ''
    }
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e) {
        const { name, value } = e.target
        setInputs(prevInputs => ({ ...prevInputs, [name]: value }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        props.submit(inputs, props._id)
        setInputs(initInputs)

        props.toggle(false)

    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                name='first_name'
                value={inputs.first_name}
                onChange={handleChange}
                placeholder='First Name' />
            <input
                type='text'
                name='last_name'
                value={inputs.last_name}
                onChange={handleChange}
                placeholder='Last Name' />
            <button>{props.btnText}</button>
        </form>
    )
}

export default AddBountyForm
