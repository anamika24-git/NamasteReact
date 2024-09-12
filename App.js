// const heading = React.createElement("h1", {}, "Hello from React!");
//     console.log(heading)
//     const root = ReactDOM.createRoot(document.getElementById('root'));
//     root.render(heading);

const parent = React.createElement(
    "div",
    {id : "parent"},
    React.createElement(
        "div",
        {id: "child1"},
        [React.createElement("h1", {}, "Hello h1 tagg"),
    React.createElement("h2", {}, "Hello form h2")]
    )

);
console.log(parent)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);