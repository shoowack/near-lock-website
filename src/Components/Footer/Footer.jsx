import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./footer.scss";

function Footer({ scrollWithOffset, settings }) {
  const {
    socialLinks: { youtube, twitter, facebook },
    downloadLinks: { appStoreLinkUrl, macAppLinkUrl },
    contactEmailAddress,
    supportEmailAddress
  } = settings;

  return (
    <div className="container footer py-4">
      {/* add "colored" class if we want to revert to v1 */}
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
            <Link smooth to="/features#top">
              Features
            </Link>
          </dd>
          <dd>
            <a
              href={`mailto:${contactEmailAddress}?subject=Contact via Near Lock Website`}
            >
              Contact
            </a>
          </dd>
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
            <a
              href={`mailto:${contactEmailAddress}?subject=Contact via Near Lock Website`}
            >
              Contact
            </a>
          </dd>
          <dd>
            <Link smooth to="/press#top">
              Press
            </Link>
          </dd>
          <dd>
            <Link smooth to="/terms#top">
              Terms of use
            </Link>
          </dd>
          <dd>
            <Link smooth to="/impressum#top">
              Impressum
            </Link>
          </dd>
        </dl>
        <dl className="col-xs-12 col-sm-6 col-md">
          <dt>
            <h5>Help</h5>
          </dt>
          <dd>
            <Link smooth to="/faq#top">
              FAQ
            </Link>
          </dd>
          <dd>
            <a
              href={`mailto:${supportEmailAddress}?subject=Question via Near Lock Website`}
            >
              Support
            </a>
          </dd>
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
  );
}

export default Footer;