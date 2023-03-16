import Cookies from 'js-cookie'
import {AiFillStar} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import {FaBusinessTime} from 'react-icons/fa'

import './jobcard.css'
import JobDetails from '../../pages/JobDetails/jobdetails'

const jwtToken = Cookies.get('jwt_token')

const JobsCard = props => {
  const {details} = props
  //   console.log(details)

  const getSuccessJobDetails = data => {
    const jobDescription = data
    // console.log(jobDescription)
    return <JobDetails fullDetails={jobDescription} />
  }

  const getFailureJobDetails = () => {}

  const onClickGetJobId = async () => {
    const {id} = details
    // console.log(id)
    const url = `https://apis.ccbp.in/jobs/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearrer ${jwtToken}`,
      },
    }

    const res = await fetch(url, options)
    const data = await res.json()
    if (res.ok === true) {
      getSuccessJobDetails(data)
    } else {
      getFailureJobDetails()
    }
  }

  return (
    <li className="job-card">
      <button
        type="button"
        className="list-job-button"
        onClick={onClickGetJobId}
      >
        <div className="job-header-container">
          <div className="job-name-image">
            <img
              src={details.company_logo_url}
              alt={details.employment_type}
              className="image-logo"
            />
            <div className="title-rating">
              <h3>{details.title}</h3>
              <div className="rating-container">
                <AiFillStar className="star-image" />
                <p>{details.rating}</p>
              </div>
            </div>
          </div>
          <div className="location-jobtype-package">
            <div>
              <div className="rating-container">
                <GoLocation style={{color: '#fff'}} />
                <p>{details.location}</p>
              </div>
              <div className="rating-container">
                <FaBusinessTime style={{color: '#fff'}} />
                <p>{details.employment_type}</p>
              </div>
            </div>
            <div className="rating-container">
              <p>{details.package_per_annum}</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="description-container">
          <h2>Description</h2>
          <p>{details.job_description}</p>
        </div>
      </button>
    </li>
  )
}

export default JobsCard
