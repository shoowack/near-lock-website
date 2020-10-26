import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
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

  return (
    <>
      <TitleHeader>Version History</TitleHeader>
      <div className="container py-3 py-md-5">
        <div className="row">
          <div className="col-12">
            <ReactMarkdown plugins={[gfm]} source={changelog} />
          </div>
        </div>
      </div>
    </>
  );
}

export default VersionsPage;
