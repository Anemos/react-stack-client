import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import NotFound from "./containers/NotFound";

/*
This component uses this Switch component from React-Router that renders 
the first matching route that is defined within it. For now we only have a single route, 
it looks for / and renders the Home component when matched. 
We are also using the exact prop to ensure that it matches the / route exactly. 
This is because the path / will also match any route that starts with a /.
*/
export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
      {/* Finally, catch all unmatched routes */}
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}