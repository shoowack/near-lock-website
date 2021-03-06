import React from "react";

export default function MacMenuBarSection() {
  return (
    <div className="container-fluid" id="mac-menu-bar">
      <div className="container">
        <div className="row">
          <div className="col-12 col-xs-3 col-md-6 col-lg-5 offset-lg-1 py-md-5">
            <h3>Mac Menu Bar</h3>
            <p>
              Near Lock lives in your Mac's menu bar and lets you view status of
              your iPhone, quickly enable or disable locking and set the
              desirable locking distance.
            </p>
            <div className="alert alert-primary" role="alert">
              Fast access to <a href="#unlock-options">WiFi Unlock</a> controls.
            </div>
            <div className="alert alert-primary" role="alert">
              Copy any text on your Mac, paste it on iOS via{" "}
              <a href="#clipboard">Clipboard</a> feature.
            </div>
            <div className="alert alert-primary" role="alert">
              Easy access to your Mac control options which include:
              <ul>
                <li>
                  <a href="#mac-control">Failed Login Attempts</a>
                </li>
                <li>
                  <a href="#mac-control">Login Photos</a>
                </li>
                <li>
                  <a href="#mac-control">Lock/Unlock History</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
