import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Navbar } from "./logined_navbar";
import Menu from "./menu/Menu";
import { OpinionList, OpinionDetail } from "./opinion";
const Logined = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="content-container">
          <div className="wrapper">
            <Menu />
            <Route
              exact
              path="/opinion"
              render={(props) => (
                <React.Fragment>
                  <OpinionList />
                </React.Fragment>
              )}
            />
            <Route
              exact
              path="/opinion/detail"
              render={(props) => (
                <React.Fragment>
                  <OpinionDetail />
                </React.Fragment>
              )}
            />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Logined;
