import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router'
import store, { history } from 'redux/store'
import HomePage from 'containers/home'

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route exact path="/" component={HomePage}/>
        </Router>
      </Provider>
    )
  }
}

export default App
