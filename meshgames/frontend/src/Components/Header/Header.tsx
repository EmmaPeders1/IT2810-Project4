import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
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
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/favorites">Your favorites</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/charts">Charts</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;