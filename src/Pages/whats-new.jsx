import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import yaml from 'js-yaml';

import React, { useEffect, useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
// import ReactMarkdown from 'react-markdown';
// import gfm from 'remark-gfm';
import { Container, Col, Row } from 'reactstrap';
import TitleHeader from '../Components/TitleHeader';
// import versions from '../Data/CHANGELOG.md';

const markdownFile = path('../Data/CHANGELOG.md');
const fileContents = fs.readFileSync(markdownFile, 'utf8');

const VersionsPage = ({ versions }) => {
  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents, {
    engines: {
      yaml: (s) => yaml.safeLoad(s, { schema: yaml.JSON_SCHEMA }),
      //  as object,
    },
  });
  const matterData = matterResult.data;
  //  as {
  //   date: string;
  //   title: string;
  //   tags: string[];
  //   slug: string;
  // };

  console.log(matterData);
  // return matterData;

  //----------------------------------------------------------------------------------

  // const [changelog, setChangelog] = useState('Loading...');

  // useEffect(() => {
  //   fetch(versions)
  //     .then((response) => response.text())
  //     .then((text) => setChangelog(text));
  // }, []);

  // const sidebar = changelog
  //   .split('\n')
  //   .filter((item) => item.startsWith('###'))
  //   .map((item) => item.split(':'))
  //   .map((item) => item[0].split(']('))
  //   .map((item) => item[0].slice(5));

  return (
    <>
      <TitleHeader>Version History</TitleHeader>
      <Container className="py-3 py-md-5">
        <Row>
          <div className="d-none d-md-block col-2">
            <div className="sticky-top" style={{ top: '94px' }}>
              <h5>Versions:</h5>
              {/* {sidebar.map((item) => (
                <>
                  <Link
                    // scroll={(el) => scrollWithOffset(el, -70)}
                    smooth
                    to={`/whats-new#${item.split('.').join('')}`}
                  >
                    {item}
                  </Link>
                  <br />
                </>
              ))} */}
            </div>
          </div>
          <Col md={10}>
            {/* <ReactMarkdown
              plugins={[gfm]}
              source={changelog}
              renderers={{
                link: (props) => (
                  <a {...props} id={props.href.slice(1)}>
                    {props.node.children[0].value}
                  </a>
                ),
              }}
            /> */}
          </Col>
        </Row>
      </Container>
    </>
  );
};

// VersionsPage.getInitialProps = async () => {
//   const versions = await import(`../Data/CHANGELOG.md`);

//   console.log(versions);

//   return versions;
// };

export default VersionsPage;
