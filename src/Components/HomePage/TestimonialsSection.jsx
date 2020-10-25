import React from "react";
import TestimonialsSlider from "./../../Components/Sliders/TestimonialsSlider";

function TestimonialsSection() {
  return (
    <div className="container py-5 text-center">
      <div className="row">
        <div className="col-12">
          <div className="column testimonials">
            <h1 className="text-center">Testimonials</h1>
            <TestimonialsSlider />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialsSection;
