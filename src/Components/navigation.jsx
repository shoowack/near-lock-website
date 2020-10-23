import React from "react";
import { HashLink as Link } from "react-router-hash-link";

function Navigation() {
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -60;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <div className="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <Link
          className="navbar-brand"
          smooth
          to="/#top"
          scroll={(el) => scrollWithOffset(el)}
        >
          Home
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <Link
                className="nav-link"
                smooth
                to="/#download"
                scroll={(el) => scrollWithOffset(el)}
              >
                Download
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" smooth to="/features">
                Features
              </Link>
            </li>
            <li class="nav-item">
              <Link
                className="nav-link"
                smooth
                to="/#compatibility"
                scroll={(el) => scrollWithOffset(el)}
              >
                Compatibility
              </Link>
            </li>
            <li class="nav-item active">
              <Link className="nav-link" to="/faq">
                FAQ
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" smooth to="/whats-new">
                What's new
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" smooth to="/press">
                Press
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" smooth to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
