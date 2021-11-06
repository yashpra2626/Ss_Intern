import React from "react";
import "./App.css";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import MainNavigation from "./Shared/Navigation/MainNavigation";
import HomePage from "./pages/HomePage";
import AddPage from "./pages/AddPage"

function App() {
  
  let routes;
  
    routes = (
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/:id/page" exact>
        <AddPage />
      </Route>
        <Redirect to="/" />
      </Switch>
    );
 
  return (
   
      <BrowserRouter>
        <MainNavigation />
        <main>{routes}</main>
      </BrowserRouter>
 
  );
}

export default App;
