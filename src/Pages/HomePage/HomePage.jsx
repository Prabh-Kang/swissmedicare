import Achievements from '../../components/Achievements/Achievements';
import CompanySlogan from '../../components/CompanySlogan/CompanySlogan';
import Profile from '../../components/Profile/Profile';
import Teams from '../../components/Teams/Teams';
import './HomePage.scss';

const HomePage = () => {
  return (
    <>
      <CompanySlogan />
      <Profile />
      <Teams />
      <Achievements />
    </>
  )
}

export default HomePage;