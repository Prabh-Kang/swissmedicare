import './TeamCard.scss';

const TeamCard = ({icon, teamName}) => {
  return (
    <div className="teamCard">
      <div className="icon">
        <span className="material-symbols-outlined">
          {icon}
        </span>
      </div>

      <div className="teamName">
        {teamName}
      </div>
    </div>
  )
}

export default TeamCard;