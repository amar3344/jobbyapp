import {useState, useEffect} from 'react'
import Loader from 'react-loader-spinner'
import {AiFillStar} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import {FaBusinessTime} from 'react-icons/fa'
import {FiExternalLink} from 'react-icons/fi'

import Cookies from 'js-cookie'
import Navbar from '../../components/Navbar'

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
  //   console.log(id)

  const getSuccessFullJobDetails = () => {
    console.log(jobObject)

    return (
      <>
        <Navbar />
        <div>
          <div className="app-container">
            <img
              src={jobObject.company_logo_url}
              alt={jobObject.title}
              width={50}
            />
            <div>
              <h3>{jobObject.title}</h3>
              <AiFillStar />
              <p>{jobObject.rating}</p>
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
          </div>
          <hr />
          <div className="description-container">
            <>
              <h1>Description</h1>
              <a href={jobObject.company_website_url}>
                Visit <FiExternalLink />
              </a>
            </>
          </div>
        </div>
      </>
    )
  }

  useEffect(() => {
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
    getJobDetailsById()
  }, [])

  const getLoaderComponent = () => (
    <div>
      <Loader type="ThreeDots" width={50} height={50} color="#fff" />
    </div>
  )

  const getFailureJobDetailsView = () => {}

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
  return renderJobDetails()
}
export default JobDetails
