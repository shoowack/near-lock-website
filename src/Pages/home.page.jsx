import React from "react";

function HomePage({ settings }) {
  const {
    homePage: { showIphoneDownloadHomepageLink, showWatchDownloadHomepageLink },
    downloadLinks: { appStoreLinkUrl },
    videoUrl
  } = settings;

  return (
    <>
      <section
        className="title_and_video container-fluid py-5"
        style={{ background: "red" }}
        id="top"
      >
        <div className="row">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h1>A new way to lock your Mac. Just walk away.</h1>

                <p>
                  Use your iPhone to lock and unlock your Mac automatically.
                  When you walk away from your Mac, it will be automatically
                  locked. Once you approach your workplace, Near Lock will
                  unlock your Mac.
                  <br />
                  <br />
                  You can easily <strong>set the distance</strong> on which your
                  Mac should automatically be locked or unlocked. For additional
                  security use <strong>Touch ID</strong> or{" "}
                  <strong>Apple Watch</strong> to confirm each Mac login.
                  <br />
                  <br />
                  Try it out for FREE!
                </p>
              </div>
              <div className="col-md-6">
                <div className="video_wrapper">
                  <a className="videoplay" id="videoLink" href={videoUrl}>
                    <img
                      src="img/video.jpg"
                      className="img-responsive videoimg"
                      alt=""
                    />
                    <div className="play">
                      <img src="img/play.svg" alt="" />
                      Play Video
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
        </div>{" "}
      </section>

      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia magni
        animi accusantium at iusto repudiandae voluptates enim debitis vitae!
        Esse consequuntur recusandae unde sed iusto quidem sunt rerum odit
        praesentium? <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia magni
        animi accusantium at iusto repudiandae voluptates enim debitis vitae!
        Esse consequuntur recusandae unde sed iusto quidem sunt rerum odit
        praesentium? <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia magni
        animi accusantium at iusto repudiandae voluptates enim debitis vitae!
        Esse consequuntur recusandae unde sed iusto quidem sunt rerum odit
        praesentium? <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia magni
        animi accusantium at iusto repudiandae voluptates enim debitis vitae!
        Esse consequuntur recusandae unde sed iusto quidem sunt rerum odit
        praesentium? <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia magni
        animi accusantium at iusto repudiandae voluptates enim debitis vitae!
        Esse consequuntur recusandae unde sed iusto quidem sunt rerum odit
        praesentium? <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia magni
        animi accusantium at iusto repudiandae voluptates enim debitis vitae!
        Esse consequuntur recusandae unde sed iusto quidem sunt rerum odit
        praesentium? <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia magni
        animi accusantium at iusto repudiandae voluptates enim debitis vitae!
        Esse consequuntur recusandae unde sed iusto quidem sunt rerum odit
        praesentium? <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia magni
        animi accusantium at iusto repudiandae voluptates enim debitis vitae!
        Esse consequuntur recusandae unde sed iusto quidem sunt rerum odit
        praesentium? <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia magni
        animi accusantium at iusto repudiandae voluptates enim debitis vitae!
        Esse consequuntur recusandae unde sed iusto quidem sunt rerum odit
        praesentium? <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia magni
        animi accusantium at iusto repudiandae voluptates enim debitis vitae!
        Esse consequuntur recusandae unde sed iusto quidem sunt rerum odit
        praesentium? <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia magni
        animi accusantium at iusto repudiandae voluptates enim debitis vitae!
        Esse consequuntur recusandae unde sed iusto quidem sunt rerum odit
        praesentium? <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia magni
        animi accusantium at iusto repudiandae voluptates enim debitis vitae!
        Esse consequuntur recusandae unde sed iusto quidem sunt rerum odit
        praesentium? <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia magni
        animi accusantium at iusto repudiandae voluptates enim debitis vitae!
        Esse consequuntur recusandae unde sed iusto quidem sunt rerum odit
        praesentium? <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia magni
        animi accusantium at iusto repudiandae voluptates enim debitis vitae!
        Esse consequuntur recusandae unde sed iusto quidem sunt rerum odit
        praesentium? <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia magni
        animi accusantium at iusto repudiandae voluptates enim debitis vitae!
        Esse consequuntur recusandae unde sed iusto quidem sunt rerum odit
        praesentium? <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia magni
        animi accusantium at iusto repudiandae voluptates enim debitis vitae!
        Esse consequuntur recusandae unde sed iusto quidem sunt rerum odit
        praesentium? <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia magni
        animi accusantium at iusto repudiandae voluptates enim debitis vitae!
        Esse consequuntur recusandae unde sed iusto quidem sunt rerum odit
        praesentium? <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia magni
        animi accusantium at iusto repudiandae voluptates enim debitis vitae!
        Esse consequuntur recusandae unde sed iusto quidem sunt rerum odit
        praesentium? <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia magni
        animi accusantium at iusto repudiandae voluptates enim debitis vitae!
        Esse consequuntur recusandae unde sed iusto quidem sunt rerum odit
        praesentium? <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia magni
        animi accusantium at iusto repudiandae voluptates enim debitis vitae!
        Esse consequuntur recusandae unde sed iusto quidem sunt rerum odit
        praesentium? <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia magni
        animi accusantium at iusto repudiandae voluptates enim debitis vitae!
        Esse consequuntur recusandae unde sed iusto quidem sunt rerum odit
        praesentium? <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia magni
        animi accusantium at iusto repudiandae voluptates enim debitis vitae!
        Esse consequuntur recusandae unde sed iusto quidem sunt rerum odit
        praesentium? <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia magni
        animi accusantium at iusto repudiandae voluptates enim debitis vitae!
        Esse consequuntur recusandae unde sed iusto quidem sunt rerum odit
        praesentium? <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia magni
        animi accusantium at iusto repudiandae voluptates enim debitis vitae!
        Esse consequuntur recusandae unde sed iusto quidem sunt rerum odit
        praesentium? <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia magni
        animi accusantium at iusto repudiandae voluptates enim debitis vitae!
        Esse consequuntur recusandae unde sed iusto quidem sunt rerum odit
        praesentium? <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia magni
        animi accusantium at iusto repudiandae voluptates enim debitis vitae!
        Esse consequuntur recusandae unde sed iusto quidem sunt rerum odit
        praesentium? <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia magni
        animi accusantium at iusto repudiandae voluptates enim debitis vitae!
        Esse consequuntur recusandae unde sed iusto quidem sunt rerum odit
        praesentium? <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia magni
        animi accusantium at iusto repudiandae voluptates enim debitis vitae!
        Esse consequuntur recusandae unde sed iusto quidem sunt rerum odit
        praesentium? <br />
      </div>

      <h2 id="download">Download</h2>

      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia magni
        animi accusantium at iusto repudiandae voluptates enim debitis vitae!
        Esse consequuntur recusandae unde sed iusto quidem sunt rerum odit
        praesentium? <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia magni
        animi accusantium at iusto repudiandae voluptates enim debitis vitae!
        Esse consequuntur recusandae unde sed iusto quidem sunt rerum odit
        praesentium? <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia magni
        animi accusantium at iusto repudiandae voluptates enim debitis vitae!
        Esse consequuntur recusandae unde sed iusto quidem sunt rerum odit
        praesentium? <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia magni
        animi accusantium at iusto repudiandae voluptates enim debitis vitae!
        Esse consequuntur recusandae unde sed iusto quidem sunt rerum odit
        praesentium? <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia magni
        animi accusantium at iusto repudiandae voluptates enim debitis vitae!
        Esse consequuntur recusandae unde sed iusto quidem sunt rerum odit
        praesentium? <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia magni
        animi accusantium at iusto repudiandae voluptates enim debitis vitae!
        Esse consequuntur recusandae unde sed iusto quidem sunt rerum odit
        praesentium? <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia magni
        animi accusantium at iusto repudiandae voluptates enim debitis vitae!
        Esse consequuntur recusandae unde sed iusto quidem sunt rerum odit
        praesentium? <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia magni
        animi accusantium at iusto repudiandae voluptates enim debitis vitae!
        Esse consequuntur recusandae unde sed iusto quidem sunt rerum odit
        praesentium? <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia magni
        animi accusantium at iusto repudiandae voluptates enim debitis vitae!
        Esse consequuntur recusandae unde sed iusto quidem sunt rerum odit
        praesentium? <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia magni
        animi accusantium at iusto repudiandae voluptates enim debitis vitae!
        Esse consequuntur recusandae unde sed iusto quidem sunt rerum odit
        praesentium? <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia magni
        animi accusantium at iusto repudiandae voluptates enim debitis vitae!
        Esse consequuntur recusandae unde sed iusto quidem sunt rerum odit
        praesentium? <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia magni
        animi accusantium at iusto repudiandae voluptates enim debitis vitae!
        Esse consequuntur recusandae unde sed iusto quidem sunt rerum odit
        praesentium? <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia magni
        animi accusantium at iusto repudiandae voluptates enim debitis vitae!
        Esse consequuntur recusandae unde sed iusto quidem sunt rerum odit
        praesentium? <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia magni
        animi accusantium at iusto repudiandae voluptates enim debitis vitae!
        Esse consequuntur recusandae unde sed iusto quidem sunt rerum odit
        praesentium? <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia magni
        animi accusantium at iusto repudiandae voluptates enim debitis vitae!
        Esse consequuntur recusandae unde sed iusto quidem sunt rerum odit
        praesentium? <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia magni
        animi accusantium at iusto repudiandae voluptates enim debitis vitae!
        Esse consequuntur recusandae unde sed iusto quidem sunt rerum odit
        praesentium? <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia magni
        animi accusantium at iusto repudiandae voluptates enim debitis vitae!
        Esse consequuntur recusandae unde sed iusto quidem sunt rerum odit
        praesentium? <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia magni
        animi accusantium at iusto repudiandae voluptates enim debitis vitae!
        Esse consequuntur recusandae unde sed iusto quidem sunt rerum odit
        praesentium? <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia magni
        animi accusantium at iusto repudiandae voluptates enim debitis vitae!
        Esse consequuntur recusandae unde sed iusto quidem sunt rerum odit
        praesentium? <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia magni
        animi accusantium at iusto repudiandae voluptates enim debitis vitae!
        Esse consequuntur recusandae unde sed iusto quidem sunt rerum odit
        praesentium? <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia magni
        animi accusantium at iusto repudiandae voluptates enim debitis vitae!
        Esse consequuntur recusandae unde sed iusto quidem sunt rerum odit
        praesentium? <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia magni
        animi accusantium at iusto repudiandae voluptates enim debitis vitae!
        Esse consequuntur recusandae unde sed iusto quidem sunt rerum odit
        praesentium? <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia magni
        animi accusantium at iusto repudiandae voluptates enim debitis vitae!
        Esse consequuntur recusandae unde sed iusto quidem sunt rerum odit
        praesentium? <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia magni
        animi accusantium at iusto repudiandae voluptates enim debitis vitae!
        Esse consequuntur recusandae unde sed iusto quidem sunt rerum odit
        praesentium? <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia magni
        animi accusantium at iusto repudiandae voluptates enim debitis vitae!
        Esse consequuntur recusandae unde sed iusto quidem sunt rerum odit
        praesentium? <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia magni
        animi accusantium at iusto repudiandae voluptates enim debitis vitae!
        Esse consequuntur recusandae unde sed iusto quidem sunt rerum odit
        praesentium? <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia magni
        animi accusantium at iusto repudiandae voluptates enim debitis vitae!
        Esse consequuntur recusandae unde sed iusto quidem sunt rerum odit
        praesentium? <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia magni
        animi accusantium at iusto repudiandae voluptates enim debitis vitae!
        Esse consequuntur recusandae unde sed iusto quidem sunt rerum odit
        praesentium? <br />
      </div>

      <h2 id="compatibility">Compatibility</h2>
    </>
  );
}

export default HomePage;
