import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import {
  sparkle,
  musicIconWhite,
  backgroundIcon,
  backgroundIconGearRight,
  backgroundIconGearLeft
} from "./../../assets";
import "./features.scss";

export function Sparkle() {
  return (
    <div
      className="sparkle"
      style={{ background: `url(${sparkle}) center no-repeat` }}
    ></div>
  );
}

export default function FeaturesSection({ scrollWithOffset }) {
  return (
    <section className="colored text-center py-5">
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
                <Sparkle />
                <Sparkle />
                <Sparkle />
                <Sparkle />
                <Sparkle />
                <Sparkle />
                <Sparkle />

                <div
                  className="gear1"
                  style={{
                    background: `url(${backgroundIconGearLeft})`
                  }}
                ></div>
                <div
                  className="gear2"
                  style={{
                    background: `url(${backgroundIconGearRight})`
                  }}
                ></div>
                <div
                  className="backgroundicon"
                  style={{ background: `url(${backgroundIcon})` }}
                ></div>
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
                <img src={musicIconWhite} className="icon" alt="" />
              </div>
              <h1>Music</h1>
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
              <img src="img/access_anywhere_icon.svg" className="icon" alt="" />

              <h1>Access Anywhere</h1>
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
              <img src="img/mac_control_icon.svg" className="icon" alt="" />

              <h1>Mac Control</h1>
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
              <img src="img/ping_icon.svg" className="icon" alt="" />

              <h1>Find My iPhone</h1>
              <p>
                Ping your iPhone from your Mac while the bluetooth connection is
                established
              </p>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Link className="btn" smooth to="/features">
              See more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
