import React from "react";

function MacControlSection() {
  return (
    <div
      className="container-fluid"
      // style={{ background: "#fafafa" }}
      id="mac-control"
    >
      <div className="container feature py-5">
        <div className="row">
          <div className="col-12 section-header mb-5">
            <h2>Mac Control</h2>
            <p>Use Near Lock to see who uses your Mac.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 order-md-1 failed-login-attempts_icon login-photos_icon d-flex justify-content-center flex-column px-5">
            <h4 className="text-center">Unlock Photos</h4>
            <ul>
              <li>
                <strong>Failed login attempts</strong> feature takes a photo
                from the Mac camera and sends a notification to your iPhone when
                a wrong password is inserted on your Mac login screen. Find this
                option under <strong>Mac control</strong>.
                <br />
                <br />
                <div className="alert bg-danger mb-5">
                  This feature doesn't work on macOS Sierra right now, but we
                  are working hard to fix it. Stay informed through our{" "}
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
            <h4>Lock/Unlock History</h4>
            <p>
              See full list of times when you logged in or logged out, how long
              you have been logged in, and track each time you inserted the
              wrong password into the login scree password field.
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
      </div>
    </div>
  );
}

export default MacControlSection;
