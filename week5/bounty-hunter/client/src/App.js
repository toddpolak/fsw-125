import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Bounty from './components/Bounty'
import AddBountyForm from './components/AddBountyForm'

function App() {
    const [bounties, setBounties] = useState([])

    function getBounties() {
        axios.get('/bounties')
            .then(res => setBounties(res.data))
            .catch(err => console.log(err))
    }

    function addBounty(newBounty) {
        axios.post('/bounties', newBounty)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getBounties()
    }, [])
    
    return (
        <div className='bounty-container'>
            <AddBountyForm addBounty={addBounty} />
            {bounties.map(bounty => <Bounty {...bounty} key={bounty._id} />)}
        </div>
    )

}

export default App
