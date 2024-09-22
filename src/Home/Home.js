import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './Home.css';

function NavBar() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  // Function to toggle the navbar visibility
  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };

  return (
    <div>
      {/* Hamburger Menu Button */}
      <button className="hamburger" onClick={toggleNavbar}>
        &#9776; {/* Hamburger menu icon */}
      </button>

      {/* Navbar (visible if isNavbarVisible is true) */}
      <div className={`navbar ${isNavbarVisible ? 'show' : ''}`}>
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : ""}>About</NavLink>
          </li>
          <li>
            <NavLink to="/skills" className={({ isActive }) => isActive ? "active-link" : ""}>Skills</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "active-link" : ""}>Contact</NavLink>
          </li>
          <li>
            <NavLink to="/project" className={({ isActive }) => isActive ? "active-link" : ""}>Projects</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
