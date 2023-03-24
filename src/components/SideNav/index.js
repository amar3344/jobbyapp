import UserProfile from '../UserProfile/userprofile'
import SalaryRangeList from '../SalaryRangeList/slarayrange'
import EmploymentTypeList from '../EmploymentTypeList'
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
          <EmploymentTypeList
            key={eachItem.employmentTypeId}
            employmentList={eachItem}
          />
        ))}
      </ul>
    </div>
    <hr />
    <div className="type-employment-container">
      <h1 className="type-employment-text">Salary Range</h1>
      <ul className="employment-container">
        {salaryRangesList.map(eachItem => (
          <SalaryRangeList
            key={eachItem.salaryRangeId}
            salaryRange={eachItem}
          />
        ))}
      </ul>
    </div>
  </aside>
)

export default SideNav
