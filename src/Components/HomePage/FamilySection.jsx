import React from "react";

export default function FamilySection() {
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
        src="/family.png"
        className="img-responsive col-md-6 mt-3"
        style={{ maxWidth: "950px" }}
        alt=""
      />
    </section>
  );
}
