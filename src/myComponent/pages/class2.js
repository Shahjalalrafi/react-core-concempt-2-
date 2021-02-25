import React, {Component} from 'react'
import {Link, Redirect} from 'react-router-dom'


class Class2 extends Component {
    constructor() {
        super()
        this.state = {
            passData: 'Bangladsh'
        }
    }

    render() {
        var para = '/class3/' + this.state.passData

        if(sessionStorage.getItem('username') == null) {
            return <Redirect to="/login"/>
        }
        else {
            return(
                <div>
                    <h1>{para}</h1>
                </div>
            )
        }
    }
    }


export default Class2