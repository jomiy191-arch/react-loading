import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          
          {/* Logo */}
          
          <div className="logo">
            <h1>Omega</h1>
          </div>

          {/* Hamburger */}
          <button
            className={`hamburger ${isMenuOpen ? "active" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>

          {/* Nav items */}
          <ul className={`nav-list ${isMenuOpen ? "active" : ""}`}>
            <li className="nav-item">
              <a href="#foni" onClick={() => setIsMenuOpen(false)}>Demos</a>
            </li>
            <li className="nav-item">
              <a href="#div" onClick={() => setIsMenuOpen(false)}>Pages</a>
            </li>
            <li className="nav-item">
              <a href="#all" onClick={() => setIsMenuOpen(false)}>Support</a>
            </li>

            {/* Mobile Cart */}
            <li className="nav-item mobile-cart">
              <div className="cart">
                <span className="cart-text">Cart</span>
                <span className="cart-badge">3</span>
              </div>
            </li>
          </ul>

          {/* Desktop Cart */}
          <div className="cart desktop-cart">
            <span className="cart-text">Cart</span>
            <span className="cart-badge">3</span>
          </div>

          {/* Overlay */}
          <div
            className={`menu-overlay ${isMenuOpen ? "active" : ""}`}
            onClick={toggleMenu}
          ></div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
