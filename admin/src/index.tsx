import React from "react";
import ReactDOM from "react-dom/client";

import AppRouter from "./AppRouter";

import { BrowserRouter, Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import { Provider, useDispatch, useSelector,TypedUseSelectorHook } from "react-redux";
import { AppDispatch, RootState, store } from "./stores/store";

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

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
