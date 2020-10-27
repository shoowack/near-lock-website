import React from "react";
import FeatureContainer from "./../FeatureContainer";

function MacUnlockConfirmation() {
  return (
    <FeatureContainer
      featureTitle={"Unlock Options"}
      featureDescription={
        "Unlock your Mac with Apple Watch, double knock on iPhone, Touch ID, 3D Touch, notification center or unlock your Mac automatically whenever your iPhone is close to your Mac."
      }
    >
      <div className="row">
        <div className="col-12 col-md-4 unlock_approach_icon">
          <img
            src="/feature/unlock_approach_icon.svg"
            alt=""
            className="feature-icon"
          />
          <h4>Automatically Unlock on Approach</h4>
          <p className="text-left">
            Use your iPhone to lock and unlock your Mac automatically.
            <br />
            <br />
            When you walk away from your Mac, it will be automatically locked.
            Once you approach your workplace, Near Lock will unlock your Mac.
          </p>
        </div>
        <div className="col-12 col-md-4 wifi_unlock_icon">
          <img
            src="/feature/wifi_unlock_icon.svg"
            alt=""
            className="feature-icon"
          />
          <h4>Wifi Unlock</h4>
          <p className="text-left">
            Keep your Mac unlocked while connected to your selected WiFi network
            (e.g. Home network).
            <br />
            <br />
            Find this option under <strong>Advanced settings</strong> in the
            Near Lock Mac settings.
          </p>
        </div>
        <div className="col-12 col-md-4 mac_wake_unlock_icon">
          <img
            src="/feature/mac_wake_unlock_icon.svg"
            alt=""
            className="feature-icon"
          />
          <h4>Mac Wake Unlock</h4>
          <p className="text-left">
            After your Mac is woken up from sleep and the password screen is
            shown, you can use your iPhone to easily unlock your Mac.
            <br />
            <br />
            You will receive a interactive notification on your iPhone which can
            then be used to unlock your Mac. Use the double knock option to
            unlock your Mac directly from your pocket or use any of the{" "}
            <a href="#unlock-confirmation">unlock confirmation</a> options.
          </p>
        </div>
      </div>
    </FeatureContainer>
  );
}

export default MacUnlockConfirmation;
