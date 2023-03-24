const SalaryRangeList = props => {
  const {salaryRange} = props

  return (
    <li>
      <input
        type="radio"
        id={salaryRange.salaryRangeId}
        className="checkbox"
        name="radio-buttons"
      />
      <label htmlFor={salaryRange.salaryRangeId} className="label-text">
        {salaryRange.label}
      </label>
    </li>
  )
}

export default SalaryRangeList
