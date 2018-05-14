import React from 'react'
import ReactDOM from 'react-dom'
import App from 'containers/app'
import registerServiceWorker from 'utils/registerServiceWorker'

import 'stylesheets/index.scss'

registerServiceWorker()

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)
