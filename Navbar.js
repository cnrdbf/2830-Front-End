import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">Event Planner</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

