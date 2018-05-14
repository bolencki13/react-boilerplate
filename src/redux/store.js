import { applyMiddleware, createStore } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import Reducer from 'redux/reducers/'

export const history = createHistory()

const middleware = applyMiddleware(promise(), thunk, routerMiddleware(history))
export default createStore(Reducer, middleware)
