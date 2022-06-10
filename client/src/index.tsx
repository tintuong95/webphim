import React from "react";
import ReactDOM from "react-dom/client";

import AppRouter from "./AppRouter";
import { Router } from "react-router-dom";

import { createBrowserHistory } from "history";

import { Provider } from "react-redux";
import { store } from "./stores/store";


export let history = createBrowserHistory();




const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);



root.render(
  <Provider store={store}>
    <Router history={history}>
      <AppRouter />
    </Router>
  </Provider>
);
