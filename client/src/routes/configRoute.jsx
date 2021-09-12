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
  Logout,
  Welcome,
  ForgetPassWord,
  ChangePassword
} from "../pages";

import PraviteRoute from "./praviteRoute";
import PublicRoute from "./publicRoute";
const configRoute = () => {
  return (
    <>
      <Switch>
        <Route exact path="/check" component={ForgetPassWord} />
        <PublicRoute exact path="/" component={Home} />
        <PublicRoute exact path="/auth" component={Auth} />
        <PublicRoute exact path="/users/confirm/:token" component={Welcome} />
        <PublicRoute exact path="/users/change/:token" component={ChangePassword} />
        <PraviteRoute exact path="/Dashboard" component={Dashborad} />
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
