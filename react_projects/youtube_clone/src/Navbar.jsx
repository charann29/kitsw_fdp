// Navbar.js
import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <input className="search" placeholder="Search" />
      <div className="filters">
        <button>All</button>
        <button>APIs</button>
        <button>Computer programming</button>
        <button>Podcasts</button>
        <button>Music</button>
        <button>Telugu cinema</button>
      </div>
    </div>
  );
}

export default Navbar;
