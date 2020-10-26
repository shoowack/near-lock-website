import React from "react";
import "./access-anywhere-section.scss";

function AccessAnywhereSection() {
  return (
    <div
      className="container-fluid"
      style={{ background: "#F2F2F3" }}
      id="access-anywhere"
    >
      <div className="container pt-5 text-center feature">
        <div className="row">
          <div className="col-12">
            <div className="section-header">
              <h1>Access Anywhere</h1>
              <p>Quickly access Near Lock on your iPhone!</p>
            </div>
            <div className="row">
              <div className="col-md-4 three-d-touch">
                <h3>3D Touch</h3>
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
                <h3>Notification Center</h3>
                <p className="text-left">
                  Swipe down on your iPhone home screen to access your
                  Notification Center.
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
                    copy and paste clipboard from your iPhone to your Mac and
                    vice versa.
                  </li>
                </ul>
              </div>
              <div className="col-md-4 interactive_notifications_icon">
                <h3>Interactive Notifications</h3>
                <p className="text-left">
                  You don't even need to open the Near Lock app on your iPhone
                  to unlock your Mac.
                  <br />
                  <br />
                  Using the <a href="#unlock-options">Mac Wake Unlock</a> option
                  you will receive a notification on your iPhone every time your
                  Mac is woken up from sleep.You can then unlock your Mac
                  directly through the received notification.
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
              <div className="col-md-4 col-sm-4 hidden-xs">
                <img
                  src="/feature/3d-touch-iphone.png"
                  className="img-fluid center-block"
                  alt=""
                />
              </div>
              <div className="col-md-4 col-sm-4 hidden-xs">
                <img
                  src="/feature/notification-center-iphone.png"
                  className="img-fluid center-block"
                  alt=""
                />
              </div>
              <div className="col-md-4 col-sm-4 hidden-xs">
                <img
                  src="/feature/interactive-notifications-iphone.png"
                  className="img-fluid center-block"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccessAnywhereSection;
