import React from "react";
import "./footer.css";
export default function Footer(params) {
  return (
    <footer>
      <div className="container footer-container">
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
    </footer>
  );
}
