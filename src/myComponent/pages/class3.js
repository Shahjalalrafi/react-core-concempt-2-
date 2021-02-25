import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'

class Class3 extends Component {

    constructor({match}) {
        super()

        this.state= {
            myName: match.params.username
        }
    }

    render() {

        if(sessionStorage.getItem('username') == null) {
            return <Redirect to="/login"/>
        }
        else {
            return(
                <div>
                    <h1>{this.state.myName}</h1>
                </div>
            )
        }

        
    }
}

export default Class3