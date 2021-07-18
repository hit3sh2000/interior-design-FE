import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";

import RestaurantLandingPage from "demos/RestaurantLandingPage.js";
import Login from "./pages/Login";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {


  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <RestaurantLandingPage />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}
