import { useState, useEffect } from "react";
import "./cadastro.css";
import logo from "../../assets/logo_agrisus_cadastro.svg";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";
import apiUserFisico from "../../Services/serviceUserFisico";


function CadastroConsumidor() {

  const [newUser, setNewUser] = useState({ nome: "", cpf: "", endereco: "", telefone: "", senha: "" });


  const postNewUser = () =>   {
    apiUserFisico
      .post("/usuarioFisico", newUser)
      .then((response) => { console.log("deu certo")})
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }


  // useEffect(() => {
  //   console.log(newUser)
  // }, [newUser]);

  return (
    <div className="container">
      <div className="header">
        <Link to="/">
          <img src={logo} className="logo" />
        </Link>
      </div>

      <div className="info">
        <h6>Para realizar o cadastro, precisamos de algumas informações.</h6>
      </div>

      <div className="form">
        <div className="linha">
          <div className="classInput">
            <label> Nome </label>
            <input placeholder="Digite seu nome completo" value={newUser.nome} onChange={(e) => setNewUser((prevState => ({ ...prevState, nome: e.target.value })))}></input>
          </div>

          <div className="classInput">
            <label> Telefone </label>
            <input placeholder="Digite seu telefone" value={newUser.telefone} onChange={(e) => setNewUser((prevState => ({ ...prevState, telefone: e.target.value })))}></input>
          </div>
        </div>

        <div className="linha">
          <div className="classInput">
            <label> CPF/CNPJ </label>
            <input placeholder="Digite seu CPF ou CNPJ" type="text" value={newUser.cpf} onChange={(e) => setNewUser((prevState => ({ ...prevState, cpf: e.target.value })))} ></input>
          </div>

          <div className="classInput">
            <label> Senha </label>
            <input type="password" placeholder="Digite sua senha" value={newUser.senha} onChange={(e) => setNewUser((prevState => ({ ...prevState, senha: e.target.value })))} ></input>
          </div>
        </div>

        <div className="linha">
          <div className="classInput" style={{ width: "100%" }}>
            <label> Endereço </label>
            <input placeholder="Rua, 000, Bairro Santa Casa, Belo Horizonte, Minas Gerais" value={newUser.endereco} onChange={(e) => setNewUser((prevState => ({ ...prevState, endereco: e.target.value })))} ></input>
          </div>
        </div>
      </div>

      <div className="termos">
        <Checkbox />
        <h6>Aceito os termos e condições</h6>
      </div>

      <div className="botao">
        <button className="button-yellow" onClick={postNewUser}>Cadastrar</button>
      </div>
    </div>
  );
}

export default CadastroConsumidor;
