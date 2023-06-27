import React from "react";
import ReactDOM from "react-dom/client";

// --------------------------- day 1 and 2 ---------------------------------//

// creating one element through reactdom

// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "head" },
//   "Hello world from react"
// );

// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));

// create nested element using react dom.

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "Namaste react"),
//     React.createElement("h2", {}, "I am H2 tag"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "I am H1 tag"),
//     React.createElement("h2", {}, "I am H2 tag"),
//   ]),
// ]);

// console.log(parent);
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

// ----------------------day 1 and 2 ends here---------------------------------//

// REACT STARTS HERE ------------------------DAY 3 ----------------------------//

// React.creatElement => Reactelement(object) => HTMLElement(render)

const heading = (
  <h1 className="head" tabIndex="5">
    Namaste React using JSX
  </h1>
);
//JSX - HTML -like  or XML-like syntax
//JSX =>   React.createelment => Reactelement(object) => HTMLElement(render)
// it is a reactElement.
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
