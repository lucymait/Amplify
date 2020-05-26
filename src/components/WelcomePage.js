import React from 'react'
import { Link } from 'react-router-dom'
import 'bulma'


const WelcomePage = () => {
  return <>
  <section className="welcome-page-hero hero is-fullheight">
    <div className="hero-body home">
      <div className="container has-text-centered">
        {/* <h1 className="title has-text-centered homepage-text">
          Amplify
        </h1>
        <button className="button is-normal">
          <Link to={'/music'}>
            {'Enter site'}
          </Link>
        </button> */}
      </div>
    </div>
  </section>
  </>
}

export default WelcomePage