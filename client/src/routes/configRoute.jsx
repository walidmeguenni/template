import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  Home,
  Dashborad,
  Materail,
  Orders,
  Products,
  Settings,
  Users,
  Auth,
  NotFound,
  Logout
} from "../pages";

import PraviteRoute from "./praviteRoute";
import PublicRoute from "./publicRoute";
const configRoute = () => {
  return (
    <>
      <Switch>
        <PublicRoute exact path="/" component={Home} />
        <PublicRoute exact path="/auth" component={Auth} />
        <PraviteRoute exact path="/Dashboard" component={Dashborad}/>
        <PraviteRoute exact path="/Material" component={Materail} />
        <PraviteRoute exact path="/Orders" component={Orders} /> 
        <PraviteRoute exact path="/Prodcuts" component={Products} />
        <PraviteRoute exact path="/Settings" component={Settings} />
        <PraviteRoute exact path="/Logout" component={Logout} />
        <PraviteRoute exact path="/Users" component={Users} />
        <Route component={NotFound} />
        
      </Switch>
    </>
  );
};

export default configRoute;
