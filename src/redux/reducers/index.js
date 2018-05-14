import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import HelloWorld from 'redux/reducers/helloWorld'

export default combineReducers({
  HelloWorld,
  router: routerReducer
})
