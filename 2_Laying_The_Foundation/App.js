// we need to import our react and react-dom from node_modules

import React from "react"; // this react refers from node_modules react

import ReactDOM from "react-dom/client";

// ReactDOM is used to come from react-dom but now it comes from

// Writing React Code

/*

// Create React Element using React Core

const heading = React.createElement(
  "h1",
  {  id: "heading" },
  "Namaste React"
);



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

*/

// JSX

// Creating React Element using JSX
const jsxheading = (
  <h1 id="heading" className="root">
    Namaste React Using JSX
  </h1>
);

console.log(jsxheading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxheading);

// React Components

// 02 Types of Components