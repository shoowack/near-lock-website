import React from "react";
import FeatureContainer from "./../FeatureContainer";

function LockSettingsSection() {
  return (
    <FeatureContainer
      odd
      featureTitle={"Lock Settings"}
      featureDescription={"Choose how you wish to lock your Mac."}
    >
      <div className="row">
        <div className="col-md-6 sleep_icon">
          <h3>Sleep</h3>
          <p>
            Sleep (hibernate) will turn your Mac screen off when locking your
            Mac. Use this option to preserve battery life on your Mac.
          </p>
        </div>
        <div className="col-md-6 screensaver_icon">
          <h3>Screensaver</h3>
          <p>
            Screensaver option will show your default screensaver when locking
            your Mac with Near Lock.
          </p>
        </div>
      </div>
    </FeatureContainer>
  );
}

export default LockSettingsSection;
