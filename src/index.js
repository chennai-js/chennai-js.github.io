import React from "react";
import ReactDOM from "react-dom";

import App from "./Components/App";
import configureStore from "./configureStore";
import "./favicon.ico";
import "./index.css";

const store = configureStore();
const root = document.getElementById("root");

ReactDOM.render(<App store={store} />, root);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then(registration => {
        console.log("SW registered: ", registration);
      })
      .catch(registrationError => {
        console.log("SW registration failed: ", registrationError);
      });
  });
}
