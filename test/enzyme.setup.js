import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Provider } from 'react-redux'
import store from 'redux/store'

Enzyme.configure({
  adapter: new Adapter()
})

class MockStore extends Component {
  render () {
    return (
      <Provider store={store}>
        { this.props.children }
      </Provider>
    )
  }
}

MockStore.propTypes = {
  children: PropTypes.object
}

global.MockStore = MockStore
