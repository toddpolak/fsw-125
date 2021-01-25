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
                toggle={() => { }} // workaround for issue with edit re-render
            />
            {
                bounties.map((bounty, index) =>
                    <Bounty
                        {...bounty}
                        key={index}
                        deleteBounty={deleteBounty}
                        editBounty={editBounty}/>)
            }
        </div>
    )
}

export default App

// https://bryanuniversity.instructuremedia.com/embed/734fabe0-431c-4693-9d4e-09c286165347
// 11:55 into the video ... notice the key set on the Movie component. "movie.title"

// Because he's using the movie title as the key when he maps the array to the component render,
// you can edit the movie record as long as you change the title every time and
// React does the component re-rendrer.

// If you try to edit anything other than the title, you will have the re-render issue.
// I used _id, or the map index as the key and the re-render never worked.
// Using the "title" etc. as the key gives a warning if you create multiple records with the same title
// because the keys are not unique.

// 15:05 into the video ... he talks about the happy side effect of the component re-redering because it has new data.
// This isn't really correct, because the array (structure) essentially does't change, so the re-render really doesn't work.
// It only worked for him because of his "key" assignment on the movie component.