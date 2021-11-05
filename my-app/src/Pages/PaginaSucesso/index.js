import * as S from "./styles";
import React from "react";
import Logo from "../../assets/logo_agrisus_cadastro.svg";
import { SucessoComponente } from "../../Components/Sucesso";
// import Login from "../Login";
import { Link } from "react-router-dom";

const PageSucesso = () => {
  return (
    <S.containerSucesso>
      <S.logoCadastro src={Logo} />
      <SucessoComponente />
      <Link to="/">
        <button className="button-yellow">Voltar para login</button>
      </Link>
    </S.containerSucesso>
  );
};

export { PageSucesso };
