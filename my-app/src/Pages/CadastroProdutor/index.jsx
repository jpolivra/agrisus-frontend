import React from "react";
import "./cadastro.css";
import logo from "../../assets/logo_agrisus_cadastro.svg";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";
import{ useState, useEffect } from "react";
import apiAgricultor from "../../Services/serviceAgricultor";

function CadastroProdutor() {

  const [newAgricultor, setAgricultor] = useState({ nome: "", cnpj: "", endereco: "", telefone: "", senha: "", motivacao: "", imagem: "" });

  const postNewAgricultor = () =>   {
    apiAgricultor
      .post("/agricultor", newAgricultor)
      .then((response) => { console.log("deu certo")})
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }

  // useEffect(() => {
  //   console.log(newAgricultor)
  // }, [newAgricultor]);


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
            <label> Nome da fazenda</label>
            <input placeholder="Digite o nome da sua fazenda" value={newAgricultor.nome} onChange={(e) => setAgricultor((prevState => ({ ...prevState, nome: e.target.value })))}></input>
          </div>

          <div className="classInput">
            <label> Telefone </label>
            <input placeholder="Digite seu telefone" value={newAgricultor.telefone} onChange={(e) => setAgricultor((prevState => ({ ...prevState, telefone: e.target.value })))}></input>
          </div>
        </div>

        <div className="linha">
          <div className="classInput">
            <label> CNPJ </label>
            <input placeholder="Digite seu CNPJ" type="text" value={newAgricultor.cnpj} onChange={(e) => setAgricultor((prevState => ({ ...prevState, cnpj: e.target.value })))}></input>
          </div>

          <div className="classInput">
            <label> Senha </label>
            <input type="password" placeholder="Digite sua senha" value={newAgricultor.senha} onChange={(e) => setAgricultor((prevState => ({ ...prevState, senha: e.target.value })))}></input>
          </div>
        </div>

        <div className="linha linha-inline">
          <div className="classInput" style={{ width: "100%" }}>
            <label> Endereço </label>
            <input placeholder="Rua, 000, Bairro Santa Casa, Belo Horizonte, Minas Gerais" value={newAgricultor.endereco} onChange={(e) => setAgricultor((prevState => ({ ...prevState, endereco: e.target.value })))}></input>
          </div>
          <div className="classInput" style={{ width: "100%" }}>
            <label> Motivação </label>
            <textarea
              placeholder="Conte-nos sobre a sua história com o apoio a agricultura sustentável e a razão pela qual gostaria  de fazer parte do nosso projeto."
              cols="30"
              rows="5"
              value={newAgricultor.motivacao} onChange={(e) => setAgricultor((prevState => ({ ...prevState, motivacao: e.target.value })))}
            ></textarea>
          </div>
        </div>
      </div>

      <div className="termos">
        <Checkbox />
        <h6>Aceito os termos e condições</h6>
      </div>

      <div className="botao">
        <button className="button-yellow" onClick={postNewAgricultor}>Cadastrar</button>
      </div>
    </div>
  );
}

export default CadastroProdutor;
