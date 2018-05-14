import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Provider } from 'react-redux'
import store from 'redux/store'

Enzyme.configure({
  adapter: new Adapter()
})

global.MockStore = ({children}) => {
  return (
    <Provider store={store}>
      { children }
    </Provider>
  )
}
