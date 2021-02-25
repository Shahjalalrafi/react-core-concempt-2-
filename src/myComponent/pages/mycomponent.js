import React, {Component} from 'react'
import {Link, NavLink} from 'react-router-dom'

class MyComponent extends Component {

    render() {

        return(
            <div>
                <ul>
                    <li><NavLink exact activeStyle = {{color:'red'}} to='/'>Home</NavLink></li>
                    <li><NavLink exact activeStyle = {{color:'red'}} to='/class1'>class1</NavLink></li>
                    <li><NavLink exact activeStyle = {{color:'red'}} to='/class2'>class 2</NavLink></li>
                    <li><NavLink exact activeStyle = {{color:'red'}} to='/class3'>class3</NavLink></li>
                </ul>
            </div>
        )
    }
}

export default MyComponent