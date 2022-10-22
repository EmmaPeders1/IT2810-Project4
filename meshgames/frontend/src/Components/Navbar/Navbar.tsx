import React from 'react';
import './Navbar.css';

function Navbar() {


  return (
    <div className="navbar">
       {/* {NavbarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })} */}
    </div>
  );
}

export default Navbar;