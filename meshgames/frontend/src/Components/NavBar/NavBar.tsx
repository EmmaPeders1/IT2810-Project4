import { faHeart, faHome, faQuestion } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

/**
 * A Funtional component that contains the navigation bar
 */
const NavBar = () => {
  return (
    <div className="topnav" aria-label="navbar">
      <NavLink
        to="/" end
        className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        aria-label='link to home page'
      >
        <FontAwesomeIcon icon={faHome} /> Home
      </NavLink>
      <NavLink
        to="/favorites"
        className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        aria-label='link to favorites page'
      >
        <FontAwesomeIcon icon={faHeart} /> Favorites
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        aria-label='link to about page'
      >
        <FontAwesomeIcon icon={faQuestion} /> About
      </NavLink>
    </div>
  );
}

export default NavBar;