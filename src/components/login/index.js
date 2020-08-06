import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Navbar } from "./logined_navbar";
import Menu from "./menu/Menu";
const Logined = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="content-container">
          <div className="wrapper">
            <Menu />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Logined;
