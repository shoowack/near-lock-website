import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import TestimonialsSlider from '../Sliders/TestimonialsSlider';

const TestimonialsSection = () => (
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
);

export default TestimonialsSection;
