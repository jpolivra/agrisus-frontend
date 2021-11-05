/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Footer from "../../Components/Footer";
import * as S from "./styles";
import Mateus from "../../assets/equipe1.jpg";
import Lucas from "../../assets/equipe2.jpg";
import Diego from "../../assets/equipe3.jpg";
import Daniele from "../../assets/equipe4.jpg";
import Joao from "../../assets/equipe5.jpg";
import Leonardo from "../../assets/equipe6.jpg";

const PageEquipe = () => {
  return (
    <>
      <S.containerEquipe>
        <S.textoEquipe> Equipe </S.textoEquipe>
        <S.boxUm>
          <S.boxDois>
            <S.imagemEquipe src={Mateus} />
            <S.textoDescricao>Mateus Mendes</S.textoDescricao>
            <S.textoDescricao>Desenvolvedor Full-Stack</S.textoDescricao>
          </S.boxDois>
          <S.boxDois>
            <S.imagemEquipe src={Leonardo} />
            <S.textoDescricao>Leonardo Maia Assis Oliveira</S.textoDescricao>
            <S.textoDescricao>Desenvolvedor Front-end</S.textoDescricao>
            <S.textoDescricao>Scrum-Master</S.textoDescricao>
          </S.boxDois>
          <S.boxDois>
            <S.imagemEquipe src={Daniele} />
            <S.textoDescricao>Daniele Marques</S.textoDescricao>
            <S.textoDescricao>Desenvolvedora Front-end</S.textoDescricao>
          </S.boxDois>
        </S.boxUm>
        <S.boxUm>
          <S.boxDois>
            <S.imagemEquipe src={Diego} />
            <S.textoDescricao>Diego Marcolino</S.textoDescricao>
            <S.textoDescricao>Desenvolvedor Back-end</S.textoDescricao>
          </S.boxDois>
          <S.boxDois>
            <S.imagemEquipe src={Joao} />
            <S.textoDescricao>João Pedro Silva</S.textoDescricao>
            <S.textoDescricao>Desenvolvedor Front-end</S.textoDescricao>
          </S.boxDois>
          <S.boxDois>
            <S.imagemEquipe src={Lucas} />
            <S.textoDescricao>Lucas Rocha</S.textoDescricao>
            <S.textoDescricao>Desenvolvedor Back-end</S.textoDescricao>
          </S.boxDois>
        </S.boxUm>
      </S.containerEquipe>
      <Footer></Footer>
    </>
  );
};

export { PageEquipe };
