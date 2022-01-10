import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const MacMenuBarSection = () => (
  <Container fluid id="mac-menu-bar">
    <Container>
      <Row>
        <Col xs={3} md={6} mlg={{ size: 5, offset: 1 }} className="py-md-5">
          <h3>Mac Menu Bar</h3>
          <p>
            Near Lock lives in your Mac&apos;s menu bar and lets you view status of your iPhone,
            quickly enable or disable locking and set the desirable locking distance.
          </p>
          <div className="alert alert-primary" role="alert">
            Fast access to <a href="#unlock-options">WiFi Unlock</a> controls.
          </div>
          <div className="alert alert-primary" role="alert">
            Copy any text on your Mac, paste it on iOS via <a href="#clipboard">Clipboard</a>{' '}
            feature.
          </div>
          <div className="alert alert-primary" role="alert">
            Easy access to your Mac control options which include:
            <ul>
              <li>
                <a href="#mac-control">Failed Login Attempts</a>
              </li>
              <li>
                <a href="#mac-control">Login Photos</a>
              </li>
              <li>
                <a href="#mac-control">Lock/Unlock History</a>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  </Container>
);

export default MacMenuBarSection;
