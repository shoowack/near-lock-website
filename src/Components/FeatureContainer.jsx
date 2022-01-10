import React from 'react';
import { Col, Container, Row } from 'reactstrap';

const FeatureContainer = ({
  odd,
  newFeature,
  featureIcon,
  featureTitle,
  featureDescription,
  padding,
  children,
}) => {
  const browserFriendlyTitle = featureTitle.replaceAll(' ', '-').toLowerCase();

  return (
    <Container fluid className={odd ? ' odd-section' : ''} id={browserFriendlyTitle}>
      <Container className={`text-center feature ${padding || 'py-5'}`}>
        <Row>
          <Col>
            {newFeature && <span className="new-feature">NEW</span>}

            <img
              src={`/feature/${featureIcon || browserFriendlyTitle}_icon_alt.svg`}
              style={{ width: '60px', height: '60px' }}
              className="mb-4"
              alt=""
            />
            <h2>{featureTitle}</h2>
          </Col>
        </Row>
        <Row>
          <Col
            md={{ size: 8, offset: 2 }}
            className="mb-5"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: featureDescription }}
          />
        </Row>
        {children}
      </Container>
    </Container>
  );
};

export default FeatureContainer;
