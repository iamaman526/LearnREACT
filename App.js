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

//  REACT STARTS HERE ------------------------DAY 3 ----------------------------//

// React.creatElement => Reactelement(object) => HTMLElement(render)

//JSX - HTML -like  or XML-like syntax
//JSX => Babel transpiles it to  React.createElment => Reactelement(object) => HTMLElement(render)

// React Functional Component

const Title = (
  <h1 className="head" tabIndex="5">
    Namaste React using JSX
  </h1>
);
const Title2 = (
  
  <h1 className="head" tabIndex="5">
    Namaste React using JSX
  </h1>
);

//Component composition
const HeadingComponent = () => (
  <div id="Container">
    <h2>{Title}</h2>

    <h1 className="heading">Namaste React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
