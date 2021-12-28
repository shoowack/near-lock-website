import React from "react";
import {Container, Row, Col} from 'reactstrap';
import "./newsletter.scss";

const NewsletterSection = () =>
  <Container className="newsletter py-3 py-md-5 text-center">
    <Row>
      <Col sm={12}>
        <h3>Stay informed with our newsletter</h3>
        <small>
          Subscribe to get news about new releases and special offers
        </small>
      </Col>
      <Col sm={12}>
        <div className="d-inline-block mt-4 w-100">
          <form
            method="post"
            name="newsletter-subscription"
            data-netlify="true"
          >
            <input
              type="hidden"
              name="form-name"
              value="newsletter-subscription"
            />
            <input type="email" name="email" placeholder="Your E-mail" />
            <input type="submit" name="submit" value="Subscribe" />
          </form>
        </div>
      </Col>
    </Row>
  </Container>

export default NewsletterSection;