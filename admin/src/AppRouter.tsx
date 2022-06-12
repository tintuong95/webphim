import React, { ReactElement, ReactNode, useEffect } from "react";

import "./App.css";

import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

import { Redirect, Route, Switch } from "react-router-dom";
import { DashBoard } from "./Layout/DashBoard";
import Film from "./pages/Film";
import Author from "./pages/Author";
import Category from "./pages/Category";
import User from "./pages/User";
import CreateFilm from "./pages/CreateFilm";
import UpdateFilm from "./pages/UpdateFilm";
import { LoginAdmin } from "./pages/Login";
import { useSelector } from "react-redux";
import { RootState } from "./stores/store";

function App(): ReactElement {
  const { login } = useSelector((state: RootState) => state.reducerUser);

  const handleRender = (state: boolean): ReactNode => {
    if (state) {
      return (
        <>
          <Route path={"/login"} component={LoginAdmin} />
    
          <DashBoard exact path={"/home"} Component={Film} />
          <DashBoard exact path={"/film"} Component={Film} />
          <DashBoard exact path={"/author"} Component={Author} />
          <DashBoard exact path={"/category"} Component={Category} />
          <DashBoard exact path={"/user"} Component={User} />
          <DashBoard exact path={"/createfilm"} Component={CreateFilm} />
          <DashBoard path={"/updatefilm/:slug"} Component={UpdateFilm} />

        </>
      );
    } else {
      return (
        <>
          <Route path={"/login"} component={LoginAdmin} />
          <Route
            path={"/*"}
            render={() => <Redirect to={"/login"}></Redirect>}
          />
        </>
      );
    }
  };

  return (
    <>
      <Switch>{handleRender(login)}</Switch>
    </>
  );
}

export default App;
