import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { HashLink as Link } from "react-router-hash-link";
import gfm from "remark-gfm";
import TitleHeader from "./../Components/TitleHeader";
import versions from "./../../src/Data/CHANGELOG.md";

function VersionsPage() {
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
      <TitleHeader>Version History</TitleHeader>
      <div className="container py-3 py-md-5">
        <div className="row">
          <div className="col-2">
            <h5>Versions:</h5>
            {sidebar.map((item) => (
              <>
                <Link smooth to={item}>
                  {item}
                </Link>
                <br />
              </>
            ))}
          </div>
          <div className="col-10">
            <ReactMarkdown plugins={[gfm]} source={changelog} />
          </div>
        </div>
      </div>
    </>
  );
}

export default VersionsPage;
