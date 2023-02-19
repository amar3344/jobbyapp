import {AiOutlineSearch} from 'react-icons/ai'
import './index.css'

const JobsContents = () => (
  <div className="jobs-right-container">
    <div className="search-container">
      <input type="search" placeholder="search" className="search-input" />
      <AiOutlineSearch className="search-image" />
    </div>
  </div>
)

export default JobsContents
