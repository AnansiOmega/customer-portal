import React from "react";
import { NavLink } from "react-router-dom";
import NavbarImage from './images/Alumaview.jpg';

function NavBar({}) {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink to="/" activeClassName="active" className="nav-link">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" activeClassName="active" className="nav-link">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" activeClassName="active" className="nav-link">Contact</NavLink>
          </li>
          <li className="nav-item login">
            <NavLink to="/login" activeClassName="active" className="nav-link">Login</NavLink>
          </li>
        </ul>
      </div>
      <img className="navbar-image" src={NavbarImage} alt="Navbar Image" />
    </nav>
  );
}

// Export the NavBar component
export default NavBar;