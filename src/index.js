import ReactDOM from "react-dom/client";
import React from "react";

import App from "./App";

//import reportWebVitals from "./reportWebVitals";

import "./index.css";

function init(config) {
  console.log("<<----config------------------------>>>>>", config);

  //const widgetDivs = document.querySelectorAll(".react-widget-poc");
  const widgetDivs = document.querySelectorAll(config.selector);

  widgetDivs.forEach((div) => {
    ReactDOM.createRoot(div).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  });
}
if (process.env.NODE_ENV === "development") {
  init({ selector: ".react-widget-poc" });
} else {
  window.widget = {
    init: init,
  };
}

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

// import { StrictMode } from "react";
// import ReactDOM from "react-dom";

// import App from "./App";

// const rootElement = document.getElementById("crypto-root");
// ReactDOM.render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
//   rootElement
// );
