import React from "react";
import { Helmet } from "react-helmet";
import FeaturesHeaderSlider from "./Sliders/FeaturesHeaderSlider";

export default function TitleHeader({ scrollWithOffset, location, children }) {
  return (
    <>
      {location ? (
        <Helmet>
          <title>Near Lock - {children}</title>
          <link
            rel="canonical"
            href={`${window.location.protocol}//${window.location.hostname}${location}`}
          />
        </Helmet>
      ) : null}
      <div
        id="top"
        className="pb-5"
        style={{
          paddingTop: "115px",
          backgroundImage: "linear-gradient(-45deg, #35d678, #3291e0)",
          color: "#fff"
        }}
      >
        <div className="container text-center">
          <div className="row">
            <div className="col-12">
              <h2>{children}</h2>
              {location === "/features" && (
                <FeaturesHeaderSlider scrollWithOffset={scrollWithOffset} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
