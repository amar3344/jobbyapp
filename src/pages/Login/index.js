import {useState} from 'react'

import './index.css'

const Login = props => {
  const [name, setName] = useState('')
  const [pass, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [isDisplayError, setDisplayError] = useState(false)

  const getUserName = e => {
    setName(e.target.value)
  }

  const getUserPassword = e => {
    setPassword(e.target.value)
  }

  const getFormSuccessfully = data => {
    setDisplayError(false)
    const {history} = props
    history.replace('/')
  }
  const getFormFailure = data => {
    setDisplayError(true)
    setErrorMessage(data.error_msg)
  }

  const gettingForm = async e => {
    e.preventDefault()
    const userDetails = {username: name, password: pass}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const url = 'https://apis.ccbp.in/login'
    const res = await fetch(url, options)
    const data = await res.json()

    if (res.status === 200) {
      getFormSuccessfully(data)
    } else {
      getFormFailure(data)
    }
  }
  return (
    <div className="login-container">
      <form className="form-container" onSubmit={gettingForm}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          alt="website logo"
        />
        <div className="input-container">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" onChange={getUserName} />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={getUserPassword} />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
        {isDisplayError && <p className="error-message">{errorMessage}</p>}
      </form>
    </div>
  )
}

export default Login
