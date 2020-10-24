import React from "react";
import { familyImg } from "./../../assets";

function FamilySection() {
  return (
    <section
      className="family text-center py-5"
      style={{ background: "#f2f2f2" }}
    >
      <h3>The Near Lock family</h3>
      <p>
        Near Lock is available for your iPhone, iPad, Mac and Apple Watch as
        separate apps.
      </p>
      <img
        src={familyImg}
        className="img-responsive col-md-6 col-md-offset-3 mt-3"
        alt=""
      />
      <div className="clearfix"></div>
    </section>
  );
}

export default FamilySection;
