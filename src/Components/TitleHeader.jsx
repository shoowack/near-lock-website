import React from "react";

function TitleHeader({ children }) {
  return (
    <div
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default TitleHeader;
