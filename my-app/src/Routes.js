import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Pages/Login/Login";
import CadastroConsumidor from "./Pages/CadastroConsumidor/CadastroConsumidor";
import CadastroProdutor from "./Pages/CadastroProdutor/CadastroProdutor";
import NotFound from "./Pages/Not-Found/NotFound";

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
