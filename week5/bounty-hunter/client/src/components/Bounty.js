import React, { useState } from 'react'
import AddBountyForm from './AddBountyForm'

function Bounty(props) {
    const { first_name, last_name, type, _id, deleteBounty } = props
    const [editToggle, setEditToggle] = useState(false)

    function handleToggle(toggle) {
        setEditToggle(toggle)
    }

    return (
        <div className='bounty'>
            { !editToggle ?
                <>
                    <h1>{`Name: ${first_name} ${last_name}`}</h1>
                    <p>Type: {type}</p>
                    <button
                        className='delete-btn'
                        onClick={() => deleteBounty(_id)}>
                                Delete
                        </button>
                    <button
                        className='edit-btn'
                        onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                        Edit
                    </button>
                 </>
            :
                <>
                    <AddBountyForm
                        first_name={first_name}
                        last_name={last_name}
                        _id={_id}
                        btnText='Save'
                        submit={props.editBounty}

                        toggle={handleToggle}

                    />
                    <button
                        onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                        Cancel
                     </button>
                </>
            }
        </div>
    )
}

export default Bounty
