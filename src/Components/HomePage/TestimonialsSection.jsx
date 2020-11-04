import React from "react";
import TestimonialsSlider from "./../../Components/Sliders/TestimonialsSlider";

export default function TestimonialsSection() {
  return (
    <div className="container-fluid odd-section">
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
