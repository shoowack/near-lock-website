import React from "react";

export default function CompatibilitySection() {
  return (
    <div className="container text-center py-5" id="compatibility">
      <div className="row">
        <div className="col-md-12">
          <h3 className="mb-5">Compatibility</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <img
            src="/devices.svg"
            className="img-fluid mt-md-5 m-lg-4 mb-4 mb-md-0 w-75"
            alt=""
          />
        </div>
        <div className="col-md-6 text-lg-left text-md-left text-sm-center text-xs-center">
          <p>
            Apple Watch
            <br />
            iPhone 4S or newer
            <br />
            iMac late 2012 or newer
            <br />
            MacBook Air 2011 or newer
            <br />
            MacBook Pro 2012 or newer
            <br />
            Mac mini 2011 or newer
            <br />
            Mac Pro late 2013 or newer
            <br />
            <br />
            OS X Mavericks or newer
            <br />
            iOS 7 or newer
          </p>
        </div>
      </div>
    </div>
  );
}
