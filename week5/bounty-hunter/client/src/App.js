import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
    const [bounties, setBounties] = useState([])

    useEffect(() => {
        axios.get('/bounties')
            .then(res => console.log(res))
    }, [])
    
    return (
        <div>React!</div>
    )

}

export default App
