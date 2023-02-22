import {useState, useEffect} from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import JobCard from '../JobsCard/jobscard'
import './index.css'

const token = Cookies.get('jwt_token')

const JobsContents = () => {
  const [jobsList, setJobsList] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getJobsFromUrl = async () => {
      const url = 'https://apis.ccbp.in/jobs'
      const options = {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }

      const res = await fetch(url, options)
      const data = await res.json()
      if (res.ok === true) {
        console.log(data)
        setJobsList(data.jobs)
        setIsLoading(false)
      }
    }

    getJobsFromUrl()
  })

  return (
    <div className="jobs-right-container">
      <div className="search-container">
        <input type="search" placeholder="search" className="search-input" />
        <AiOutlineSearch className="search-image" />
      </div>
      <div>
        {isLoading ? (
          <div>
            <Loader type="ThreeDots" color="#4f46e5" width={50} height={50} />
          </div>
        ) : (
          <ul className="job-card-container">
            {jobsList.map(item => (
              <JobCard key={item.id} details={item} />
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default JobsContents
