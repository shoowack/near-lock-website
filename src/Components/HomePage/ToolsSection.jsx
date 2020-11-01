import React from "react";
import "./tools-section.scss";

export default function ToolsSection() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 order-md-1">
          <div className="iphone-app"></div>
        </div>
        <div className="col-md-5 offset-md-1 order-md-0 text-lg-right text-md-right text-sm-center text-xs-center d-flex justify-content-center flex-column px-sm-5">
          <h3>Control multiple Macs</h3>
          <p>
            User Near Lock to lock and unlock multiple Macs, copy and paste
            clipboards, take photos on failed login attempts and many more
            features.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 offset-md-1 order-md-1 text-lg-left text-md-left text-sm-center text-xs-center d-flex justify-content-center flex-column px-sm-5">
          <h3>Menu bar</h3>
          <p>
            Near Lock lives in your Mac's menu bar and lets you view status of
            your iPhone and set the desirable locking distance.
          </p>
        </div>
        <div className="col-md-5 order-md-0 imac_menubar"></div>
      </div>
    </div>
  );
}
