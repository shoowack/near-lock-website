import React from "react";
import { ReactSVG } from "react-svg";
import { HashLink as Link } from "react-router-hash-link";
import "./features-section.scss";

export default function FeaturesSection({ scrollWithOffset }) {
  return (
    <section className="highlighted-features colored text-center py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Link
              className="link"
              smooth
              to="/features"
              scroll={(el) => scrollWithOffset(el)}
            >
              <div className="backgroundiconcontainer">
                <div className="sparkle"></div>
                <div className="sparkle"></div>
                <div className="sparkle"></div>
                <div className="sparkle"></div>
                <div className="sparkle"></div>
                <div className="sparkle"></div>
                <div className="sparkle"></div>
                <div className="gear1"></div>
                <div className="gear2"></div>
                <div className="backgroundicon"></div>
              </div>
            </Link>
            <h3>Background mode</h3>
            <br />
            <p>
              Near Lock will work even when your iPhone is in your pocket. Of
              course, you can always launch Near Lock if you want to add new
              devices.
              <br />
              Background mode is available only in the PRO version of the
              application through In-App purchase
            </p>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-6">
            <Link
              className="link"
              smooth
              to="/features#music"
              scroll={(el) => scrollWithOffset(el)}
            >
              <div className="new">
                <ReactSVG
                  className="highlighted-features__icon"
                  src="/music_icon.svg"
                />
              </div>
              <h4>Music</h4>
              <p>Seamless music control when locking and unlocking your Mac.</p>
            </Link>
          </div>
          <hr />
          <div className="col-md-6">
            <Link
              className="link"
              smooth
              to="/features#access-anywhere"
              scroll={(el) => scrollWithOffset(el)}
            >
              <ReactSVG
                className="highlighted-features__icon"
                src="/access_anywhere_icon.svg"
              />
              <h4>Access Anywhere</h4>
              <p>
                Quickly access Near Lock from Notification Center, through
                interactive notifications or via 3D Touch!
              </p>
            </Link>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-6 top">
            <Link
              className="link"
              smooth
              to="/features#mac-control"
              scroll={(el) => scrollWithOffset(el)}
            >
              <ReactSVG
                src="/mac_control_icon.svg"
                className="highlighted-features__icon"
              />
              <h4>Mac Control</h4>
              <p>Use Near Lock to see who uses your Mac.</p>
            </Link>
          </div>
          <hr className="hidden-lg hidden-md" />
          <div className="col-md-6">
            <Link
              className="link"
              smooth
              to="/features#authentication"
              scroll={(el) => scrollWithOffset(el)}
            >
              <ReactSVG
                src="/ping_icon.svg"
                className="highlighted-features__icon"
              />
              <h4>Find My iPhone</h4>
              <p>
                Ping your iPhone from your Mac while the bluetooth connection is
                established
              </p>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Link className="btn btn-outline-light mt-4" smooth to="/features">
              See more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
