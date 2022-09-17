import { useState } from 'react';
import classNames from 'classnames';
import './HamburgerMenu.scss';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="hamburger-menu">
      <div className="hamburger-icon" onClick={() => setIsOpen(!isOpen)}>
        <div className={classNames("hamburger-bar top", { "open": isOpen })}></div>
        <div className={classNames("hamburger-bar middle", { "open": isOpen })}></div>
        <div className={classNames("hamburger-bar bottom", { "open": isOpen })}></div>
      </div>
    </div>
  )
}

export default HamburgerMenu;