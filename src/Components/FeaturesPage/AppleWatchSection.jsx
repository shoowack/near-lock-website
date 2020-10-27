import React from "react";
import FeatureContainer from "./../FeatureContainer";

function AppleWatchSection() {
  return (
    <FeatureContainer
      featureTitle={"Apple Watch"}
      featureDescription={
        "The Apple Watch adds an additional dimension to Near Lock. You can now use your watch to safely and seamlessly lock and unlock your Mac.<br /><br />Try it out for free!"
      }
    >
      <div className="row">
        <a
          href="https://itunes.apple.com/us/app/near-lock/id886882252?mt=8"
          className="btn"
        >
          Download now
        </a>
        <div className="apple-watch">
          <img
            src="img/features-watch.png"
            className="apple-watch-image"
            alt=""
          />
          <div className="screen-wrapper">
            <div className="screen">
              <div id="owl-apple-watch" className="owl">
                <div className="item">
                  <img src="img/watch-1.jpg" alt="" />
                </div>
                <div className="item">
                  <img src="img/watch-2.jpg" alt="" />
                </div>
                <div className="item">
                  <img src="img/watch-3.jpg" alt="" />
                </div>
                <div className="item">
                  <img src="img/watch-4.jpg" alt="" />
                </div>
                <div className="item">
                  <img src="img/watch-5.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FeatureContainer>
  );
}

export default AppleWatchSection;
