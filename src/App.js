import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import "jquery";
import "bootstrap/dist/css/bootstrap.css";
import "./style.scss";

import {
  HomePage,
  FeaturesPage,
  FaqPage,
  VersionsPage,
  PressPage,
  TermsOfUsePage,
  ImpressumPage
} from "./Pages";
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";

function App() {
  let settings = require("./Data/settings.json");

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -55;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
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
            <HomePage {...props} {...(settings && { settings })} />
          )}
        />
        <Route
          path="/features"
          render={(props) => (
            <FeaturesPage
              scrollWithOffset={scrollWithOffset}
              {...props}
              {...(settings && { settings })}
            />
          )}
        />
        <Route path="/faq" component={FaqPage} />
        <Route path="/whats-new" component={VersionsPage} />
        <Route
          path="/press"
          render={(props) => (
            <PressPage {...props} {...(settings && { settings })} />
          )}
        />
        <Route path="/terms" component={TermsOfUsePage} />
        <Route path="/impressum" component={ImpressumPage} />
      </Switch>
      <Footer
        scrollWithOffset={scrollWithOffset}
        {...(settings && { settings })}
      />
    </BrowserRouter>
  );
}

export default App;
