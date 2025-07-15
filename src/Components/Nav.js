import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav" aria-label="Main navigation">
      <ul>
        <li>
          <Link to="/" className="nav-item ">
            Home
          </Link>
        </li>
        <li>
          <Link to="/booking" className="nav-item ">
            Book a Table
          </Link>
        </li>
        <li>
          <Link to="/menu" className="nav-item ">
            Menu
          </Link>
        </li>
        <li>
          <Link to="/reservation" className="nav-item ">
            Reservation
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-item ">
            About Us
          </Link>
        </li>

        <li>
          <Link to="/contact " className="nav-item ">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
