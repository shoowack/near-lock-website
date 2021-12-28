import React, { useEffect, useState } from "react";
import { NavHashLink as Link } from "react-router-hash-link";
import {Navbar, NavbarToggler, Nav, NavItem, Collapse, Container} from "reactstrap"
import "./navigation.scss";

const Navigation = ({ scrollWithOffset, settings }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (window.innerWidth < 991) {
      setScrolled(true);
    } else {
      const onScroll = (e) => {
        window.pageYOffset > 5 ? setScrolled(true) : setScrolled(false);
      };
      window.addEventListener("scroll", onScroll);

      return () => window.removeEventListener("scroll", onScroll);
    }
  }, [scrolled]);

  return (
    <Navbar
      color={scrolled ? 'light' : 'transparent'}
      expand="lg"
      fixed="top"
      light={scrolled}
      >
        <Container>
          <Link
            className="navbar-brand"
            smooth
            to="/#top"
            onClick={() => setIsOpen(false)}
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
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link
                  className="nav-link"
                  smooth
                  to="/#download"
                  onClick={() => setIsOpen(false)}
                  scroll={(el) => scrollWithOffset(el)}
                >
                  Download
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  className="nav-link"
                  smooth
                  onClick={() => setIsOpen(false)}
                  activeClassName="active"
                  to="/features#top"
                >
                  Features
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  className="nav-link"
                  smooth
                  to="/#compatibility"
                  onClick={() => setIsOpen(false)}
                  scroll={(el) => scrollWithOffset(el)}
                >
                  Compatibility
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  className="nav-link"
                  smooth
                  onClick={() => setIsOpen(false)}
                  activeClassName="active"
                  to="/faq#top"
                >
                  FAQ
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  className="nav-link"
                  smooth
                  onClick={() => setIsOpen(false)}
                  activeClassName="active"
                  to="/whats-new#top"
                >
                  What's new
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  className="nav-link"
                  smooth
                  onClick={() => setIsOpen(false)}
                  activeClassName="active"
                  to="/press#top"
                >
                  Press
                </Link>
              </NavItem>
              <NavItem>
                <a
                  className="nav-link"
                  onClick={() => setIsOpen(false)}
                  href={`mailto:${settings.contactEmailAddress}?subject=Contact via Near Lock Website`}
                >
                  Contact
                </a>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
  );
}

export default Navigation;