import React from "react";
import TestimonialsSlider from "./../../Components/Sliders/TestimonialsSlider";

function TestimonialsSection() {
  return (
    <div className="container-fluid" style={{ background: "#F2F2F3" }}>
      <div className="container py-5 text-center">
        <div className="row">
          <div className="col-12">
            <div className="column testimonials">
              <h3 className="mb-5">Testimonials</h3>
              <TestimonialsSlider />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialsSection;
