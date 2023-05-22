// creating one element through reactdom

// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "head" },
//   "Hello world from react"
// );

// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));

// create nested element using react dom.

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am H1 tag"),
    React.createElement("h2", {}, "I am H2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am H1 tag"),
    React.createElement("h2", {}, "I am H2 tag"),
  ]),
]);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
