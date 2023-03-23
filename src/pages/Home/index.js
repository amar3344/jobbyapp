import {Link} from 'react-router-dom'
import Navbar from '../../components/Navbar'

import './index.css'

const Home = () => (
  <div className="home-container">
    <div className="navbar-container">
      <Navbar />
    </div>
    <div className="content-container">
      <h1>Find The Job That Fits Your Life</h1>
      <p>
        Millions of people are searching for jobs,salary,information,company
        reviews.Find the job that fit your abilities and potential
      </p>
      <Link to="/jobs">
        <button type="button" className="home-button">
          Find Jobs
        </button>
      </Link>
    </div>
    <div className="mobile-content-container">
      <h1 style={{color: '#fff'}}>Find The Job That Fits Your Life</h1>
      <p style={{color: '#fff'}}>
        Millions of people are searching for jobs,salary,information,company
        reviews.Find the job that fit your abilities and potential
      </p>
      <Link to="/jobs">
        <button type="button" className="home-button">
          Find Jobs
        </button>
      </Link>
    </div>
  </div>
)

export default Home
