import React, { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

function Navigation({ scrollWithOffset }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = (e) => {
      e.target.documentElement.scrollTop > 50
        ? setScrolled(true)
        : setScrolled(false);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrolled]);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${
        scrolled ? " bg-light navbar-light" : " bg-transparent"
      }`}
    >
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
        <div className="collapse navbar-collapse" id="navbarText">
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
            <li className="nav-item">
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
    </nav>
  );
}

export default Navigation;
