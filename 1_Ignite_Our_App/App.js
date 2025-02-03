// we need to import our react and react-dom from node_modules

import React from "react"; // this react refers from node_modules react

import ReactDOM from "react-dom/client";

// ReactDOM is used to come from react-dom but now it comes from

// Writing React Code

// Creating an Element in React
// It takes 3 parameters
// Element that we want to create
// Attributes to our tags
// Props (Attributes + Styles)
// Childnren is the third parameter

const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello World from React !"
);

// React.createElement -- returns an Object

console.log(heading); // this will print react element which is object

// to render element first create root using ReactDOM

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading); // this render method will be responsible to convert the heading object into h1 tag and will render on the browser

// Creating Nested HTML Structure

/*

<div id="parent">
  <div id="child">
    <h1></h1>
  </div>
</div>

*/

const parent = React.createElement(
  "div",
  { id: "Parent" },
  React.createElement(
    "div",
    { id: "Child" },
    React.createElement(
      "h1",
      { color: "purple" },
      "I'm H1 Tag from Nested HTML Structure"
    )
  )
);

console.log(parent);

root.render(parent); // Render function overwrites the previous content

//  --------------

// Creating Nested HTML Structure (Sibling)

/*
<div id="parent">
  <div id="child">
    <h1></h1>
    <h1></h1>
  </div>
</div>;
*/

const SiblingParent = React.createElement(
  "div",
  { id: "Parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hi Im H1 Tag From Nested Sibling"),
    React.createElement("h2", {}, "Hi Im H2 Tag From Nested Sibling"),
  ])
);

root.render(SiblingParent);

// Nested Div

/*
<div id="parent">
  <div id="child1">
    <h1></h1>
    <h2></h2>
  </div>

  <div id="child2">
    <h1></h1>
    <h2></h2>
  </div>
</div>;
*/

const ParentSiblings = React.createElement("div", { id: parent }, [
  React.createElement("div", { id: "Child1" }, [
    React.createElement(
      "h1",
      {},
      "Hello I'm H1 Tag From Child 01 Namste React"
    ),
    React.createElement("h2", {}, "Hello I'm H2 Tag From Child 01"),
  ]),
  React.createElement("div", { id: "Child2" }, [
    React.createElement("h1", {}, "Hello I'm H1 Tag From Child 02"),
    React.createElement("h2", {}, "Hello I'm H2 Tag From Child 02"),
  ]),
]);

// This is WHY JSX Exist. To Remove the messiness of this nested code.

root.render(ParentSiblings);
