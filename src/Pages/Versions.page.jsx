import React, { useEffect, useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { Container, Col, Row } from 'reactstrap';
import TitleHeader from '../components/TitleHeader';
import versions from '../Data/CHANGELOG.md';
import { withState } from '../context';

const VersionsPage = withState(({ state: { scrollWithOffset } }) => {
  const [changelog, setChangelog] = useState('Loading...');

  useEffect(() => {
    fetch(versions)
      .then((response) => response.text())
      .then((text) => setChangelog(text));
  }, []);

  const sidebar = changelog
    .split('\n')
    .filter((item) => item.startsWith('###'))
    .map((item) => item.split(':'))
    .map((item) => item[0].split(']('))
    .map((item) => item[0].slice(5));

  return (
    <>
      <TitleHeader>Version History</TitleHeader>
      <Container className="py-3 py-md-5">
        <Row>
          <div className="d-none d-md-block col-2">
            <div className="sticky-top" style={{ top: '94px' }}>
              <h5>Versions:</h5>
              {sidebar.map((item) => (
                <>
                  <Link
                    scroll={(el) => scrollWithOffset(el, -70)}
                    smooth
                    to={`/whats-new#${item.split('.').join('')}`}
                  >
                    {item}
                  </Link>
                  <br />
                </>
              ))}
            </div>
          </div>
          <Col md={10}>
            <ReactMarkdown
              plugins={[gfm]}
              source={changelog}
              renderers={{
                link: (props) => (
                  <a {...props} id={props.href.slice(1)}>
                    {props.node.children[0].value}
                  </a>
                ),
              }}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
});

export default VersionsPage;
