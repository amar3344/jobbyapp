import {useEffect, useState} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import './userprofile.css'

const token = Cookies.get('jwt_token')

const UserProfile = () => {
  const [profileDetails, setProfileDetails] = useState()
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const getUserProfile = async () => {
      const url = 'https://apis.ccbp.in/profile'
      const options = {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }

      const response = await fetch(url, options)
      const data = await response.json()
      setProfileDetails(data.profile_details)
      //   console.log(profileDetails)
      setLoading(false)
    }

    getUserProfile()
  }, [])

  return (
    <div>
      {isLoading ? (
        <div>
          <Loader type="ThreeDots" color="#000" width={10} height={10} />
        </div>
      ) : (
        <div className="profile-container-a">
          <img
            src={profileDetails.profile_image_url}
            alt={profileDetails.name}
          />
          <h3>{profileDetails.name}</h3>
          <p>{profileDetails.short_bio}</p>
        </div>
      )}
    </div>
  )
}

export default UserProfile
