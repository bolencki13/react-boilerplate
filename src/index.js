import React from 'react'
import ReactDOM from 'react-dom'
import HomePage from 'containers/home'
import registerServiceWorker from './registerServiceWorker'

import 'stylesheets/index.scss'

registerServiceWorker()

ReactDOM.render(
  <HomePage/>,
  document.getElementById('root')
)
