import UserProfile from '../UserProfile/userprofile'
import './index.css'

const SideNav = () => (
  <aside className="aside-container">
    <div className="profile-container">
      <UserProfile />
    </div>
    <hr />
    <div className="type-employment-container">
      <p className="type-employment-text">Type of Employment</p>
      <ul className="employment-container">
        <li>
          <input type="checkbox" id="fulltime" className="checkbox" />
          <label htmlFor="fulltime" className="label-text">
            Full Time
          </label>
        </li>
        <li>
          <input type="checkbox" id="partTime" className="checkbox" />
          <label htmlFor="partTime" className="label-text">
            Part Time
          </label>
        </li>
        <li>
          <input type="checkbox" id="freelance" className="checkbox" />
          <label htmlFor="freelance" className="label-text">
            Freelance
          </label>
        </li>
        <li>
          <input type="checkbox" id="internship" className="checkbox" />
          <label htmlFor="internship" className="label-text">
            Internship
          </label>
        </li>
      </ul>
    </div>
    <hr />
    <div className="type-employment-container">
      <p className="type-employment-text">Type of Employment</p>
      <ul className="employment-container">
        <li>
          <input
            type="radio"
            id="10LPA"
            className="checkbox"
            name="radio-buttons"
          />
          <label htmlFor="10LPA" className="label-text">
            10 LPA and above
          </label>
        </li>
        <li>
          <input
            type="radio"
            id="20LPA"
            className="checkbox"
            name="radio-buttons"
          />
          <label htmlFor="20LPA" className="label-text">
            20 LPA and above
          </label>
        </li>
        <li>
          <input
            type="radio"
            id="30LPA"
            className="checkbox"
            name="radio-buttons"
          />
          <label htmlFor="30LPA" className="label-text">
            30 LPA and above
          </label>
        </li>
        <li>
          <input
            type="radio"
            id="40LPA"
            className="checkbox"
            name="radio-buttons"
          />
          <label htmlFor="40LPA" className="label-text">
            40 LPA and above
          </label>
        </li>
      </ul>
    </div>
  </aside>
)

export default SideNav
