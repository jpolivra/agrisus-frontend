import * as S from "./styles";
import ImagemConfirmado from "../../assets/confirmed.svg";

const SucessoComponente = () => {
  return (
    <S.Container>
      {" "}
      <S.textoSucess>Cadastro realizado com sucesso!</S.textoSucess>
      <S.imagemSucess src={ImagemConfirmado} />
    </S.Container>
  );
};

export { SucessoComponente };
