import {useEffect, useState} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import './userprofile.css'

const token = Cookies.get('jwt_token')

const apiStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

const UserProfile = () => {
  const [profileDetails, setProfileDetails] = useState('')
  const [currentApiStatus, setCurrentApiStatus] = useState(apiStatus.initial)

  const getUserProfile = async () => {
    setCurrentApiStatus(apiStatus.inProgress)
    const url = 'https://apis.ccbp.in/profile'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      setProfileDetails(data.profile_details)
      //   console.log(profileDetails)
      setCurrentApiStatus(apiStatus.success)
    } else {
      setCurrentApiStatus(apiStatus.failure)
    }
  }

  useEffect(() => {
    getUserProfile()
  }, [])

  const renderLoader = () => (
    <div>
      <Loader type="ThreeDots" color="#000" width={10} height={10} />
    </div>
  )

  const renderSuccessProfileDetails = () => (
    <div className="profile-container-a">
      <img src={profileDetails.profile_image_url} alt="profile" />
      <h3>{profileDetails.name}</h3>
      <p>{profileDetails.short_bio}</p>
    </div>
  )

  const renderFailureProfileView = () => (
    <div>
      <button type="button" onClick={getUserProfile}>
        Retry
      </button>
    </div>
  )

  const renderProfileDetails = () => {
    switch (currentApiStatus) {
      case apiStatus.inProgress:
        return renderLoader()
      case apiStatus.success:
        return renderSuccessProfileDetails()
      case apiStatus.failure:
        return renderFailureProfileView()
      default:
        return ''
    }
  }

  return renderProfileDetails()
}

export default UserProfile
