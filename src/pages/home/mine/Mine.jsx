import React, { Component } from 'react'

import { MineWrap } from './styled-mine'
import Rejister from './Rejister'
import Login from './Login'
import { Route, Switch, Redirect } from 'react-router-dom'
export default class Mine extends Component {
    render() {
        return (
            <MineWrap>
                <Switch>
                    <Route
                        path="/mine/login"
                        render={() => (
                            <Login></Login>
                        )}
                    />
                    <Route
                        path="/mine/rejister"
                        render={() => (
                            <Rejister></Rejister>
                        )}
                    />
                    <Redirect
                        from="/"
                        to="/mine/rejister"
                    />
                </Switch>
            </MineWrap>

        )
    }
}
