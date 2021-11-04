/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import "./style.css";
import logo from "../../assets/logo_agrisus.svg";
import { Link, useHistory  } from "react-router-dom";
import Escolha from "../../Components/Escolha";
import apiLogin from "../../Services/serviceLogin";


function Login() {
  const [isCadastro, setIsCadastro] = useState(false);

  const [credenciais, setCredenciais] = useState({login: "", senha: ""});

  let history = useHistory();

  const login = () =>{
    if(credenciais.login.length == 11){
      apiLogin
      .post("/pessoaFisica", credenciais)
      .then((response) => { 
        history.push("/loginRealizadoPessoaFisica")
      })
      .catch((err) => {
        console.error("Credenciais incorretas" + err);
      });
    }else{
      apiLogin
      .post("/agricultor", credenciais)
      .then((response) => { 
        history.push("/loginRealizadoAgricultor")
      })
      .catch((err) => {
        console.error("Credenciais incorretas" + err);
      });
    }
  }
  

  // useEffect(() => {
  //   console.log(credenciais)
  // }, [credenciais]);

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
              placeholder="Digite sua ID, e-mail ou cpf"
              value={credenciais.login} onChange={(e) => setCredenciais((prevState => ({ ...prevState, login: e.target.value })))}
            />
            <label>SENHA</label>
            <input
              type="password"
              id="userPass"
              placeholder="Digite sua senha"
              value={credenciais.senha} onChange={(e) => setCredenciais((prevState => ({ ...prevState, senha: e.target.value })))}

            />
          </div>
          <div className="switchLogin">
              <button className="button-yellow" onClick={login}>
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
