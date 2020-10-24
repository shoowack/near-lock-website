import React from "react";
import { HashLink as Link } from "react-router-hash-link";

function Footer({ scrollWithOffset, settings }) {
  const {
    socialLinks: { youtube, twitter, facebook },
    downloadLinks: { appStoreLinkUrl, macAppLinkUrl }
  } = settings;

  return (
    <div className="footer py-4">
      {/* add "colored" class if we want to revert to v1 */}
      <div className="container">
        <div className="row">
          <dl className="col-xs-12 col-sm-6 col-md">
            <dt>
              <h5>Product</h5>
            </dt>
            <dd>
              <Link
                smooth
                to="/#compatibility"
                scroll={(el) => scrollWithOffset(el)}
              >
                Compatibility
              </Link>
            </dd>
            <dd>
              <Link smooth to="/features">
                Features
              </Link>
            </dd>
            <dd>Contact</dd>
          </dl>
          <dl className="col-xs-12 col-sm-6 col-md">
            <dt>
              <h5>Downloads</h5>
            </dt>
            <dd>
              <a href={appStoreLinkUrl}>iOS App</a>
            </dd>
            <dd>
              <a href={macAppLinkUrl}>Mac App</a>
            </dd>
          </dl>
          <dl className="col-xs-12 col-sm-6 col-md">
            <dt>
              <h5>Company</h5>
            </dt>
            <dd>
              <Link smooth to="/contact">
                Contact
              </Link>
            </dd>
            <dd>
              <Link smooth to="/press">
                Press
              </Link>
            </dd>
            <dd>Terms of use</dd>
            <dd>Impressum</dd>
          </dl>
          <dl className="col-xs-12 col-sm-6 col-md">
            <dt>
              <h5>Help</h5>
            </dt>
            <dd>
              <Link to="/faq">FAQ</Link>
            </dd>
            <dd>Support</dd>
          </dl>
          <dl className="col-sm-12 col-md">
            <dt>
              <h5>Follow us</h5>
            </dt>
            <dd>
              <a href={youtube} target="_blank" rel="noreferrer noopener">
                Youtube
              </a>
            </dd>
            <dd>
              <a href={twitter} target="_blank" rel="noreferrer noopener">
                Twitter
              </a>
            </dd>
            <dd>
              <a href={facebook} target="_blank" rel="noreferrer noopener">
                Facebook
              </a>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  );
}

export default Footer;
