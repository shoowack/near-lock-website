import React from "react";
import FeatureContainer from "./../FeatureContainer";

function AuthenticationSection() {
  return (
    <FeatureContainer
      odd
      featureTitle={"Authentication"}
      featureDescription={
        "Use Near Lock for faster Mac authentication (such as installing new software)."
      }
    >
      <div className="row">
        <div className="password-prompt-wrapper">
          <div className="password-prompt">
            <img src="img/password-prompt.png" alt="" />
            <div className="prompt"></div>
            <div className="asterisks">
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
      </div>
      <div className="row">
        <div className="col-12">
          <p>
            When you get asked for your password on your Mac, such as while
            installing new apps, Near Lock sends you interactive push
            notification asking you to confirm password input, without typing
            anything.
          </p>
        </div>
      </div>
    </FeatureContainer>
  );
}

export default AuthenticationSection;
