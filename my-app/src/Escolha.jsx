import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import logo from "./assets/logo_agrisus_cadastro.svg";

function Escolha() {
  return (
    <div class="home-nologin">
      <div class="logo-div">
        <img src={logo} alt="" />
      </div>
      <div className="escolhaParagrafo">
        <p>Primeiramente me conta mais sobre você</p>
        <p>Você é:</p>
      </div>
      <div
        className="switchLogin"
        style={{
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Link to="/cadastroConsumidor">
          <button className="button-yellow">Consumidor(a)</button>
        </Link>
        <Link to="/cadastroProdutor">
          <button className="button-yellow">Produtor(a)</button>
        </Link>
      </div>
    </div>
  );
}

export default Escolha;
