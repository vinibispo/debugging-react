import React from 'react'
import ReactDOM from 'react-dom'
import { Main } from './main'

if (process.env.NODE_ENV !== 'production') {
  const axe = require('@axe-core/react')
  axe(React, ReactDOM, 1000)
}
ReactDOM.render(<Main />, document.getElementById('wrapper'))
