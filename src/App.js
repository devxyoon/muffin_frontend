import React from "react";
import { Route } from "react-router-dom";
import Logined from "./components/login";
import NonLogin from "./components/non_login";

const App = () => {
  return (
    <div>
      <Route path="/" component={NonLogin} exact={true} />
      <Route path="/home" component={Logined} />
    </div>
  );
};
export default App;
