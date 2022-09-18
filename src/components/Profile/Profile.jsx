import './Profile.scss';
import Card from '../Card/Card';

const Profile = () => {
  const missionItems = [
    "Provide quality drugs by maintaining high standards of business and keep the environment trouble free"
  ]

  const visionItems = [
    "Become market leader by symbolizing quality services and expand operations globally"
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