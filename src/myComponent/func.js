import React, { useState } from 'react'

function Func() {

    const [name, setName] = useState(0)

    const change = () => {
        setName(name + 1)
    }

    return(
        <div>
            <h1>{name}</h1>
            <button onClick= {change}>change</button>
        </div>
    )
}

export default Func