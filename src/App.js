import React, { Component } from 'react'
import Layout from 'pages/home/Layout'
import { Provider } from 'react-redux'
import store from './store/index'
import 'assets/styles/reset.css'
import CallUs from 'pages/home/active/CallUs'
import About from 'pages/home/active/About'
import Mine from 'pages/home/mine/Mine'
import List from 'pages/home/list/List'
import { Route, Switch, Redirect } from 'react-router-dom'
export default class App extends Component {
  render() {
    return (
      <Provider store = {store}>
         <Switch>
          <Route 
            path="/layout"
            render={() => (
              <Layout></Layout>
            )}
          />
           <Route
            path="/mine"
            render={() => (
              <Mine></Mine>
            )}
          />  
          <Route
            path="/callus"
            render={() => (
              <CallUs></CallUs>
            )}
          />
           <Route
            path="/about"
            render={() => (
              <About></About>
            )}
          />
           <Route
            path="/list"
            render={() => (
              <List></List>
            )}
          />
          <Redirect
            from="/"
            to="/layout"
          />
        </Switch>
      </Provider>
    )
  }
}
