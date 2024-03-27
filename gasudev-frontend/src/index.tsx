import React from "react";

import ReactDOM from "react-dom/client";
import { BrowserRouter, HashRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/scss/main.scss";
import "./assets/scss/fonts.scss";

import store from "./store/strore";
import { Provider } from "react-redux";

import App from "./components/App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
// localStorage.setItem("currentUser",JSON.stringify({
//   username: "Login",
//   name: "Name",
//   surname: "Surname",
//   password: "0",
//   id: null,
// }))


root.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>
);
