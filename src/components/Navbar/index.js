import {Link, withRouter} from 'react-router-dom'
import {AiFillHome, AiOutlineLogout} from 'react-icons/ai'
import {FiLogOut} from 'react-icons/fi'
import {MdOutlineLogout} from 'react-icons/md'
import Cookies from 'js-cookie'

import './index.css'

const Navbar = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <>
      <nav className="nav-container">
        <Link to="/">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
          />
        </Link>
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
      <nav className="mobile-view">
        <Link to="/">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="website-logo"
          />
        </Link>
        <ul className="mobile-nav-buttons">
          <li>
            <Link to="/" className="mobile-nav-links">
              <AiFillHome />
            </Link>
          </li>
          <li>
            <Link to="/jobs" className="mobile-nav-links">
              Jobs
            </Link>
          </li>
          <li>
            <button
              type="button"
              className="mobile-logout-button"
              onClick={onClickLogout}
            >
              <AiOutlineLogout />
            </button>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default withRouter(Navbar)

//  <ul className="mobile-view">
//         <li>
//           <Link to="/" className="nav-links">
//             <AiFillHome />
//           </Link>
//         </li>
//       </ul>
