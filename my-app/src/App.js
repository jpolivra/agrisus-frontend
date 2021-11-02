import React from "react";
import "./App.css";
import Nav from "./Nav";
import Escolha from "./Escolha";
import Cadastro from "./Cadastro";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./assets/logo_agrisus.svg";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cadastro" component={Cadastro} />
          <Route path="/escolha" component={Escolha} />
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  function takeData() {
    const userLogin = document.querySelector("#userLogin").value;
    const userPass = document.querySelector("#userPass").value;
    console.log(userLogin, userPass);
  }
  return (
    <div class="home-nologin">
      <div class="logo-div">
        <img src={logo} alt="" />
      </div>
      <div className="loginInfo">
        <label for="User">USUÁRIO</label>
        <input
          type="text"
          id="userLogin"
          name="Name"
          placeholder="Digite sua ID, e-mail ou cpf"
        />
        <label for="User">SENHA</label>
        <input
          type="password"
          id="userPass"
          name="Name"
          placeholder="Digite sua senha"
        />
      </div>
      <div className="switchLogin">
        <button onClick={takeData} className="button-yellow">
          Entrar
        </button>
        <Link to="/escolha">
          <button className="button-yellow">Cadastro</button>
        </Link>
      </div>
      <div className="forgetPass">
        <a href="#">esqueceu sua senha?</a>
      </div>
    </div>
  );
}

export default App;
