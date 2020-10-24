import React from "react";

function TopSection({ videoUrl }) {
  return (
    <section className="title_and_video container-fluid py-5" id="top">
      <div className="row">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>A new way to lock your Mac. Just walk away.</h1>

              <p>
                Use your iPhone to lock and unlock your Mac automatically. When
                you walk away from your Mac, it will be automatically locked.
                Once you approach your workplace, Near Lock will unlock your
                Mac.
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
  );
}

export default TopSection;
