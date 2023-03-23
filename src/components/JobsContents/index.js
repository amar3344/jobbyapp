import {useState, useEffect} from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import JobCard from '../JobsCard/jobscard'
import './index.css'

const token = Cookies.get('jwt_token')

const apiStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

const employmentTypesList = [
  {
    label: 'Full Time',
    employmentTypeId: 'FULLTIME',
  },
  {
    label: 'Part Time',
    employmentTypeId: 'PARTTIME',
  },
  {
    label: 'Freelance',
    employmentTypeId: 'FREELANCE',
  },
  {
    label: 'Internship',
    employmentTypeId: 'INTERNSHIP',
  },
]

const salaryRangesList = [
  {
    salaryRangeId: '1000000',
    label: '10 LPA and above',
  },
  {
    salaryRangeId: '2000000',
    label: '20 LPA and above',
  },
  {
    salaryRangeId: '3000000',
    label: '30 LPA and above',
  },
  {
    salaryRangeId: '4000000',
    label: '40 LPA and above',
  },
]

const JobsContents = () => {
  const [jobsList, setJobsList] = useState([])
  const [currentApiStatus, setCurrentApiStatus] = useState(apiStatus.initial)
  const [employmentType, setEmploymentType] = useState('')
  const [minPackage, setPackage] = useState('')
  const [searchInput, setInput] = useState('')

  const getJobsFromUrl = async () => {
    setCurrentApiStatus(apiStatus.inProgress)
    const url = `https://apis.ccbp.in/jobs?employment_type=${employmentType}&minimum_package=${minPackage}&search=${searchInput}`
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
    } else {
      setCurrentApiStatus(apiStatus.failure)
    }
  }

  useEffect(() => {
    getJobsFromUrl()
  }, [])

  const renderInProgressApiStatus = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#4f46e5" width={50} height={50} />
    </div>
  )

  const getJobListNotEmpty = () => (
    <ul className="job-card-container">
      {jobsList.map(item => (
        <JobCard key={item.id} details={item} />
      ))}
    </ul>
  )

  const getJobListIsEmpty = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-jobs-img.png"
        alt="no jobs"
        width={200}
      />
      <br />
      <h1 style={{color: '#fff'}}>No Jobs Found</h1>
      <p style={{color: '#fff'}}>
        We could not find any jobs. Try other filters
      </p>
    </div>
  )

  const renderSuccessApiStatus = () =>
    jobsList.length === 0 ? getJobListIsEmpty() : getJobListNotEmpty()

  const renderFailureApiStatus = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
        alt="failure view"
        width={200}
      />
      <br />
      <h1>Oops! Something Went Wrong</h1>
      <p>We cannot seem to find the page you are looking for.</p>
      <button type="button" className="home-button" onClick={getJobsFromUrl}>
        Retry
      </button>
    </div>
  )

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

  const getSearchInput = e => {
    setInput(e.target.value)
  }

  const getJobsBySearchInput = () => {
    getJobsFromUrl()
  }

  return (
    <div className="jobs-right-container">
      <div className="search-container">
        <input
          type="search"
          value={searchInput}
          placeholder="search"
          data-testid="searchButton"
          className="search-input"
          onChange={getSearchInput}
        />
        <AiOutlineSearch
          className="search-image"
          onClick={getJobsBySearchInput}
        />
      </div>
      {getDataByApiStatus()}
    </div>
  )
}

export default JobsContents
