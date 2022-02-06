import React from 'react';
import styles from './downloads-section.module.scss';
import { Container, Row, Col } from 'reactstrap';
import { iMacSvg } from '../../media';
import Image from 'next/image';

const DownloadsSection = ({
  showIphoneDownloadHomepageLink,
  showWatchDownloadHomepageLink,
  appStoreLinkUrl,
}) => (
  <Container fluid style={{ background: 'rgba(0, 0, 0, 0.5)' }}>
    <Container className="download text-center py-4" id="download">
      <Row>
        <Col>
          <h3>Download</h3>
        </Col>
      </Row>
      <Row>
        {showIphoneDownloadHomepageLink && appStoreLinkUrl && (
          <a
            href={appStoreLinkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link col-md-4 col-sm-4 col-xs-12 py-4"
          >
            <div className="icon iphone mb-4" style={{ background: 'url(/iphone11.svg)' }} />
            iPhone App
          </a>
        )}

        {showWatchDownloadHomepageLink && appStoreLinkUrl && (
          <a
            href={appStoreLinkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link col-md-4 col-sm-4 col-xs-12 py-4"
          >
            <div className="icon watch mb-4" style={{ background: 'url(/applewatch.svg)' }} />
            Apple Watch
          </a>
        )}

        <a
          href="downloads/nearlock.dmg"
          className="link col-md-4 col-sm-4 col-xs-12 py-4 newsletter-trigger"
        >
          {/* <Image src={iMacSvg} className="icon mac mb-4"     height={'80px'} width={'80px'}/> */}
          <div className="icon mac mb-4" style={{ background: `url(${iMacSvg.src})` }} />
          Mac App
        </a>
      </Row>
      <Row>
        <sub className="col py-4">
          Download iPhone, Mac and Apple Watch applications for FREE, and give it a try!
        </sub>
      </Row>
    </Container>
  </Container>
);

export default DownloadsSection;
