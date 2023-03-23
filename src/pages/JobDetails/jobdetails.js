import {useState, useEffect} from 'react'
import Loader from 'react-loader-spinner'
import {AiFillStar} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import {FaBusinessTime} from 'react-icons/fa'
import {FiExternalLink} from 'react-icons/fi'

import Cookies from 'js-cookie'
import Navbar from '../../components/Navbar'
import SimilarJobs from '../../components/SimilarJobs/similarjobs'

import './jobdetails.css'

const jwtToken = Cookies.get('jwt_token')

const apiStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

const JobDetails = props => {
  const [jobObject, setJobObject] = useState({})
  const [similarJobs, setSimilarJobs] = useState([])
  const [currentApiStatus, setCurrentApiStatus] = useState(apiStatus.initial)

  const {match} = props
  const {params} = match
  const {id} = params
  console.log(similarJobs)

  const getSuccessFullJobDetails = () => (
    <div className="job-details-container">
      <Navbar />
      <div className="app-description-container">
        <div className="app-container">
          <img
            src={jobObject.company_logo_url}
            alt="job details company logo"
            width={50}
          />
          <div style={{padding: '10px'}}>
            <h3 style={{color: '#fff', margin: '0px', padding: '0px'}}>
              {jobObject.title}
            </h3>
            <div className="rating-container">
              <AiFillStar style={{color: '#fbbf24'}} />
              <p style={{color: '#fff'}}>{jobObject.rating}</p>
            </div>
          </div>
        </div>
        <div className="location-jobtype-package">
          <div>
            <div className="rating-container">
              <GoLocation style={{color: '#fff'}} />
              <p>{jobObject.location}</p>
            </div>
            <div className="rating-container">
              <FaBusinessTime style={{color: '#fff'}} />
              <p>{jobObject.employment_type}</p>
            </div>
          </div>
          <div className="rating-container">
            <p>{jobObject.package_per_annum}</p>
          </div>
        </div>
        <hr />
        <div className="description-container">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <h2 style={{margin: '5px', padding: '0px', color: '#fff'}}>
              Description
            </h2>
            <a
              href={jobObject.company_website_url}
              style={{textDecoration: 'none'}}
            >
              Visit <FiExternalLink />
            </a>
          </div>
          <p className="job-description">{jobObject.job_description}</p>
          <h5 style={{color: '#fff'}}>Skills</h5>
          <ul className="skills-container">
            {jobObject.skills.map(eachSkills => (
              <li className="each-skill-container">
                <img
                  src={eachSkills.image_url}
                  alt={eachSkills.name}
                  className="skills-image"
                />
                <h6 className="skill-name">{eachSkills.name}</h6>
              </li>
            ))}
          </ul>
          <h4 style={{color: '#fff'}}>Life at Company</h4>
          <div className="life-at-company">
            <p>{jobObject.life_at_company.description}</p>
            <img
              src={jobObject.life_at_company.image_url}
              alt="life at company"
              className="life-at-company-image"
            />
          </div>
        </div>
      </div>
      <h3 className="similar-jobs-heading">Similar Jobs</h3>
      <ul>
        {similarJobs.map(eachJob => (
          <SimilarJobs similarJobDetails={eachJob} key={eachJob.id} />
        ))}
      </ul>
    </div>
  )

  const getJobDetailsById = async () => {
    setCurrentApiStatus(apiStatus.inProgress)
    const url = `https://apis.ccbp.in/jobs/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const res = await fetch(url, options)
    const data = await res.json()
    //   console.log(data)
    if (res.ok === true) {
      setJobObject(data.job_details)
      setSimilarJobs(data.similar_jobs)
      setCurrentApiStatus(apiStatus.success)
    } else {
      setCurrentApiStatus(apiStatus.failure)
    }
  }

  useEffect(() => {
    getJobDetailsById()
  }, [])

  const getLoaderComponent = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" width={50} height={50} color="#fff" />
    </div>
  )

  const getFailureJobDetailsView = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
        alt="failure view"
        width={200}
      />
      <br />
      <h1>Oops! Something Went Wrong</h1>
      <p>We cannot seem to find the page you are looking for.</p>
      <button type="button" className="home-button" onClick={getJobDetailsById}>
        Retry
      </button>
    </div>
  )

  const renderJobDetails = () => {
    switch (currentApiStatus) {
      case apiStatus.inProgress:
        return getLoaderComponent()
      case apiStatus.success:
        return getSuccessFullJobDetails()
      case apiStatus.failure:
        return getFailureJobDetailsView()
      default:
        return null
    }
  }
  return <div className="job-details-react-app">{renderJobDetails()}</div>
}
export default JobDetails
