import { faHeart, faHome, faQuestion } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './NavBar.css';

/**
 * A Funtional component that contains the navigation bar
 */
function NavBar() {

  return (
    <div className="topnav">
      <Link to="/"><FontAwesomeIcon icon={faHome} /> Home </Link>
      <Link to="/favorites"><FontAwesomeIcon icon={faHeart} /> Favorites </Link>
      <Link to="/about"><FontAwesomeIcon icon={faQuestion} /> About </Link>
    </div>
  );
}

export default NavBar;