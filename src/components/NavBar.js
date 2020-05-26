import React from 'react'
import { Link } from 'react-router-dom'
import 'bulma'

const NavBar = () => {
  return <nav className="navbar">
    <div className="container">
      <div className="navbar-menu is-active">
        <div className="navbar-end">
          <div className="navbar-item">
            <Link to="/">Home</Link>
          </div>
          <div className="navbar-item">
            <Link to="/register">Register</Link>
          </div>
          <div className="navbar-item">
            <Link to="/login">Login</Link>
          </div>
          <div className="navbar-item">
            <Link to="/login">Logout</Link>
          </div>
        </div>
      </div>
    </div>
  </nav>
}

export default NavBar