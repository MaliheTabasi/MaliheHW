import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signup from './components/Signup'
import Massenger from './components/Massenger'
import Login from './components/Login';
import Profile from './components/profile';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import conversation from './reducer/conversation'

const store = createStore(conversation)
class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path="/" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/massenger" component={Massenger} />
            <Route path="/profile" component={Profile} />
          </div>
        </Router>
      
      </Provider>
    
    )
  }
};

export default App
