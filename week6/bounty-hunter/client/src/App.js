import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import axios from 'axios'
import Bounty from './components/Bounty'
import AddBountyForm from './components/AddBountyForm'

function App() {
    const [bounties, setBounties] = useState([])

    const [filterValue, setFilterValue] = useState()

    const filters = [
        {
            value: 'jedi',
            label: 'Jedis'
        },
        {
            value: 'sith',
            label: 'Siths'
        },
        {
            value: 'all',
            label: 'All'
        }
    ]

    function getBounties() {
        axios.get('/bounties')
            .then(res => setBounties(res.data))
            .catch(err => console.log(err))
    }

    function filter(e) {
        const filter = e.value

        filter === 'all' 
            ? getBounties()
            : axios.get(`/bounties/bounty?type=${filter}`)
                .then(res => setBounties(res.data))
                .catch(err => console.log(err))

        setFilterValue(e)
    }

    function addBounty(newBounty) {
        axios.post('/bounties', newBounty)
            .then(res => {
                setBounties(prevBounties => [...prevBounties, res.data])
                console.log(res)
            })
            .catch(err => console.log(err))
    }

    function deleteBounty(bountyId) {
        axios.delete(`/bounties/${bountyId}`)
            .then(res => {
                setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyId))
                console.log(res)
            })
            .catch(err => console.log(err))
    }

    function editBounty(updates, bountyId) {
        axios.put(`/bounties/${bountyId}`, updates)
            .then(res => {
                setBounties(prevBounties => prevBounties.map(bounty => bounty._id !== bountyId ? bounty : res.data))
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
                toggle={() => {}}
            />
            <div className='filter'>
                <Select
                    placeholder='- Filter -'
                    value={filterValue}
                    options={filters}
                    onChange={filter}
                    className='filter-select'
                />
            </div>
            <div className='bounties'>
                {
                    bounties.map((bounty, index) =>
                        <Bounty
                            {...bounty}
                            key={index}
                            deleteBounty={deleteBounty}
                            editBounty={editBounty}/>)
                }
            </div>
        </div>
    )
}

export default App
