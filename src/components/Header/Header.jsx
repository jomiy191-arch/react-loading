import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          
          <div className="logo">
            <h1>Omega</h1>
          </div>

          <button 
            className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>

          <ul className={`nav-list ${isMenuOpen ? 'active' : ''}`}>
            <li className="nav-item">
              <a href="#" onClick={() => setIsMenuOpen(false)}>Demos</a>
            </li>
            <li className="nav-item">
              <a href="#" onClick={() => setIsMenuOpen(false)}>Pages</a>
            </li>
            <li className="nav-item">
              <a href="#" onClick={() => setIsMenuOpen(false)}>Support</a>
            </li>
            
            <li className="nav-item mobile-cart">
              <div className="cart">
                <span className="cart-text">Cart</span>
                <span className="cart-badge">3</span>
              </div>
            </li>
          </ul>

          <div className="cart desktop-cart">
            <span className="cart-text">Cart</span>
            <span className="cart-badge">3</span>
          </div>

        </nav>
      </div>
    </header>
  );
};

export default Header;