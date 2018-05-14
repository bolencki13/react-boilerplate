import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from 'redux/store'
import HomePage from 'containers/home'

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <HomePage/>
      </Provider>
    )
  }
}

export default App
