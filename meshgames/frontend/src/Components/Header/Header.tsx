import React from 'react';
import './Header.css';
import { useState } from 'react';


function Header() {

  const [showNavbar, setShowNavbar] = useState(false);

const ToggleSidebar = () => {
    const [isOpen, setIsopen] = useState(false);

    const ToggleSidebar = () => {
        isOpen === true ? setIsopen(false) : setIsopen(true);
    }
}

  return (
    <div className="header">
      <h1>MeshGames</h1>

      <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu"/>
        <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
          <div className="spinner diagonal part-1"></div>
          <div className="spinner horizontal"></div>
          <div className="spinner diagonal part-2"></div>
        </label>

      <div id="sidebarMenu">
        <ul className="sidebarMenuInner">
          <li>Home</li>
          <li>Your favorites</li>
          <li>Explore</li>
          <li>Charts</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;