import './Profile.scss';
import Card from '../Card/Card';

const Profile = () => {
  const missionItems = [
    "Provide quality drugs",
    "Maintain high standards of Business",
    "Make the environment trouble free"
  ]

  const visionItems = [
    "Become market leader",
    "Symbolize quality services",
    "Expand operations globally"
  ]
  return (
    <div className="profile">
      <Card 
        header={"OUR MISSION"}
        icon={"rocket_launch"}
        listItems={missionItems}
      />

      <Card 
        header={"OUR VISION"}
        icon={"volunteer_activism"}
        listItems={visionItems}
      />
    </div>
  )
};

export default Profile;