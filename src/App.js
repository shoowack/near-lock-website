import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./style.scss";
// import "bootstrap/dist/js/bootstrap.js"; // uncomment when needed later
// import "jquery"; // uncomment when needed later
// import "popper.js"; // uncomment when needed later

import * as pages from "./Pages";
import Navigation from "./Components/Navigation/Navigation";
import Footer from "./Components/Footer/Footer";

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
        <Route path="/whats-new" component={pages.VersionsPage} />
        <Route
          path="/press"
          render={(props) => (
            <pages.PressPage {...props} {...(settings && { settings })} />
          )}
        />
        <Route path="/terms" component={pages.TermsOfUsePage} />
        <Route path="/impressum" component={pages.ImpressumPage} />
        <Route path="*" component={pages.ErrorPage} />
      </Switch>
      <Footer
        scrollWithOffset={scrollWithOffset}
        {...(settings && { settings })}
      />
    </BrowserRouter>
  );
}

export default App;
