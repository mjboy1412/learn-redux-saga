import React from 'react'
import ReactDOM from 'react-dom'
import * as app from 'modules/app'
import { log } from 'utils/logging'
import reportWebVitals from './reportWebVitals'

const { Root } = app.containers
window.log = log

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
