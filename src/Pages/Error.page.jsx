import React from "react";
import TitleHeader from "./../Components/TitleHeader";

function ErrorPage() {
  return (
    <>
      <TitleHeader>404</TitleHeader>
      <div className="container py-3 py-md-5">
        <div className="row">
          <div className="col text-center py-5">Something went wrong</div>
        </div>
      </div>
    </>
  );
}

export default ErrorPage;
