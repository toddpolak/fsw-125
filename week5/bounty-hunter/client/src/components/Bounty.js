import React, { useState } from 'react'
import AddBountyForm from './AddBountyForm'

function Bounty(props) {
    const { first_name, last_name, living, bounty_amount, type, _id, deleteBounty } = props
    const [editToggle, setEditToggle] = useState(false)

    // workaround for issue with edit re-render
    function setToggle(toggle) {
        setEditToggle(toggle)
    }

    return (
        <div className='bounty'>
            { !editToggle ?
                <>
                    <h1>{`Name: ${first_name} ${last_name}`}</h1>
                    <p>Living: {living === true ? 'Yes' : 'No'}</p>
                    <p>Bounty Amount: {bounty_amount}</p>
                    <p>Type: {type}</p>
                    <span className='btn-area'>
                        <button
                            className='btn'
                            onClick={() => deleteBounty(_id)}>
                                Delete
                        </button>
                    </span>
                    <button
                        className='btn'
                        onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                            Edit
                    </button>
                 </>
            :
                <>
                    <AddBountyForm
                        first_name={first_name}
                        last_name={last_name}
                        living={living}
                        bounty_amount={bounty_amount}
                        type={type}
                        _id={_id}
                        btnText='Save'
                        submit={props.editBounty}
                        toggle={setToggle} // workaround for issue with edit re-render
                    />
                    <span className='btn-area'>
                        <button
                            className='btn'
                            onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                                Cancel
                         </button>
                    </span>
                </>
            }
        </div>
    )
}

export default Bounty
