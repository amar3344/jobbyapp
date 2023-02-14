import Navbar from '../../components/Navbar'

import './index.css'

const Home = () => (
  <div className="home-container">
    <div className="navbar-container">
      <Navbar />
    </div>
    <div className="content-container">
      <h1>Find The Jobs That Fits Your Life</h1>
      <p>
        Millions of people are searching for jobs,salary,information,company
        reviews.Find the job that fit your abilities and potential
      </p>
    </div>
  </div>
)

export default Home
