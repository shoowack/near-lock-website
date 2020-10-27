import React from "react";

function MacMenuBarSection() {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row">
          <div class="col-md-7 col-md-offset-1 col-sm-7">
            <p>
              Near Lock lives in your Mac's menu bar and lets you view status of
              your iPhone, quickly enable or disable locking and set the
              desirable locking distance.
            </p>
            <div class="bg-new-feature">
              Fast access to <a href="#unlock-options">WiFi Unlock</a> controls.
            </div>
            <div class="bg-new-feature">
              Copy any text on your Mac, paste it on iOS via{" "}
              <a href="#clipboard">Clipboard</a> feature.
            </div>
            <div class="bg-new-feature">
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

export default MacMenuBarSection;
