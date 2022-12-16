import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const NavBar = () => (
  <header className="header">
    <nav className="flex space-btn">
      <ul className="navbar flex space-btn justify-center align-center">
        <li className="nav-link">
          <Link to="/">BookStore CMS</Link>
        </li>
        <li className="nav-link">
          <Link to="/">BOOKS</Link>
        </li>
        <li className="nav-link">
          <Link to="/categories">CATEGORIES</Link>
        </li>
      </ul>
      <div className="profile">
        <i className="fa fa-user icon" aria-hidden="true" />
        <FaUser className="icon" />
      </div>
    </nav>
  </header>
);

export default NavBar;
