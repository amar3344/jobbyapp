import UserProfile from '../UserProfile/userprofile'
import './index.css'

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

const SideNav = () => (
  <aside className="aside-container">
    <div className="profile-container">
      <UserProfile />
    </div>
    <hr />
    <div className="type-employment-container">
      <h1 className="type-employment-text">Type of Employment</h1>
      <ul className="employment-container">
        {employmentTypesList.map(eachItem => (
          <li>
            <input
              type="checkbox"
              id={eachItem.employmentTypeId}
              className="checkbox"
            />
            <label htmlFor={eachItem.employmentTypeId} className="label-text">
              {eachItem.label}
            </label>
          </li>
        ))}
      </ul>
    </div>
    <hr />
    <div className="type-employment-container">
      <h1 className="type-employment-text">Salary Range</h1>
      <ul className="employment-container">
        {salaryRangesList.map(eachItem => (
          <li>
            <input
              type="radio"
              id={eachItem.salaryRangeId}
              className="checkbox"
              name="radio-buttons"
            />
            <label htmlFor={eachItem.salaryRangeId} className="label-text">
              {eachItem.label}
            </label>
          </li>
        ))}
      </ul>
    </div>
  </aside>
)

export default SideNav
