import React from 'react'

function Bounty(props) {
    const { first_name, last_name, type, _id } = props
    return (
        <div className='bounty'>
            <h1>{`Title: ${first_name} ${last_name}`}</h1>
            <p>Type: {type}</p>
        </div>
    )
}

export default Bounty
