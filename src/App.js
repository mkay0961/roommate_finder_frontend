// import React, { Component, createRef } from 'react'
import React, { Component } from 'react'
import './App.css'
import Login from './components/Login'
import { Route, Switch, withRouter } from 'react-router-dom'


class App extends Component {


  render() {

    return (
      <div className="App">
        <Switch>
          <Route exact path="/login" component={Login} />
          />
        </Switch>
      </div>
    )
  }
}



export default withRouter(App)
