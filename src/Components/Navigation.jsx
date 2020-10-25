import React, { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./navigation.scss";

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
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 1024 1024"
            enableBackground="new 0 0 1024 1024"
            className="logo"
          >
            <linearGradient
              id="SVGID_2_"
              gradientUnits="userSpaceOnUse"
              x1="933.1501"
              y1="1112.2506"
              x2="77.7035"
              y2="-109.4537"
            >
              <stop offset="0" style={{ stopColor: "#59BC73" }}></stop>
              <stop offset="1" style={{ stopColor: "#428ECC" }}></stop>
            </linearGradient>
            <path
              id="inside"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M245.733,25.434h533.534 c121.116,0,219.299,98.184,219.299,219.299v533.534c0,121.116-98.184,219.299-219.299,219.299H245.733 c-121.116,0-219.299-98.184-219.299-219.299V244.733C26.434,123.618,124.618,25.434,245.733,25.434z"
            ></path>
            <g>
              <g>
                <path
                  id="outside"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M512,294c-58.542,0-106,47.458-106,106	c0,35.391,17.348,66.726,44,85.978V552c0,27.614,22.386,50,50,50h24c27.614,0,50-22.386,50-50v-66.022 c26.652-19.253,44-50.587,44-85.978C618,341.458,570.542,294,512,294z M793,0H231C103.422,0,0,103.422,0,231v562 c0,127.578,103.422,231,231,231h562c127.578,0,231-103.422,231-231V231C1024,103.422,920.578,0,793,0z M512,886 c-11.913,0-246-302.383-246-485.404C266,211.618,406.627,138,512,138c105.373,0,246,79.666,246,262.596 C758,583.526,523.913,886,512,886z"
                ></path>
              </g>
            </g>
          </svg>
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
              <Link className="nav-link" smooth to="/features#top">
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
              <Link className="nav-link" smooth to="/faq#top">
                FAQ
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" smooth to="/whats-new#top">
                What's new
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" smooth to="/press#top">
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
