/* eslint-disable jsx-a11y/alt-text */
import * as S from "./styles";
import Mateus from "../../assets/equipe1.jpg";
import Lucas from "../../assets/equipe2.jpg";
import Diego from "../../assets/equipe3.jpg";
import Daniele from "../../assets/equipe4.jpg";
import Joao from "../../assets/equipe5.jpg";

const PageSobre = () => {
  return (
    <S.containerSobre>
      <S.textoSobre> Equipe </S.textoSobre>
      <S.boxUm>
        <S.boxDois>
          <S.imagemEquipe src={Mateus} />
          <S.textoDescricao>Mateus Mendes</S.textoDescricao>
          <S.textoDescricao>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed
            blandit magna. Nulla id lorem porta, pretium dolor eget, congue
            nisl. Phasellus cursus venenatis tincidunt. Nunc sed magna velit. In
            a ultrices magna. Duis pretium nibh diam, eu dictum nisi porta eu.
            Donec facilisis tempor lectus, eget aliquam mi convallis non.
            Praesent interdum, mauris quis dapibus facilisis, neque neque
          </S.textoDescricao>
        </S.boxDois>
        <S.boxDois>
          <S.imagemEquipe src={Lucas} />
          <S.textoDescricao>Lucas Rocha</S.textoDescricao>
          <S.textoDescricao>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed
            blandit magna. Nulla id lorem porta, pretium dolor eget, congue
            nisl. Phasellus cursus venenatis tincidunt. Nunc sed magna velit. In
            a ultrices magna. Duis pretium nibh diam, eu dictum nisi porta eu.
            Donec facilisis tempor lectus, eget aliquam mi convallis non.
            Praesent interdum, mauris quis dapibus facilisis, neque neque
          </S.textoDescricao>
        </S.boxDois>
        <S.boxDois>
          <S.imagemEquipe src={Daniele} />
          <S.textoDescricao>Daniele Marques</S.textoDescricao>
          <S.textoDescricao>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed
            blandit magna. Nulla id lorem porta, pretium dolor eget, congue
            nisl. Phasellus cursus venenatis tincidunt. Nunc sed magna velit. In
            a ultrices magna. Duis pretium nibh diam, eu dictum nisi porta eu.
            Donec facilisis tempor lectus, eget aliquam mi convallis non.
            Praesent interdum, mauris quis dapibus facilisis, neque neque
          </S.textoDescricao>
        </S.boxDois>
      </S.boxUm>
      <S.boxUm>
        <S.boxDois>
          <S.imagemEquipe src={Diego} />
          <S.textoDescricao>Diego Marcolino</S.textoDescricao>
          <S.textoDescricao>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed
            blandit magna. Nulla id lorem porta, pretium dolor eget, congue
            nisl. Phasellus cursus venenatis tincidunt. Nunc sed magna velit. In
            a ultrices magna. Duis pretium nibh diam, eu dictum nisi porta eu.
            Donec facilisis tempor lectus, eget aliquam mi convallis non.
            Praesent interdum, mauris quis dapibus facilisis, neque neque
          </S.textoDescricao>
        </S.boxDois>
        <S.boxDois>
          <S.imagemEquipe src={Joao} />
          <S.textoDescricao>João Pedro Silva</S.textoDescricao>
          <S.textoDescricao>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed
            blandit magna. Nulla id lorem porta, pretium dolor eget, congue
            nisl. Phasellus cursus venenatis tincidunt. Nunc sed magna velit. In
            a ultrices magna. Duis pretium nibh diam, eu dictum nisi porta eu.
            Donec facilisis tempor lectus, eget aliquam mi convallis non.
            Praesent interdum, mauris quis dapibus facilisis, neque neque
          </S.textoDescricao>
        </S.boxDois>
        <S.boxDois>
          <S.imagemEquipe src={Diego} />
          <S.textoDescricao>lorem ipsum</S.textoDescricao>
          <S.textoDescricao>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed
            blandit magna. Nulla id lorem porta, pretium dolor eget, congue
            nisl. Phasellus cursus venenatis tincidunt. Nunc sed magna velit. In
            a ultrices magna. Duis pretium nibh diam, eu dictum nisi porta eu.
            Donec facilisis tempor lectus, eget aliquam mi convallis non.
            Praesent interdum, mauris quis dapibus facilisis, neque neque
          </S.textoDescricao>
        </S.boxDois>
      </S.boxUm>
    </S.containerSobre>
  );
};

export { PageSobre };
