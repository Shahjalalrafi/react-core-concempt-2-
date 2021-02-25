import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Class1 from './class1'
import Class2 from './class2'
import Class3 from './class3'
import Home from './home'
import Login from './login'
import NotFound from './notfound'


class Myroute extends Component {

    render() {

        return (
            <div>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/class1' component={Class1} />
                    <Route exact path='/class2' component={Class2} />
                    <Route exact path='/class3/:username' component={Class3} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        )
    }
}

export default Myroute