import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Helmet } from "react-helmet";
import "bootstrap/dist/css/bootstrap.css";
import "./style.scss";
// import "bootstrap/dist/js/bootstrap.js"; // uncomment when needed later
// import "jquery"; // uncomment when needed later
// import "popper.js"; // uncomment when needed later

import * as pages from "./Pages";
import Navigation from "./Components/Navigation/Navigation";
import Footer from "./Components/Footer/Footer";

export default function App() {
  let settings = require("./Data/settings.json");

  const scrollWithOffset = (el, offset = -55) => {
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.pageYOffset + offset,
      behavior: "smooth"
    });
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Near Lock - Lock and unlock your Mac with your iPhone</title>
        <link
          rel="canonical"
          href={`${window.location.protocol}//${window.location.hostname}`}
        />
      </Helmet>
      {settings.underConstruction ? (
        <pages.UnderConstructionPage />
      ) : (
        <BrowserRouter>
          <Navigation
            scrollWithOffset={scrollWithOffset}
            {...(settings && { settings })}
          />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <pages.HomePage {...props} {...(settings && { settings })} />
              )}
            />
            <Route
              path="/features"
              render={(props) => (
                <pages.FeaturesPage
                  scrollWithOffset={scrollWithOffset}
                  {...props}
                  {...(settings && { settings })}
                />
              )}
            />
            <Route path="/faq" component={pages.FaqPage} />
            <Route
              path="/whats-new"
              render={(props) => (
                <pages.VersionsPage
                  {...props}
                  scrollWithOffset={scrollWithOffset}
                />
              )}
            />
            <Route
              path="/press"
              render={(props) => (
                <pages.PressPage {...props} {...(settings && { settings })} />
              )}
            />
            <Route path="/terms" component={pages.TermsOfUsePage} />
            <Route path="/impressum" component={pages.ImpressumPage} />
            <Route path="/problems" component={pages.ProblemsPage} />
            <Route path="*" component={pages.ErrorPage} />
          </Switch>
          <Footer
            scrollWithOffset={scrollWithOffset}
            {...(settings && { settings })}
          />
        </BrowserRouter>
      )}
    </>
  );
}
