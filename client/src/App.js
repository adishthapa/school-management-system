import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./components/Profile";
import { useAuth0 } from "./react-auth0-spa";
import history from "./utils/history";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <header>
            <NavBar />
          </header>
          <Switch>
            <Route path="/" exact />
            <PrivateRoute path="/profile" component={Profile} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
