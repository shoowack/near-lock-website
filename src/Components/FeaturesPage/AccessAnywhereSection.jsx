import React from "react";
import FeatureContainer from "./../FeatureContainer";

export default function AccessAnywhereSection() {
  return (
    <FeatureContainer
      odd
      featureTitle={"Access Anywhere"}
      featureDescription={"Quickly access Near Lock on your iPhone!"}
      padding={"pt-5"}
    >
      <div className="row">
        <div className="col-md-4 three-d-touch">
          <img
            src="/feature/3d_touch_icon_sub.svg"
            alt=""
            className="feature-icon"
          />
          <h4>3D Touch</h4>
          <p className="text-left">
            Use{" "}
            <a
              href="https://developer.apple.com/ios/3d-touch/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              3D Touch
            </a>{" "}
            to access Near Lock right from your Home screen.
            <br />
            <br />
            <a
              href="https://developer.apple.com/ios/3d-touch/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              3D Touch
            </a>{" "}
            enables you to:
          </p>
          <ul className="text-left">
            <li>lock and unlock your Mac</li>
            <li>turn Near Lock tracking on and off</li>
          </ul>
        </div>
        <div className="col-md-4 notification_center_icon">
          <img
            src="/feature/notification_center_icon.svg"
            alt=""
            className="feature-icon"
          />
          <h4>Notification Center</h4>
          <p className="text-left">
            Swipe down on your iPhone home screen to access your Notification
            Center.
            <br />
            <br />
            Using the{" "}
            <a
              href="https://developer.apple.com/ios/human-interface-guidelines/extensions/widgets/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Notification Center Widget
            </a>{" "}
            you can:
          </p>
          <ul className="text-left">
            <li>check the current status of your Mac</li>
            <li>lock and unlock your Mac</li>
            <li>turn Near Lock tracking on or off</li>
            <li>
              copy and paste clipboard from your iPhone to your Mac and vice
              versa.
            </li>
          </ul>
        </div>
        <div className="col-md-4 interactive_notifications_icon">
          <img
            src="/feature/interactive_notifications_icon.svg"
            alt=""
            className="feature-icon"
          />
          <h4>Interactive Notifications</h4>
          <p className="text-left">
            You don't even need to open the Near Lock app on your iPhone to
            unlock your Mac.
            <br />
            <br />
            Using the <a href="#unlock-options">Mac Wake Unlock</a> option you
            will receive a notification on your iPhone every time your Mac is
            woken up from sleep.You can then unlock your Mac directly through
            the received notification.
            <br />
            <br />
            {/* <ul>
              <li>
                unlock your Mac with Yes or No (no authentication)
              </li>
              <li>
                unlock your Mac with double knocking on your iPhone
                (no authentication)
              </li>
              <li>
                unlock your Mac with Touch ID or Passcode
                (authentication required)
              </li>
            </ul> */}
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 col-sm-4 d-none d-md-block">
          <img
            src="/feature/3d-touch-iphone.png"
            className="img-fluid center-block"
            alt=""
          />
        </div>
        <div className="col-md-4 col-sm-4 d-none d-md-block">
          <img
            src="/feature/notification-center-iphone.png"
            className="img-fluid center-block"
            alt=""
          />
        </div>
        <div className="col-md-4 col-sm-4 d-none d-md-block">
          <img
            src="/feature/interactive-notifications-iphone.png"
            className="img-fluid center-block"
            alt=""
          />
        </div>
      </div>
    </FeatureContainer>
  );
}
