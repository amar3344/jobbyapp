import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

const Navbar = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <nav className="nav-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
        alt="website logo"
      />
      <ul className="nav-buttons">
        <li>
          <Link to="/" className="nav-links">
            Home
          </Link>
        </li>
        <li>
          <Link to="/jobs" className="nav-links">
            Jobs
          </Link>
        </li>
      </ul>
      <button type="button" className="logout-button" onClick={onClickLogout}>
        Logout
      </button>
    </nav>
  )
}

export default withRouter(Navbar)
