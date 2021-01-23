import React, { useState, useEffect } from 'react'
import axios from 'axios'
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
            .then(res => {
                setBounties(prevBounties => [...prevBounties, res.data])
                console.log(res) // log the response to the console
            })
            .catch(err => console.log(err))
    }

    function deleteBounty(bountyId) {
        axios.delete(`/bounties/${bountyId}`)
            .then(res => {
                setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyId))
                console.log(res) // log the response to the console
            })
            .catch(err => console.log(err))
    }

    function editBounty(updates, bountyId) {
        axios.put(`/bounties/${bountyId}`, updates)
            .then(res => {
                setBounties(prevBounties => prevBounties.map(bounty => bounty._id !== bountyId ? bounty : res.data))

                // the SetBounties is supposed to trigger a re-render, but it doesn't
                // most likely because we are not really changing the structure of the array (just values)
                // https://stackoverflow.com/questions/56266575/why-is-usestate-not-triggering-re-render

                // tried this:
                //let newBounties = [...bounties]
                //const modifiedBounties = newBounties.map(bounty => bounty._id !== bountyId ? bounty : res.data)
                //setBounties(modifiedBounties)

                // also tried this:
                //setBounties([...modifiedBounties])

                console.log(res) // log the response to the console
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getBounties()
    }, [])
    
    return (
        <div className='bounty-container'>
            <AddBountyForm
                submit={addBounty}
                btnText={'Add Bounty'}
                toggle={() => {}} // workaround for issue with edit re-render
            />
            {
                bounties.map(bounty =>
                    <Bounty
                        {...bounty}
                        key={bounty._id}
                        deleteBounty={deleteBounty}
                        editBounty={editBounty}/>)
            }
        </div>
    )
}

export default App
