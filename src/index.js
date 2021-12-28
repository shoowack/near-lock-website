import React from "react";
import { render } from "react-dom";
import smoothScrollPolyfill from "smoothscroll-polyfill";
import { StateStore } from "./context";
import App from "./App";

smoothScrollPolyfill.polyfill();

render(
  <StateStore>
    <App />
  </StateStore>,
  document.getElementById("root")
);
