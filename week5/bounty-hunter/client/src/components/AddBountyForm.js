import React, { useState } from 'react'

function AddBountyForm(props) {
    const initInputs = {
        first_name: props.first_name || '',
        last_name: props.last_name || '',
        living: props.living,
        bounty_amount: props.bounty_amount || '',
        type: props.type || ''
    }
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e) {
        const { name, value } = e.target

        setInputs(prevInputs => ({ ...prevInputs, [name]: value }))
    }

    function handleChange_living(e) {
        const living = e.target.value === 'true' ? true : false

        setInputs(prevInputs => ({ ...prevInputs, [e.target.name]: living }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        props.submit(inputs, props._id)
        setInputs(initInputs)
        props.toggle(false) // workaround for issue with edit re-render
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

            <div>

            <label>Bounty Amount:</label>

            <input
                type='number'
                name='bounty_amount'
                value={inputs.bounty_amount}
                onChange={handleChange}
                placeholder='Enter Amount' />
            </div>

            <div>

                <span>

                <label>Living:</label>

                <label>Yes</label>

                <input
                    type='radio'
                    name='living'
                    value='true'
                    checked={inputs.living === true}
                    onChange={handleChange_living} />

                <label>No</label>

                <input
                    type='radio'
                    name='living'
                    value='false'
                    checked={inputs.living === false}
                        onChange={handleChange_living} />

                </span>

                <span>

                    <label>Sith:</label>

                    <input
                        type='radio'
                        name='type'
                        value='Sith'
                        checked={inputs.type === 'Sith'}
                        onChange={handleChange} />

                    <label>Jedi:</label>

                    <input
                        type='radio'
                        name='type'
                        value='Jedi'
                        checked={inputs.type === 'Jedi'}
                            onChange={handleChange} />

                </span>

            </div>

            <button>{props.btnText}</button>

        </form>
    )
}

export default AddBountyForm
