import './Mission.scss';
import Card from '../Card/Card';

const Mission = () => {
  const missionItems = [
    "Provide quality drugs",
    "Maintain high standards of Business",
    "Make the environment trouble free"
  ]
  return (
    <Card 
      header={"OUR MISSION"}
      icon={"rocket_launch"}
      listItems={missionItems}
    />
  )
};

export default Mission;