import * as React from "react";
import { render } from "react-dom";
import * as smoothScrollPolyfill from "smoothscroll-polyfill";
import { StateStore } from "./context.jsx";
import App from "./App";

smoothScrollPolyfill.polyfill();

render(
  <StateStore>
    <App />
  </StateStore>,
  document.getElementById("root")
);
