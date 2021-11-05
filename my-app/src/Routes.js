import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Pages/Login/";
import CadastroConsumidor from "./Pages/CadastroConsumidor/";
import CadastroProdutor from "./Pages/CadastroProdutor/";
import Home from "./Pages/Home/";
import NotFound from "./Pages/Not-Found/";
import Header from "./Components/Header";
import Equipe from "./Pages/Equipe/";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route
          path="/cadastroConsumidor"
          exact
          component={CadastroConsumidor}
        />
        <Route path="/equipe" exact component={PageEquipe} />
        <Route path="/sucesso" exact component={PageSucesso} />
        <Route path="/cadastroProdutor" exact component={CadastroProdutor} />
        <Route path="/home" exact component={Home} />
        <Route path="/equipe" exact component={Equipe} />
        <Route path="*" component={NotFound} />
      </Switch>

    </Router>
  );
}

export default Routes;
