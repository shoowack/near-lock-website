import React from 'react';
import Slider from 'react-slick';
import FeatureContainer from '../FeatureContainer';

const AppleWatchSection = () => (
  <FeatureContainer
    featureTitle="Apple Watch"
    featureDescription="The Apple Watch adds an additional dimension to Near Lock. You can now use your watch to safely and seamlessly lock and unlock your Mac.<br /><br />Try it out for free!"
  >
    <div className="row">
      <div className="col-12">
        <a href="https://itunes.apple.com/us/app/near-lock/id886882252?mt=8" className="btn">
          Download now
        </a>
      </div>
      <div className="apple-watch">
        <img src="/feature/features-watch.png" className="apple-watch-image" alt="" />
        <div className="screen-wrapper">
          <div className="screen">
            <Slider dots={false} infinite speed={500} slidesToShow={1} slidesToScroll={1} autoplay>
              <div className="item">
                <img src="/feature/watch-1.jpg" alt="" />
              </div>
              <div className="item">
                <img src="/feature/watch-2.jpg" alt="" />
              </div>
              <div className="item">
                <img src="/feature/watch-3.jpg" alt="" />
              </div>
              <div className="item">
                <img src="/feature/watch-4.jpg" alt="" />
              </div>
              <div className="item">
                <img src="/feature/watch-5.jpg" alt="" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  </FeatureContainer>
);

export default AppleWatchSection;
