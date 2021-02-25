import React, {Component} from 'react'

function AllData(props) {
    const design = {
        backgroundColor: 'black',
        color: 'red',
        border: '2px solid green'
    }
    
    return(
        <div style={design}>
            <h1>i am footboler {props.name}</h1>
            <h3>i got ${props.sellary || 200}M per year</h3>
        </div>
    )
}

export default AllData