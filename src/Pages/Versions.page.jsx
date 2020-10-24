import React from "react";
import ReactMarkdown from "react-markdown";
import TitleHeader from "./../Components/TitleHeader";

function VersionsPage() {
  let versions = require("./../Data/CHANGELOG.md");

  return (
    <>
      <TitleHeader>Version History</TitleHeader>
      <div className="container py-5">
        <div className="row">
          <div className="col-12">
            <ReactMarkdown>{versions}</ReactMarkdown>
          </div>
        </div>
      </div>
    </>
  );
}

export default VersionsPage;
