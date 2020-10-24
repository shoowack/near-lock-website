import React from "react";

function DownloadsSection({ settings }) {
  const {
    homePage: {
      topSection: {
        showIphoneDownloadHomepageLink,
        showWatchDownloadHomepageLink
      }
    },
    downloadLinks: { appStoreLinkUrl }
  } = settings;

  return (
    <>
      <section className="container download text-center py-5" id="download">
        <div className="row">
          <div className="col">
            <h1>Download</h1>
          </div>
        </div>
        <div className="row py-4">
          {showIphoneDownloadHomepageLink ? (
            <a
              href={appStoreLinkUrl ? appStoreLinkUrl : null}
              target="_blank"
              rel="noreferrer"
              className="link col-md-4 col-sm-4 col-xs-12"
            >
              <div className="icon iphone"></div>
              iPhone App
            </a>
          ) : null}

          {showWatchDownloadHomepageLink ? (
            <a
              href={appStoreLinkUrl ? appStoreLinkUrl : null}
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
      </section>
    </>
  );
}

export default DownloadsSection;
