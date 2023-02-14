import Navbar from '../../components/Navbar'
import SideNav from '../../components/SideNav'
import JobsContents from '../../components/JobsContents'

import './index.css'

const Jobs = () => (
  <div className="jobs-container">
    <div className="navbar-container">
      <Navbar />
    </div>
    <div className="job-content-container">
      <SideNav />
      <JobsContents />
    </div>
  </div>
)

export default Jobs
