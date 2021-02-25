import React, {Component} from 'react'
import { Redirect } from 'react-router-dom'

class Home extends Component {

    render() {

        if(sessionStorage.getItem('username') == null) {
            return <Redirect to="/login"/>
        }
        else {
            return(
                <div>
                    <h1>home</h1>
                </div>
            )
        }
    }
}

export default Home