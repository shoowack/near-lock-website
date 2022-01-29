import React from 'react';
import './tools-section.module.scss';
import { Container, Row, Col } from 'reactstrap';

const ToolsSection = () => (
  <Container fluid>
    <Row>
      <Col
        md={{
          size: 6,
          order: 2,
        }}
      >
        <div className="iphone-app" />
      </Col>
      <Col
        md={{
          size: 5,
          offset: 1,
          order: 0,
        }}
        className="text-lg-right text-md-right text-sm-center text-xs-center d-flex justify-content-center flex-column px-sm-5"
      >
        <h3>Control multiple Macs</h3>
        <p>
          User Near Lock to lock and unlock multiple Macs, copy and paste clipboards, take photos on
          failed login attempts and many more features.
        </p>
      </Col>
    </Row>
    <Row>
      <Col
        md={{
          size: 4,
          offset: 1,
          order: 1,
        }}
        className="text-lg-left text-md-left text-sm-center text-xs-center d-flex justify-content-center flex-column px-sm-5"
      >
        <h3>Menu bar</h3>
        <p>
          Near Lock lives in your Mac&apos;s menu bar and lets you view status of your iPhone and
          set the desirable locking distance.
        </p>
      </Col>
      <Col
        md={{
          size: 5,
          order: 0,
        }}
        className="imac_menubar"
      />
    </Row>
  </Container>
);

export default ToolsSection;
