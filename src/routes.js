import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import SignIn from "./pages/signIn";
import Main from "./pages/main";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route path="/main" component={Main} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
