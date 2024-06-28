import React from "react";
import "./header.css";
export default function Header(params) {
  return (
    <header>
      <div className="container header-container">
        <a href="#" className="logo">
          Logo
        </a>
        <nav>
          <ul className="list">
            <li className="list-item">
              <a href="#" className="link">
                Home
              </a>
            </li>
            <li className="list-item">
              <a href="#" className="link">
                About
              </a>
            </li>
            <li className="list-item">
              <a href="#" className="link">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <button onClick={() => login()} className="header-btn">
          Log in
        </button>
      </div>
    </header>
  );
}
