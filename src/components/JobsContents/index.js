import {useState, useEffect} from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import JobCard from '../JobsCard/jobscard'
import NoJobsFound from '../NoJobsFound/nojobsfound'
import './index.css'

const token = Cookies.get('jwt_token')

const apiStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

const JobsContents = () => {
  const [jobsList, setJobsList] = useState([])
  const [currentApiStatus, setCurrentApiStatus] = useState(apiStatus.initial)

  useEffect(() => {
    const getJobsFromUrl = async () => {
      setCurrentApiStatus(apiStatus.inProgress)
      const url = 'https://apis.ccbp.in/jobs'
      const options = {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }

      const res = await fetch(url, options)
      const data = await res.json()
      //   console.log(res)
      if (res.ok === true) {
        // console.log(data)
        setJobsList(data.jobs)
        setCurrentApiStatus(apiStatus.success)
      }
    }

    getJobsFromUrl()
  }, [])

  const renderInProgressApiStatus = () => (
    <div>
      <Loader type="ThreeDots" color="#4f46e5" width={50} height={50} />
    </div>
  )

  //   const getJobDetailsById = data => {
  //     const details = data.job_details
  //     const jobs = data.similar_jobs

  //     return <JobDetails key={details.id} details={details} jobs={jobs} />
  //   }

  const renderSuccessApiStatus = () => (
    <ul className="job-card-container">
      {jobsList.map(item => (
        <JobCard key={item.id} details={item} />
      ))}
    </ul>
  )

  const renderFailureApiStatus = () => {}

  const getDataByApiStatus = () => {
    switch (currentApiStatus) {
      case apiStatus.inProgress:
        return renderInProgressApiStatus()
      case apiStatus.success:
        return renderSuccessApiStatus()
      case apiStatus.failure:
        return renderFailureApiStatus()
      default:
        return ''
    }
  }

  return (
    <div className="jobs-right-container">
      <div className="search-container">
        <input type="search" placeholder="search" className="search-input" />
        <AiOutlineSearch className="search-image" />
      </div>
      {getDataByApiStatus()}
    </div>
  )
}

export default JobsContents
