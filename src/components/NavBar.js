import React from 'react'
import { Link, withRouter } from 'react-router-dom'

class NavBar extends React.Component {

  constructor() {
    super()
    this.state = {
      search: ''
    }
  }

  handleChange(event) {
    this.setState({ search: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.history.push('/search', this.state.search)
    location.reload()
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({ navMobileOpen: false })
    }
  }

  render() {
    return <nav className="navbar">
      <div className="navbar-start">
        <Link className="navbar-item" to="/">Home</Link>
        <Link className="navbar-item" to="/charts">Charts</Link>

        <div className="navbar-item">
          <form onSubmit={(event) => this.handleSubmit(event)}>
            <div className="control is-expanded">
              <input
                onChange={(event) => this.handleChange(event)}
                className="input is-medium"
                type="text"
                placeholder="Enter an Artist, Album or Song"
                value={this.state.search}
              />
            </div>
            <div className="control">
            </div>
          </form>
        </div>
      </div>
    </nav >

  }

}

export default withRouter(NavBar)