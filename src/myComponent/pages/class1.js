import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'

class Class1 extends Component {

    render() {

        if(sessionStorage.getItem('username') == null) {
            return <Redirect to="/login"/>
        }
        else {
            return(
                <div>
                    <h1>class1</h1>
                </div>
            )
        }
    }
}

export default Class1