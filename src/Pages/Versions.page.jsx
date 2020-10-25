import React from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import TitleHeader from "./../Components/TitleHeader";

function VersionsPage() {
  const versions = require("/CHANGELOG.md");

  return (
    <>
      <TitleHeader>Version History</TitleHeader>
      <div className="container py-3 py-md-5">
        <div className="row">
          <div className="col-12">
            <ReactMarkdown plugins={[gfm]}>{versions}</ReactMarkdown>
          </div>
        </div>
      </div>
    </>
  );
}

export default VersionsPage;
