import React from "react";

function ClipboardOptionsSection() {
  return (
    <div
      className="container-fluid"
      style={{ background: "#fafafa" }}
      id="clipboard"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-push-6 feature_menubar">
            <img
              src="/feature/menubar.png"
              className="feature_menubar__main_image active" // TODO animate on scroll
              alt=""
            />
            <div className="feature_menubar_zoomed">
              <div className="feature_menubar_zoomed__left_icon"></div>
              <label>Clipboard</label>
              <div className="feature_menubar_zoomed__right_icon"></div>
            </div>
          </div>
          <div className="col-md-6 col-md-pull-6 feature_menubar__content">
            <h3 className="no-icon">Mac Menu bar Clipboard options</h3>
            <p>
              Near Lock allows you to send clipboard text from your Mac to your
              iPhone. Either press the shortcut button in the{" "}
              <a href="#access-anywhere-menubar">Mac Menu bar</a> or use the
              shortcut "CTRL+CMD+V" on your Mac.
            </p>
          </div>
          <div className="col-md-6 col-md-push-6 feature_clipboard_ios__content">
            <h3 className="no-icon">iOS Clipboard options</h3>
            <p>
              The Near Lock app on your iPhone allows you to send the current
              clipboard text from your iPhone to your Mac but also to fetch the
              current clipboard from your Mac to your iPhone.
              <br />
              <br />
              Access these option inside the Near Lock app or from the
              Notification Center widget.
            </p>
          </div>
          <div className="col-md-6 col-md-pull-6 feature_clipboard_ios">
            <img
              src="/feature/clipboard_ios.png"
              className="feature_clipboard_ios__main_image active" // TODO animate on scroll
              alt=""
            />
            <div className="feature_clipboard_ios__zoomed">
              <div className="feature_clipboard_ios__zoomed__left">
                <div className="feature_clipboard_ios__zoomed__left_icon"></div>
                <label>Copy to Mac</label>
              </div>
              <div className="feature_clipboard_ios__zoomed__right">
                <div className="feature_clipboard_ios__zoomed__right_icon"></div>
                <label>Copy from Mac</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClipboardOptionsSection;
