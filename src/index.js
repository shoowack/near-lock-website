import React from "react";
import { render } from "react-dom";
import smoothScrollPolyfill from "smoothscroll-polyfill";
import App from "./App";

smoothScrollPolyfill.polyfill();

render(<App />, document.getElementById("root"));
