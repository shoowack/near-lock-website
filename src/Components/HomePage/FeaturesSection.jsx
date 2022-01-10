import React from 'react';
import { ReactSVG } from 'react-svg';
import { HashLink as Link } from 'react-router-hash-link';
import './features-section.scss';
import { Container, Row, Col } from 'reactstrap';

const FeaturesSection = ({ scrollWithOffset }) => (
  <section className="highlighted-features colored text-center py-5">
    <Container>
      <Row>
        <Col md={12}>
          <Link className="link" smooth to="/features" scroll={(el) => scrollWithOffset(el)}>
            <div className="backgroundiconcontainer">
              <div className="sparkle" />
              <div className="sparkle" />
              <div className="sparkle" />
              <div className="sparkle" />
              <div className="sparkle" />
              <div className="sparkle" />
              <div className="sparkle" />
              <div className="gear1" />
              <div className="gear2" />
              <div className="backgroundicon" />
            </div>
          </Link>
          <h3>Background mode</h3>
          <br />
          <p>
            Near Lock will work even when your iPhone is in your pocket. Of course, you can always
            launch Near Lock if you want to add new devices.
            <br />
            Background mode is available only in the PRO version of the application through In-App
            purchase
          </p>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col md={6}>
          <Link className="link" smooth to="/features#music" scroll={(el) => scrollWithOffset(el)}>
            <div className="new">
              <ReactSVG className="highlighted-features__icon" src="/music_icon.svg" />
            </div>
            <h4>Music</h4>
            <p>Seamless music control when locking and unlocking your Mac.</p>
          </Link>
        </Col>
        <hr />
        <Col md={6}>
          <Link
            className="link"
            smooth
            to="/features#access-anywhere"
            scroll={(el) => scrollWithOffset(el)}
          >
            <ReactSVG className="highlighted-features__icon" src="/access_anywhere_icon.svg" />
            <h4>Access Anywhere</h4>
            <p>
              Quickly access Near Lock from Notification Center, through interactive notifications
              or via 3D Touch!
            </p>
          </Link>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col md={6} className="top">
          <Link
            className="link"
            smooth
            to="/features#mac-control"
            scroll={(el) => scrollWithOffset(el)}
          >
            <ReactSVG src="/mac_control_icon.svg" className="highlighted-features__icon" />
            <h4>Mac Control</h4>
            <p>Use Near Lock to see who uses your Mac.</p>
          </Link>
        </Col>
        <hr className="hidden-lg hidden-md" />
        <Col md={6}>
          <Link
            className="link"
            smooth
            to="/features#authentication"
            scroll={(el) => scrollWithOffset(el)}
          >
            <ReactSVG src="/ping_icon.svg" className="highlighted-features__icon" />
            <h4>Find My iPhone</h4>
            <p>Ping your iPhone from your Mac while the bluetooth connection is established</p>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col>
          <Link className="btn btn-outline-light mt-4" smooth to="/features">
            See more
          </Link>
        </Col>
      </Row>
    </Container>
  </section>
);

export default FeaturesSection;
