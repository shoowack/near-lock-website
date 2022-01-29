import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import TitleHeader from "../Components/TitleHeader";

const ErrorPage = () => (
  <>
    <TitleHeader>404</TitleHeader>
    <div className="container py-3 py-md-5">
      <div className="row">
        <div className="col-12 text-center py-5">
          <p className="mb-2">Something went wrong, we have nothing on:</p>
          <mark className="font-weight-bold d-inline">
            {window.location.href}
          </mark>
          <p className="mt-5">
            You may find what you were looking for on our{" "}
            <Link smooth to="/#">
              Homepage
            </Link>
          </p>
        </div>
      </div>
    </div>
  </>
);

export default ErrorPage;
