import React from "react";
import TestimonialsSlider from "./../../Components/Sliders/TestimonialsSlider";
import {Container, Row, Col} from "reactstrap";

const TestimonialsSection = () =>
  <Container fluid className="odd-section">
    <Container className="py-5 text-center">
      <Row>
        <Col>
          <div className="column testimonials">
            <h3 className="mb-5">Testimonials</h3>
            <TestimonialsSlider />
          </div>
        </Col>
      </Row>
    </Container>
  </Container>

export default TestimonialsSection;