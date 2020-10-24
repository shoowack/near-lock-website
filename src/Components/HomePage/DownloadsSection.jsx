import React from "react";

function DownloadsSection({
  showIphoneDownloadHomepageLink,
  showWatchDownloadHomepageLink,
  appStoreLinkUrl
}) {
  return (
    <div
      className="container-fluid"
      style={{ background: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className="container download text-center py-4" id="download">
        <div className="row">
          <div className="col">
            <h3>Download</h3>
          </div>
        </div>
        <div className="row py-4">
          {showIphoneDownloadHomepageLink && appStoreLinkUrl ? (
            <a
              href={appStoreLinkUrl}
              target="_blank"
              rel="noreferrer"
              className="link col-md-4 col-sm-4 col-xs-12"
            >
              <div className="icon iphone"></div>
              iPhone App
            </a>
          ) : null}

          {showWatchDownloadHomepageLink && appStoreLinkUrl ? (
            <a
              href={appStoreLinkUrl}
              target="_blank"
              rel="noreferrer"
              className="link col-md-4 col-sm-4 col-xs-12"
            >
              <div className="icon watch"></div>
              Apple Watch
            </a>
          ) : null}

          <a
            href="downloads/nearlock.dmg"
            className="link col-md-4 col-sm-4 col-xs-12 newsletter-trigger"
          >
            <div className="icon mac"></div>
            Mac App
          </a>
        </div>
        <div className="row">
          <sub className="col py-4">
            Download iPhone, Mac and Apple Watch applications for FREE, and give
            it a try!
          </sub>
        </div>
      </div>
    </div>
  );
}

export default DownloadsSection;
