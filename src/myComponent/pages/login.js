import React, {Component} from 'react'

class Login extends Component {

    Login = () => {
        sessionStorage.setItem('username', 'rupom')
    }

    Logout = () => {
        sessionStorage.clear()
    }

    render() {

        return(
            <div>
                <button onClick={this.Login}>Login</button>
                <button onClick={this.Logout}>Logout</button>
            </div>
        )
    }
}

export default Login