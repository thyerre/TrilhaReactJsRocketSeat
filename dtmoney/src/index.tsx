import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { StartServerAPI } from './StartServerAPI'

const server = StartServerAPI();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
