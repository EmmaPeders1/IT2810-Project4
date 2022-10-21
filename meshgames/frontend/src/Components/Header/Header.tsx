import React from 'react';
import './Header.css';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Header() {
  return (
    <div className="header">
      <FontAwesomeIcon icon={faBars} />
      <h1>MeshGames</h1>
    </div>
  );
}

export default Header;