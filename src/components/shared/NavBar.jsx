import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const NavBar = () => (
  <header className="header">
    <nav className="flex space-btn">
      <ul className="navbar flex space-btn justify-center align-center">
        <li className="nav-link logo">
          <Link to="/">BookStore CMS</Link>
        </li>
        <li className="nav-link">
          <Link to="/">BOOKS</Link>
        </li>
        <li className="nav-link">
          <Link to="/categories">CATEGORIES</Link>
        </li>
      </ul>
      <button className="profile" type="button">
        <FaUser className="icon" />
      </button>
    </nav>
  </header>
);

export default NavBar;
