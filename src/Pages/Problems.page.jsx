import React from "react";
import TitleHeader from "./../Components/TitleHeader";
import NewsletterSection from "./../Components/Newsletter/NewsletterSection";

const ProblemsPage = () => (
    <>
      <TitleHeader>macOS Catalina issues</TitleHeader>
      <div className="container py-3 py-md-5">
        <div className="row">
          <div className="col">
            <p>
              Hey Near Lock users Sorry for the latest problems with macOS
              Catalina. It is not only Near Lock, other apps using Bluetooth Low
              Energy are also affected. We are still working on it but we are
              still having major issues connecting in the background.
              <br />
              <br />A new version will be out as soon as we manage to get a
              stable solution. We can not know for sure but a new version should
              be available until the end of October.
            </p>
            <p className="text-right mb-5 small">- Filip</p>

            <p className="text-center pt-5 mb-0">
              For more information about Near Lock please contact me on{" "}
              <a href="mailto:support@nearlock.me">support@nearlock.me</a>
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <hr />
          </div>
        </div>
      </div>
      <NewsletterSection />
    </>
  );

export default ProblemsPage;