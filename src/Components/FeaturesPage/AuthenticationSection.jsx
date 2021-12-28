import React from "react";
import VisibilitySensor from "react-visibility-sensor";
import FeatureContainer from "./../FeatureContainer";

const AuthenticationSection = () => (
  <VisibilitySensor>
    {({ isVisible }) => (
      <FeatureContainer
        featureTitle={"Authentication"}
        featureDescription={
          "Use Near Lock for faster Mac authentication (such as installing new software)."
        }
      >
        <div className="row">
          <div className="password-prompt-wrapper">
            <img src="/feature/password-prompt.png" alt="" />
            <div className={`prompt ${isVisible && " active"}`}></div>
            <div className={`asterisks ${isVisible && " active"}`}>
              <div className="asterisk"></div>
              <div className="asterisk"></div>
              <div className="asterisk"></div>
              <div className="asterisk"></div>
              <div className="asterisk"></div>
              <div className="asterisk"></div>
              <div className="asterisk"></div>
              <div className="asterisk"></div>
              <div className="asterisk"></div>
              <div className="asterisk"></div>
              <div className="asterisk"></div>
              <div className="asterisk"></div>
              <div className="asterisk"></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p>
              When you get asked for your password on your Mac, such as while
              installing new apps, Near Lock sends you interactive push
              notification asking you to confirm password input, without
              typing anything.
            </p>
          </div>
        </div>
      </FeatureContainer>
    )}
  </VisibilitySensor>
);

export default AuthenticationSection;