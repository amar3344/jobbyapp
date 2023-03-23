import {AiFillStar} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import {FaBusinessTime} from 'react-icons/fa'

import './similarjobs.css'

const SimilarJobs = props => {
  const {similarJobDetails} = props

  return (
    <li className="each-similar-jobs-container">
      <div className="app-container">
        <img
          src={similarJobDetails.company_logo_url}
          alt="similar job company logo"
          width={50}
        />
        <div style={{padding: '10px'}}>
          <h3
            style={{
              color: '#fff',
              margin: '0px',
              padding: '0px',
              fontSize: '12px',
            }}
          >
            {similarJobDetails.title}
          </h3>
          <div className="rating-container">
            <AiFillStar style={{color: '#fbbf24'}} />
            <p style={{color: '#fff'}}>{similarJobDetails.rating}</p>
          </div>
        </div>
      </div>

      <h6 style={{color: '#fff'}}>Description</h6>
      <p className="similar-job-description">
        {similarJobDetails.job_description}
      </p>
      <div className="footer">
        <div className="rating-container">
          <GoLocation style={{color: '#fff'}} />
          <p className="location-type">{similarJobDetails.location}</p>
        </div>
        <div className="rating-container">
          <FaBusinessTime style={{color: '#fff'}} />
          <p className="location-type">{similarJobDetails.employment_type}</p>
        </div>
      </div>
    </li>
  )
}

export default SimilarJobs
