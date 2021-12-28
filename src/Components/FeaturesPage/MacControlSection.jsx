import React from "react";
import FeatureContainer from "./../FeatureContainer";

const MacControlSection = () => (
  <FeatureContainer
    featureTitle={"Mac Control"}
    featureDescription={"Use Near Lock to see who uses your Mac."}
  >
    <div className="row">
      <div className="col-md-6 order-md-1 failed-login-attempts_icon login-photos_icon d-flex justify-content-center flex-column px-5">
        <div className="d-flex justify-content-center">
          <img
            src="/feature/failed_login_attempts_icon.svg"
            alt=""
            className="feature-icon m-0"
          />
          <img
            src="/feature/login_photo_icon.svg"
            alt=""
            className="feature-icon m-0"
          />
        </div>
        <h3 className="text-center">Unlock Photos</h3>
        <ul className="text-left">
          <li>
            <strong>Failed login attempts</strong> feature takes a photo from
            the Mac camera and sends a notification to your iPhone when a
            wrong password is inserted on your Mac login screen. Find this
            option under <strong>Mac control</strong>.
            <br />
            <br />
            <div className="alert alert-danger mb-5" role="alert">
              This feature doesn't work on macOS Sierra right now, but we are
              working hard to fix it. Stay informed through our{" "}
              <a href="/updates">updates</a>.
            </div>
          </li>
          <li>
            <strong>Login Photos</strong> feature can take a photo from the
            Mac camera after each mac login. You can enable or disable this
            feature in the Mac control settings in the{" "}
            <a href="#access-anywhere-menubar">Mac app</a>.
          </li>
        </ul>
      </div>
      <div className="col-md-6 order-md-0 mac-control-thumbnails">
        <img
          src="/feature/unlock-photos-thumbnail.png"
          className="unlock-photos-thumbnail img-fluid"
          alt=""
        />
      </div>
    </div>
    <hr className="my-md-5" />
    <div className="row">
      <div className="col-md-6 lock-unlock-history_icon text-center d-flex justify-content-center flex-column px-5">
        <img
          src="/feature/lock_unlock_history_icon.svg"
          alt=""
          className="feature-icon"
        />
        <h4>Lock/Unlock History</h4>
        <p>
          See full list of times when you logged in or logged out, how long
          you have been logged in, and track each time you inserted the wrong
          password into the login scree password field.
        </p>
      </div>
      <div className="col-md-6 mac-control-thumbnails">
        <img
          src="/feature/lock-unlock-history-thumbnail.png"
          className="lock-unlock-history-thumbnail img-fluid"
          alt=""
        />
      </div>
    </div>
  </FeatureContainer>
);

export default MacControlSection;