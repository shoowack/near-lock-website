import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import "jquery";
import "bootstrap/dist/css/bootstrap.css";

import {
  HomePage,
  FeaturesPage,
  FaqPage,
  VersionsPage,
  PressPage,
  TermsOfUsePage
} from "./Pages";
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import "./style.scss";

function App() {
  let settings = require("./Data/settings.json");

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -55;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <BrowserRouter>
      <Navigation scrollWithOffset={scrollWithOffset} />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <HomePage {...props} {...(settings && { settings })} />
          )}
        />
        <Route path="/features" component={FeaturesPage} />
        <Route path="/faq" component={FaqPage} />
        <Route path="/whats-new" component={VersionsPage} />
        <Route
          path="/press"
          render={(props) => (
            <PressPage {...props} {...(settings && { settings })} />
          )}
        />
        <Route path="/terms" component={TermsOfUsePage} />
      </Switch>
      <Footer
        scrollWithOffset={scrollWithOffset}
        {...(settings && { settings })}
      />
    </BrowserRouter>
  );
}

export default App;
