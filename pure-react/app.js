const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { key: 1 }, "Pure React is rendered"),
    React.createElement("p", { key: 2 }, "This is a paragraph"),
    React.createElement("p", { key: 3 }, "This is another paragraph"),
  ]);
};

//ReactDOM.render(React.createElement(App), document.getElementById("root"));

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
