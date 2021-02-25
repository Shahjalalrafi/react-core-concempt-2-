import React, {Component, useState} from 'react'

function IncreaseData(props) {
    const [goal, setGoal] = useState(0)


    const handleIncrease = () => {
        setGoal(goal + 1)
    }
    return(
        <div>
            <button onClick={handleIncrease}>add goal</button>
            <h4>goal number: {goal} </h4>
            <Total goal={goal}></Total>
        </div>
    )
}

function Total(props) {
    return (
        <div>
            <h5>total: {props.goal}</h5>
        </div>
    )
}
export default IncreaseData