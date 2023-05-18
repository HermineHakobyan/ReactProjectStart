import React, { useState } from 'react';
import "./Headrer.css";
const Header = () => {
  const [headerText, setHeaderText] = useState('Header Text');

  return (
    <header className="header">
      <div className="logo">Logo</div>
      <nav className="nav">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;