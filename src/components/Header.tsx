import React from 'react';
import logo from "../logo.png";
function Header() {
  return (
    <header className="header">
      <div className="header-wrapper">
        <nav className="nav">
          <a href="/" className="link">
            <img src={logo} alt="logo" width={50} height={50}/>
          </a>
          <ul className="nav-list">
            <li className="nav-item"><a href="/" className="nav-link">login</a></li>
            <li className="nav-item"><a href="/" className="nav-link">password</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;
