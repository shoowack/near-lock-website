import React from 'react';
import { Row, Col } from 'reactstrap';
import FeatureContainer from '../FeatureContainer';

const MacUnlockConfirmation = () => (
  <FeatureContainer
    odd
    featureIcon="unlock-options"
    featureTitle="Mac Unlock Confirmation"
    featureDescription="Add additional security to Near Lock by confirming each Mac unlock on your iPhone."
  >
    <Row>
      <Col md={4} className="interactive_notifications_icon">
        <img src="/feature/interactive_notifications_icon.svg" alt="" className="feature-icon" />
        <h4>Interactive Notifications</h4>
        <p className="text-left">
          You will get a notification when you approach your Mac or when your Mac is woken up from
          sleep.
          <br />
          <br />
          These notifications allow you to unlock your Mac without opening the Near Lock app on your
          iPhone.
        </p>
      </Col>
      <Col md={4} className="double_knock_icon">
        <img src="/feature/double_knock_icon.svg" alt="" className="feature-icon" />
        <h4>Knock, Knock</h4>
        <p className="text-left">
          Unlock your Mac by double knocking on your iPhone. Use double knock to:
        </p>
        <ul className="text-left">
          <li>confirm Mac unlock with double knock when you approach your Mac</li>
          <li>confirm Mac unlock with double knock when your Mac is woken up from sleep</li>
          <li>
            use knock to authorize Mac request: such as installing new software.{' '}
            <a href="#authentication">Authentication</a>
          </li>
        </ul>
      </Col>
      <Col md={4} className="touch-id_icon">
        <img src="/feature/touch-id_icon.svg" alt="" className="feature-icon" />
        <h4>Touch ID</h4>
        <p className="text-left">
          Add additional protection for unlocking your Mac with the{' '}
          <a
            href="https://support.apple.com/en-us/HT201371"
            rel="noopener noreferrer"
            target="_blank"
          >
            Touch ID
          </a>
          .
          <br />
          <br />
          Once you receive a Near Lock unlock notification, swipe left on the interactive
          notification and press Unlock. You will then be asked for Touch ID or Passcode
          verification in order to unlock your Mac.
        </p>
      </Col>
    </Row>
  </FeatureContainer>
);

export default MacUnlockConfirmation;
