import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import WelcomePage from './components/WelcomePage'
import Navbar from './components/NavBar'


import 'bulma'
import './styles/style.scss'



const App = () => {
  return <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path = {'/'} component={WelcomePage}/>
    </Switch>
  </BrowserRouter>
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)