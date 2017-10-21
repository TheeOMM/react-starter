import React from 'react'
import ReactDOM from 'react-dom'

// Import styles
import 'normalize.css/normalize.css'
import './src/styles/styles.scss'

// Import routes config file
import routes from './src/routes'

ReactDOM.render(routes, document.getElementById('app'))
