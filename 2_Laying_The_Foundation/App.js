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

// Functional Component

/*
const Title = () => {
  return (
    <h1 className="head" tabIndex="5">
      Namaste React Usign JSX (From Title Functional Component)
    </h1>
  );
};

*/

const Title = function () {
  return (
    <h1 className="head" tabIndex="5">
      Namaste React Usign JSX (From Title Functional Component)
    </h1>
  );
};

const number = 10000;

const HeadingComponent = () => {
  return (
    <div id="container">
      <Title />
      {number /* Writing JS Expression */}
      <h3>{number} JS Expression</h3>
      <h1>Namaste react Functional Component</h1>
    </div>
  );
};

// root.render(<HeadingComponent />); // rendering functioanl component

const HeadingComponent2 = () => <h1>Namaste react Functional Component</h1>;

const fn = () => true; // this means our function is returning true

// -----------------------------------------

const title2 = (
  <h1 className="head" tabIndex="5">
    Nmaste React Using JSX Title2
  </h1>
);

const element = <span>React Element</span>;

const HeadingComponent3 = () => {
  return (
    <div id="container">
      {title2}
      {element}
      <h1 className="heading">Writing React Element Inside a JSX</h1>
    </div>
  );
};

root.render(<HeadingComponent3 />); // rendering functioanl component
