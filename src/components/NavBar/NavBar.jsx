import NavLinks from '../NavLinks/NavLinks';
import './NavBar.scss'

const NavBar = () => {
  return (
    <nav>
      <div className="company-name">
        Swiss Medicare Pvt. Ltd.
      </div>

      <NavLinks />
    </nav>
  )
}


export default NavBar;