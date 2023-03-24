import React from 'react'

const JobContext = React.createContext({
  employmentFilter: [],
  salaryFilter: [],
  addEmploymentFilter: () => {},
  addSalaryFilters: () => {},
})

export default JobContext
