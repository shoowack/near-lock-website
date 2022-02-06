import React from 'react';
import { ReactSVG } from 'react-svg';
import { Container, Row, Col } from 'reactstrap';
import Link from 'next/link';

const FeaturesSection = () => (
  <section className="highlighted-features colored text-center py-5">
    <Container>
      <Row>
        <Col md={12}>
          <Link className="link" smooth href="/features" passHref>
            <div className="background-icon-container">
              <div className="sparkle" />
              <div className="sparkle" />
              <div className="sparkle" />
              <div className="sparkle" />
              <div className="sparkle" />
              <div className="sparkle" />
              <div className="sparkle" />
              <div className="gear1" />
              <div className="gear2" />
              <div className="background-icon" />
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
          <Link
            className="link"
            smooth
            href="/features#music"
            //  scroll={(el) => scrollWithOffset(el)}
          >
            <a>
              <div className="new">
                <ReactSVG className="highlighted-features__icon" src="/music_icon.svg" />
              </div>
              <h4>Music</h4>
              <p>Seamless music control when locking and unlocking your Mac.</p>
            </a>
          </Link>
        </Col>
        <hr />
        <Col md={6}>
          <Link
            className="link"
            smooth
            href="/features#access-anywhere"
            // scroll={(el) => scrollWithOffset(el)}
          >
            <a>
              <ReactSVG className="highlighted-features__icon" src="/access_anywhere_icon.svg" />
              <h4>Access Anywhere</h4>
              <p>
                Quickly access Near Lock from Notification Center, through interactive notifications
                or via 3D Touch!
              </p>
            </a>
          </Link>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col md={6} className="top">
          <Link
            className="link"
            smooth
            href="/features#mac-control"
            // scroll={(el) => scrollWithOffset(el)}
          >
            <a>
              <ReactSVG src="/mac_control_icon.svg" className="highlighted-features__icon" />
              <h4>Mac Control</h4>
              <p>Use Near Lock to see who uses your Mac.</p>
            </a>
          </Link>
        </Col>
        <hr className="hidden-lg hidden-md" />
        <Col md={6}>
          <Link
            className="link"
            smooth
            href="/features#authentication"
            // scroll={(el) => scrollWithOffset(el)}
          >
            <a>
              <ReactSVG src="/ping_icon.svg" className="highlighted-features__icon" />
              <h4>Find My iPhone</h4>
              <p>Ping your iPhone from your Mac while the bluetooth connection is established</p>
            </a>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col>
          <Link className="btn btn-outline-light mt-4" smooth href="/features">
            See more
          </Link>
        </Col>
      </Row>
    </Container>
  </section>
);

export default FeaturesSection;
