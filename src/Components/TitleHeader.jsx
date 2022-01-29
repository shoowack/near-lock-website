import React from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'reactstrap';
import { useLocation } from 'react-router-dom';
import FeaturesHeaderSlider from './Sliders/FeaturesHeaderSlider';
import { withState } from '../context';

const TitleHeader = withState(({ state: { scrollWithOffset }, children }) => {
  // const location = useLocation();

  return (
    <>
      {/* {location.pathname ? (
        <Helmet>
          <title>Near Lock - {children}</title>
          <link
            rel="canonical"
            href={`${window.location.protocol}//${window.location.hostname}${location.pathname}`}
          />
        </Helmet>
      ) : null} */}
      <div
        id="top"
        className="pb-5"
        style={{
          paddingTop: '115px',
          backgroundImage: 'linear-gradient(-45deg, #35d678, #3291e0)',
          color: '#fff',
        }}
      >
        <Container className="text-center">
          <Row>
            <Col sm={12}>
              <h2>{children}</h2>
              {/* {location.pathname === '/features' && (
                <FeaturesHeaderSlider scrollWithOffset={scrollWithOffset} />
              )} */}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
});

export default TitleHeader;
