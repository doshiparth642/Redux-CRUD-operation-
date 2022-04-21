import React from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import history from "./config/history";
//import UserComponent from "./components/UserComponent";
import Login from "./components/Form/Login";
import Header from "./helpers/Header";
//import Function from "./components/Function";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = true;
  return (
    <Route
      {...rest}
      render={(props) =>
        token ? (
          <div>
          <Header />
        <Component {...props} />
         </div>
        ) : <Redirect to="/login" />
      }
    />
  );
};

export const PublicRoute = ({ component: Component, ...rest }) => {
  const token = false;
  return (
    <Route
      {...rest}
      render={(props) =>
        !token ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

/*export default ({ childProps }) => {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <PublicRoute path="/login" component={Login} exact />
        </Switch>
      </Router>
    </div>
  );
};*/
