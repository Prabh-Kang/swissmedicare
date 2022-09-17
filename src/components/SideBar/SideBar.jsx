import classNames from 'classnames';
import { useContext } from 'react';
import { SidebarContext } from '../../App';
import NavLinks from '../NavLinks/NavLinks';
import './SideBar.scss';

const SideBar = () => {
  const { isSidebarOpen } = useContext(SidebarContext);
  return (
    <div className={classNames("sidebar", { "isOpen": isSidebarOpen })}>
      <NavLinks />
    </div>
  )
}

export default SideBar;