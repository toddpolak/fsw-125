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

    let cancelBtn

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
        props.toggle(false)
    }

    if (props.showCancel) {
        cancelBtn = <button
            type='button'
            className='blue-btn'
            onClick={() => props.toggle(false)}>
                Cancel
            </button>
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                name='first_name'
                required
                value={inputs.first_name}
                onChange={handleChange}
                placeholder='First Name' />
            <input
                type='text'
                name='last_name'
                required
                value={inputs.last_name}
                onChange={handleChange}
                placeholder='Last Name' />
            <input
                type='number'
                name='bounty_amount'
                value={inputs.bounty_amount}
                onChange={handleChange}
                placeholder='Bounty Amount' />
            <div className='radio'>
                <label>Sith</label>
                <input
                    type='radio'
                    name='type'
                    value='Sith'
                    checked={inputs.type === 'Sith'}
                    onChange={handleChange} />
                <label>Jedi</label>
                <input
                    type='radio'
                    name='type'
                    value='Jedi'
                    checked={inputs.type === 'Jedi'}
                    onChange={handleChange} />
            </div>
            <div className='radio radio-living'>
                <div>
                    <label>Living:</label>
                </div>
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
            </div>
            <div className='btn-area'>
                <button className='blue-btn'>{props.btnText}</button>
                {cancelBtn}
            </div>
        </form>
    )
}

export default AddBountyForm
