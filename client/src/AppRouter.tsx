import React, { ReactElement } from "react";
import "./App.css";
import { Home } from "./pages/Home";
import { Play } from "./pages/Play";

import { Switch, Route, Redirect } from "react-router-dom";
import { Detail } from "./pages/Detail";
import { useDispatch } from "react-redux";
import { actionGetFilmId } from "./stores/actions/actionFilm";


function App(): ReactElement {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Switch>
        <Route path="/category/:name" component={Detail} />
        <Route exact path="/home" component={Home} />
        <Route
          exact
          path="/play"
          render={(props) => {
            const location: any = props?.location?.state;
           
            dispatch(actionGetFilmId({ id: location.id }));
        
            return <Play />;
          }}
        />
        <Route exact path="/*" render={() => <Redirect to="/home" />} />
      </Switch>
    </div>
  );
}

export default App;
