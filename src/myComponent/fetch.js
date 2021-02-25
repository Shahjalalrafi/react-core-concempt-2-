import React, {Component, useEffect, useState} from 'react'

function FetchData() {

    const [users, setUser] = useState([])
    useEffect(()=> {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => setUser(data))
    },[])

    return (
        <div>
            <h2>user ammount: {users.length}</h2>
            <ol>
                {
                    users.map(user => <li>{user.name}</li>)
                }
            </ol>
        </div>
    )

}

export default FetchData

