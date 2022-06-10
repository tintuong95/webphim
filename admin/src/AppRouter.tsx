import React, { ReactElement, useEffect } from "react";

import "./App.css";

import "antd/dist/antd.css"; // or 'antd/dist/antd.less'


import {  Switch } from "react-router-dom";
import { DashBoard } from "./Layout/DashBoard";
import Film from "./pages/Film";
import Author from "./pages/Author";
import Category from "./pages/Category";
import User from "./pages/User";
import CreateFilm from "./pages/CreateFilm";
import UpdateFilm from "./pages/UpdateFilm";


function App(): ReactElement {


  return (
    <>
    
      <Switch>
        <DashBoard exact path={"/home"} Component={Film} />
        <DashBoard exact path={"/film"} Component={Film} />
        <DashBoard exact path={"/author"} Component={Author} />
        <DashBoard exact path={"/category"} Component={Category} />
        <DashBoard exact path={"/user"} Component={User} />
        <DashBoard exact path={"/createfilm"} Component={CreateFilm} />
        <DashBoard  path={"/updatefilm/:slug"} Component={UpdateFilm} />
        <DashBoard  path={"/*"} Component={Film} />
      </Switch>
    </>
  );
}

export default App;
