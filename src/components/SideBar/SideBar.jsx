import classNames from 'classnames';
import NavLinks from '../NavLinks/NavLinks';
import './SideBar.scss';

const SideBar = () => {
  return (
    <div className={classNames("sidebar", { "isOpen": true })}>
      <NavLinks />
    </div>
  )
}

export default SideBar;