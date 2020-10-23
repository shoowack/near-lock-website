import React from "react";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { HomePage, FeaturesPage, FaqPage, VersionsPage } from "./Pages";
import Navigation from "./Components/navigation";

function App() {
  return (
    <BrowserRouter>
      <div style={{ paddingTop: "60px" }}>
        <Navigation />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/features" component={FeaturesPage} />
          <Route path="/faq" component={FaqPage} />
          <Route path="/whats-new" component={VersionsPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
