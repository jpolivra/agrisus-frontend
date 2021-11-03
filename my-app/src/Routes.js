import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Pages/Login/";
import CadastroConsumidor from "./Pages/CadastroConsumidor/";
import CadastroProdutor from "./Pages/CadastroProdutor/";
import NotFound from "./Pages/Not-Found/";

function Routes() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route
            path="/cadastroConsumidor"
            exact
            component={CadastroConsumidor}
          />
          <Route path="/cadastroProdutor" exact component={CadastroProdutor} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default Routes;
