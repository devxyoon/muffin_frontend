import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Navbar } from "./logined_navbar";
import Menu from "./menu/Menu";
import { OpinionList, OpinionDetail, OpinionRegister } from "./opinion";
import { StockPage, StockList } from "./stocks";
import { NewsList, NewsDetail } from "./news";
import { Home } from "./home";
import { Search } from "./search";
import { MyPage } from "./my_page";
import { PortfolioPage } from "./portfolio";

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
              path="/home"
              render={(props) => (
                <React.Fragment>
                  <Home />
                </React.Fragment>
              )}
            />
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
            <Route
              exact
              path="/opinion/write"
              render={(props) => (
                <React.Fragment>
                  <OpinionRegister />
                </React.Fragment>
              )}
            />
            <Route
              exact
              path="/stock/detail"
              render={(props) => (
                <React.Fragment>
                  <StockPage />
                </React.Fragment>
              )}
            />
            <Route
              exact
              path="/news"
              render={(props) => (
                <React.Fragment>
                  <NewsList />
                </React.Fragment>
              )}
            />
            <Route
              exact
              path="/news/detail"
              render={(props) => (
                <React.Fragment>
                  <NewsDetail />
                </React.Fragment>
              )}
            />
            <Route
              exact
              path="/search"
              render={(props) => (
                <React.Fragment>
                  <Search />
                </React.Fragment>
              )}
            />
            <Route
              exact
              path="/mypage"
              render={(props) => (
                <React.Fragment>
                  <MyPage />
                </React.Fragment>
              )}
            />
            <Route
              exact
              path="/stocklist"
              render={(props) => (
                <React.Fragment>
                  <StockList />
                </React.Fragment>
              )}
            />
            <Route
              exact
              path="/portfolio"
              render={(props) => (
                <React.Fragment>
                  <PortfolioPage />
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
