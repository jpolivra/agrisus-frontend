import React, { useState } from "react";
import "./login.css";
import logo from "../../assets/logo_agrisus.svg";
import Escolha from "../../Components/Escolha";

function Login() {
  const [isCadastro, setIsCadastro] = useState(false);

  function takeData() {
    const userLogin = document.querySelector("#userLogin").value;
    const userPass = document.querySelector("#userPass").value;
    console.log(userLogin, userPass);
  }

  return (
    <div>
      {!isCadastro ? (
        <div className="home-nologin">
          <div className="logo-div">
            <img src={logo} alt="" />
          </div>
          <div className="loginInfo">
            <label>USUÁRIO</label>
            <input
              type="text"
              id="userLogin"
              name="Name"
              placeholder="Digite sua ID, e-mail ou cpf"
            />
            <label>SENHA</label>
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
            <button
              className="button-yellow"
              onClick={() => setIsCadastro(true)}
            >
              Cadastro
            </button>
          </div>
          <div className="forgetPass">
            <a href="#">esqueceu sua senha?</a>
          </div>
        </div>
      ) : (
        <div>
          <Escolha />
        </div>
      )}
    </div>
  );
}

export default Login;
