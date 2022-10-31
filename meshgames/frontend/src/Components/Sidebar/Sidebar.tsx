import { Link } from 'react-router-dom';
import { faChartColumn, faHeart, faHome, faQuestion } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Sidebar.css';

function Sidebar() {
    return (
        <div className="sidebar">
            <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu"/>
            <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
                <div className="spinner diagonal part-1"></div>
                <div className="spinner horizontal"></div>
                <div className="spinner diagonal part-2"></div>
            </label>
            <div id="sidebarMenu">
                <ul className="sidebarMenuInner">
                <li>
                    <Link to="/"><FontAwesomeIcon icon={faHome} /> Home</Link>
                </li>
                <li>
                    <Link to="/favorites"><FontAwesomeIcon icon={faHeart} /> Favorites</Link>
                </li>
                <li>
                    <Link to="/about"><FontAwesomeIcon icon={faQuestion} /> About</Link>
                </li>
                <li>
                    <Link to="/charts"><FontAwesomeIcon icon={faChartColumn} /> Charts</Link>
                </li>
                </ul>
            </div>
        </div>

    );

}

export default Sidebar;