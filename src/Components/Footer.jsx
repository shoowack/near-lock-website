import React from "react";
import { HashLink as Link } from "react-router-hash-link";

function Footer({ scrollWithOffset }) {
  return (
    <div className="colored">
      <div className="container">
        <Link
          className="navbar-brand"
          smooth
          to="/#top"
          scroll={(el) => scrollWithOffset(el)}
        >
          Home
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link
              className="nav-link"
              smooth
              to="/#download"
              scroll={(el) => scrollWithOffset(el)}
            >
              Download
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" smooth to="/features">
              Features
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              smooth
              to="/#compatibility"
              scroll={(el) => scrollWithOffset(el)}
            >
              Compatibility
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/faq">
              FAQ
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" smooth to="/whats-new">
              What's new
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" smooth to="/press">
              Press
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" smooth to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;