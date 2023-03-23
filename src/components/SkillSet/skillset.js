import './skillset.css'

const SkillSet = props => {
  const {skillDetails} = props
  return (
    <li className="each-skill-container">
      <img
        src={skillDetails.image_url}
        alt={skillDetails.name}
        className="skills-image"
      />
      <h6 className="skill-name">{skillDetails.name}</h6>
    </li>
  )
}

export default SkillSet
