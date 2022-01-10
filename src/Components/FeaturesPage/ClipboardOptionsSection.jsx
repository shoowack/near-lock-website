import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';

const ClipboardOptionsSection = () => (
  <VisibilitySensor>
    {({ isVisible }) => (
      <div className="container-fluid" style={{ background: '#fafafa' }} id="clipboard">
        <div className="container">
          <div className="row">
            <div className="col-md-6 order-md-1 feature_menubar mb-4 mb-md-0">
              <img
                src="/feature/menubar.png"
                className={`feature_menubar__main_image${isVisible ? ' active' : ''}`}
                alt=""
              />
              <div className={`feature_menubar_zoomed${isVisible ? ' active' : ''}`}>
                <div className="feature_menubar_zoomed__left_icon" />
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label>Clipboard</label>
                <div className="feature_menubar_zoomed__right_icon" />
              </div>
            </div>
            <div className="col-md-6 order-md-0 feature_menubar__content d-flex justify-content-center flex-column px-5">
              <h4>Mac Menu bar Clipboard options</h4>
              <p>
                Near Lock allows you to send clipboard text from your Mac to your iPhone. Either
                press the shortcut button in the <a href="#access-anywhere-menubar">Mac Menu bar</a>{' '}
                or use the shortcut &quot;CTRL+CMD+V&quot; on your Mac.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 order-md-1 feature_clipboard_ios__content d-flex justify-content-center flex-column mt-4 mt-md-0 px-5">
              <h4>iOS Clipboard options</h4>
              <p>
                The Near Lock app on your iPhone allows you to send the current clipboard text from
                your iPhone to your Mac but also to fetch the current clipboard from your Mac to
                your iPhone.
                <br />
                <br />
                Access these option inside the Near Lock app or from the Notification Center widget.
              </p>
            </div>
            <div className="col-md-6 order-md-0 feature_clipboard_ios">
              <img
                src="/feature/clipboard_ios.png"
                className={`feature_clipboard_ios__main_image${isVisible ? ' active' : ''}`}
                alt=""
              />
              <div className={`feature_clipboard_ios__zoomed${isVisible ? ' active' : ''}`}>
                <div className="feature_clipboard_ios__zoomed__left">
                  <div className="feature_clipboard_ios__zoomed__left_icon" />
                  {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                  <label>Copy to Mac</label>
                </div>
                <div className="feature_clipboard_ios__zoomed__right">
                  <div className="feature_clipboard_ios__zoomed__right_icon" />
                  {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                  <label>Copy from Mac</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
  </VisibilitySensor>
);

export default ClipboardOptionsSection;
