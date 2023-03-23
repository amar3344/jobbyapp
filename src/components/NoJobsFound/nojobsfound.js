import './nojobsfound.css'

const NoJobsFound = () => (
  <div className="job-card-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png"
      alt="not found"
      width={150}
    />
    <h6>Page Not Found</h6>
    <p>We are sorry,the page you requested could not be found</p>
  </div>
)

export default NoJobsFound
