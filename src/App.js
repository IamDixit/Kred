import React, { Component } from "react";
import Profile from "./profile";
import EditProfile from "./edit-profile";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./index.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Profile />
          </Route>
          <Route exact path="/edit-profile">
            <EditProfile />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
