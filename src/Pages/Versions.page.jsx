import React, { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import TitleHeader from "./../Components/TitleHeader";
import versions from "./../../src/Data/CHANGELOG.md";

export default function VersionsPage(props) {
  const {
    scrollWithOffset,
    location: { pathname }
  } = props;
  const [changelog, setChangelog] = useState("Loading...");

  useEffect(() => {
    fetch(versions)
      .then((response) => response.text())
      .then((text) => setChangelog(text));
  }, []);

  const sidebar = changelog
    .split("\n")
    .filter((item) => item.startsWith("###"))
    .map((item) => item.split(":"))
    .map((item) => item[0].split("]("))
    .map((item) => item[0].slice(5));

  return (
    <>
      <TitleHeader location={pathname}>Version History</TitleHeader>
      <div className="container py-3 py-md-5">
        <div className="row">
          <div className="d-none d-md-block col-2">
            <div className="sticky-top" style={{ top: "94px" }}>
              <h5>Versions:</h5>
              {sidebar.map((item) => (
                <>
                  <Link
                    scroll={(el) => scrollWithOffset(el, -70)}
                    smooth
                    to={`/whats-new#${item.split(".").join("")}`}
                  >
                    {item}
                  </Link>
                  <br />
                </>
              ))}
            </div>
          </div>
          <div className="col-12 col-md-10">
            <ReactMarkdown
              plugins={[gfm]}
              source={changelog}
              renderers={{
                link: (props) => (
                  <a {...props} id={props.href.slice(1)}>
                    {props.node.children[0].value}
                  </a>
                )
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
