import classNames from 'classnames';
import { useInView } from 'react-intersection-observer';
import TeamCard from '../TeamCard/TeamCard';
import './Teams.scss';

const Teams = () => {

  const [ref, inView] = useInView();
  return (
    <div className={classNames("teams", {"visible": inView})} ref={ref}>
      <div className="header">
        <span>
          Our Teams
        </span>
      </div>

      <div className="body">
        <TeamCard
          teamName={"Production Team"}
          icon={"build"}
        />
        <TeamCard
          teamName={"Field Team"}
          icon={"directions_walk"}
        /> 
        <TeamCard
          teamName={"Administrative Team"}
          icon={"settings"}
        /> 
        <TeamCard
          teamName={"Marketing Team"}
          icon={"leaderboard"}
        /> 
      </div>
    </div>
  )
}

export default Teams;