import {render} from "react-dom"
import App from "./App.jsx"
import "./styles.css";
window.tap = (...args) => {
  console.log(...args);
  return args;
};
render(<App/>, document.getElementById("root"));