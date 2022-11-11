import { faHeart, faHome, faQuestion } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './NavBar.css';

/**
 * A Funtional component that contains the navigation bar
 */
function NavBar() {

  return (
    <div className="topnav" aria-label="navbar">
      <Link to="/" aria-label='link to home page'><FontAwesomeIcon icon={faHome} /> Home </Link>
      <Link to="/favorites" aria-label='link to favorites page'><FontAwesomeIcon icon={faHeart} /> Favorites </Link>
      <Link to="/about" aria-label='link to about page'><FontAwesomeIcon icon={faQuestion} /> About </Link>
    </div>
  );
}

export default NavBar;