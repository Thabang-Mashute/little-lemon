import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav aria-label="Main navigation">
      <ul>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/booking">Book a Table</Link>
          </li>
        </ul>
        {/* <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/booking">Book a Table</Link>
        </li>

        <li>
          <Link to="/reservation">Reservation</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li> */}
      </ul>
    </nav>
  );
}

export default Nav;
