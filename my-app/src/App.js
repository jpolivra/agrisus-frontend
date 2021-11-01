import React from "react";
import "./App.css";
import Nav from "./Nav";
import Cadastro from "./Cadastro";
import Shop from "./Shop";
import ButtonYellow from "./components/ButtonYellow";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./assets/logo_agrisus.svg";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cadastro" component={Cadastro} />
          <Route path="/shop" component={Shop} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div class="home-nologin">
    <div class="logo-div">
      <img src={logo} alt="" />
    </div>
    <div className="loginInfo">
      <label for="User">USUÁRIO</label>
      <input
        type="text"
        id="User"
        name="Name"
        placeholder="Digite sua ID, e-mail ou cpf"
      />
      <label for="User">SENHA</label>
      <input
        type="password"
        id="User"
        name="Name"
        placeholder="Digite sua senha"
      />
    </div>
    <div className="switchLogin">
      <ButtonYellow name="Entrar" />
      <ButtonYellow name="Cadastro" />
    </div>
    <div className="forgetPass">
      <a href="#">esqueceu sua senha?</a>
    </div>
  </div>
);

export default App;
