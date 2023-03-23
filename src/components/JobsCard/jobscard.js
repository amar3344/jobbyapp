import {Link} from 'react-router-dom'
import {AiFillStar} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import {FaBusinessTime} from 'react-icons/fa'

import './jobcard.css'

const JobsCard = props => {
  const {details} = props
  //   console.log(details)
  const {id} = details

  return (
    <Link to={`/jobs/${id}`} style={{textDecoration: 'none'}}>
      <li className="job-card">
        <div className="job-header-container">
          <div className="job-name-image">
            <img
              src={details.company_logo_url}
              alt="company logo"
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
      </li>
    </Link>
  )
}

export default JobsCard
