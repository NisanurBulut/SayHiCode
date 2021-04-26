import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { sayHiRepoTheme } from "./sayhirepo-theme";
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={sayHiRepoTheme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
