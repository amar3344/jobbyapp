const EmploymentTypeList = props => {
  const {employmentList} = props

  return (
    <li>
      <input
        type="checkbox"
        id={employmentList.employmentTypeId}
        className="checkbox"
      />
      <label htmlFor={employmentList.employmentTypeId} className="label-text">
        {employmentList.label}
      </label>
    </li>
  )
}

export default EmploymentTypeList
