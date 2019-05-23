import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

var name1 = 'Mali'
var name2 = 'hani'
const greeting = (
  <div>
    <h1>hi {name1}</h1>
    <h1>hi {name2}</h1>
  </div>
)
function Welcome (props) {
  return (
    <div>
      <h1> salam {props.firstname + ' ' + props.lastname}</h1>
    </div>
  )
}
function ParentWelcome () {
  return (
    <div>
      <Welcome firstname='malihe' lastname='tabasi' />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
