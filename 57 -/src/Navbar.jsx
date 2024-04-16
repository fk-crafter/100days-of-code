import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faCog, faTh, faUserCircle } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
  return (
    <nav>
      <FontAwesomeIcon icon={faBars} className="icon" />
      <span>Dashboard</span>
      <div>
        <FontAwesomeIcon icon={faSearch} className="icon" />
        <FontAwesomeIcon icon={faCog} className="icon" />
        <FontAwesomeIcon icon={faTh} className="icon" />
        <FontAwesomeIcon icon={faUserCircle} className="icon" />
      </div>
    </nav>
  );
};

export default Navbar;