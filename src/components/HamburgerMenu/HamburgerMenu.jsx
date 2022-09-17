import { useState } from 'react';
import classNames from 'classnames';
import { useContext } from 'react';
import { SidebarContext } from '../../App';
import './HamburgerMenu.scss';

const HamburgerMenu = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(SidebarContext);
  return (
    <div className="hamburger-menu">
      <div className="hamburger-icon" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        <div className={classNames("hamburger-bar top", { "open": isSidebarOpen })}></div>
        <div className={classNames("hamburger-bar middle", { "open": isSidebarOpen })}></div>
        <div className={classNames("hamburger-bar bottom", { "open": isSidebarOpen })}></div>
      </div>
    </div>
  )
}

export default HamburgerMenu;