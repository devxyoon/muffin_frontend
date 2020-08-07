import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { SignIn, SignUp } from "./auth/Auth";
import { Navbar } from "./non_login_navbar";
import { Welcome } from "./welcome";
import { FirstInvestProfile } from "./first_invest_profile";

const NonLogin = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="content-container">
          <div className="wrapper">
            <Route
              exact
              path="/auth/signIn"
              render={(props) => (
                <React.Fragment>
                  <SignIn />
                </React.Fragment>
              )}
            />
            <Route
              exact
              path="/auth/signUp"
              render={(props) => (
                <React.Fragment>
                  <SignUp />
                </React.Fragment>
              )}
            />
            <Route
              exact
              path="/auth/investProfile"
              render={(props) => (
                <React.Fragment>
                  <FirstInvestProfile />
                </React.Fragment>
              )}
            />
            <Route
              exact
              path="/"
              render={(props) => (
                <React.Fragment>
                  <Welcome />
                </React.Fragment>
              )}
            />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default NonLogin;
