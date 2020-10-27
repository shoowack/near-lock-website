import React from "react";
import FeatureContainer from "./../FeatureContainer";

function AppleWatchSection() {
  return (
    <FeatureContainer
      odd
      featureTitle={"Apple Watch"}
      featureDescription={
        "The Apple Watch adds an additional dimension to Near Lock. You can now use your watch to safely and seamlessly lock and unlock your Mac.<br /><br />Try it out for free!"
      }
    >
      <div className="row">
        <a
          href="https://itunes.apple.com/us/app/near-lock/id886882252?mt=8"
          class="btn"
        >
          Download now
        </a>
        <div class="apple-watch">
          <img src="img/features-watch.png" class="apple-watch-image" alt="" />
          <div class="screen-wrapper">
            <div class="screen">
              <div id="owl-apple-watch" class="owl">
                <div class="item">
                  <img src="img/watch-1.jpg" alt="" />
                </div>
                <div class="item">
                  <img src="img/watch-2.jpg" alt="" />
                </div>
                <div class="item">
                  <img src="img/watch-3.jpg" alt="" />
                </div>
                <div class="item">
                  <img src="img/watch-4.jpg" alt="" />
                </div>
                <div class="item">
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
