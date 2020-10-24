import React from "react";
import { familyImg } from "./../../assets";

function ToolsSection() {
  return (
    <div className="container py-5" style={{ background: "red" }}>
      <div className="d-flex flex-column">
        <div className="row">
          <div className="col-md-6 text-md-right text-sm-center text-xs-center">
            <h3>Control multiple Macs</h3>
            <p>
              User Near Lock to lock and unlock multiple Macs, copy and paste
              clipboards, take photos on failed login attempts and many more
              features.
            </p>
          </div>
          <div className="col-md-6">
            <div className="iphone-app">sajsbkj</div>
          </div>
        </div>
      </div>
      <section className="menubar d-flex flex-column">
        <div className="row">
          <div className="col-md-6 imac_menubar vcenter">a</div>
          <div className="col-md-6 text-lg-left text-md-left text-sm-center text-xs-center">
            <h3>Menu bar</h3>
            <p>
              Near Lock lives in your Mac's menu bar and lets you view status of
              your iPhone and set the desirable locking distance.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ToolsSection;
