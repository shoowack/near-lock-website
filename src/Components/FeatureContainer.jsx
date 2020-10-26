import React from "react";

function FeatureContainer({
  odd,
  featureIcon,
  featureTitle,
  featureDescription,
  padding,
  children
}) {
  const browserFriendlyTitle = featureTitle.replace(" ", "-").toLowerCase();

  return (
    <div
      className="container-fluid"
      style={{ background: odd ? "#fafafa" : "#fffff" }}
      id={browserFriendlyTitle}
    >
      <div className={"container feature " + (padding ? padding : "py-5")}>
        <div className="row">
          <div className="col-12 text-center mb-5">
            <img
              src={`/feature/${
                featureIcon ? featureIcon : browserFriendlyTitle
              }_icon_alt.svg`}
              style={{ width: "60px", height: "60px" }}
              className="mb-4"
              alt=""
            />
            <h2>{featureTitle}</h2>
            {featureDescription}
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}

export default FeatureContainer;
