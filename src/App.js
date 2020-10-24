import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import {
  HomePage,
  FeaturesPage,
  FaqPage,
  VersionsPage,
  PressPage
} from "./Pages";
import Navigation from "./Components/Navigation";

function App() {
  let settings = require("./Data/settings.json");

  return (
    <BrowserRouter>
      <div style={{ paddingTop: "56px" }}>
        <Navigation />
        <Switch>
          {/* <Route render={() => <Redirect to="/" />} /> */}
          <Route
            exact
            path="/"
            render={(props) => (
              <HomePage {...props} settings={settings ? settings : null} />
            )}
          />
          <Route path="/features" component={FeaturesPage} />
          <Route path="/faq" component={FaqPage} />
          <Route path="/whats-new" component={VersionsPage} />
          <Route
            path="/press"
            render={(props) => (
              <PressPage {...props} settings={settings ? settings : null} />
            )}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
