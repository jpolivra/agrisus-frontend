import * as S from "./styles";
import React from "react";
import Footer from "../../Components/Footer";

const PageSobre = () => {
  return (
    <>
      <S.containerSobre>
        <S.tituloSobre>Sobre </S.tituloSobre>
        <S.textoLogo> Agri.sus </S.textoLogo>
        <S.textoSobre>
          A ODS 2 da ONU, agricultura sustentável e fome zero, tem como objetivo
          “acabar com todas as formas de fome e má-nutrição até 2030, de modo a
          garantir que todas as pessoas - especialmente as crianças - tenham
          acesso suficiente a alimentos nutritivos durante todos os anos”, para
          alcançá-lo, defini-se como metas “promover práticas agrícolas
          sustentáveis, por meio do apoio à agricultura familiar, do acesso
          equitativo à terra, à tecnologia e ao mercado”. No Brasil, a
          agricultura familiar é o melhor promotor da agricultura sustentável,
          fazendo o menor uso de agrotóxicos e a maior representatividade no
          apoio ao meio ambiente, cerca de 70% dos brasileiros no campo dependem
          da agricultura familiar e 40% de toda a população empregada no país
          têm renda dependente do mercado de produção agrícola familiar. No
          entanto, os pequenos produtores familiares têm acesso apenas 14% do
          incentivo governamental para sua produção e apenas 23% das terras
          agricultáveis concentram-se em seu domínio. Portanto, nossa aplicação
          desenvolvida tem como intuito principal a promoção da agricultura
          sustentável e familiar, conectando e promovendo aqueles que querem ter
          acesso a um produto mais barato e livre de agrotóxicos. O nosso
          aplicativo tem o intuito de enxugar a cadeia produtiva, livrando de
          todos os encargos que se acumulam ao longo das compras e vendas
          sucessivas até a chegada ao consumidor, permitindo a venda de produtos
          baratos a aqueles que não tem a chance de comprar direto do mercado.
          Além disso, realiza-se um ranqueamento daqueles agricultores que mais
          promovem o benefício ao meio ambiente, permitindo a eles um maior
          destaque e acesso a vendas. Assim, com o objetivo de cumprir a ODS 2
          da ONU, o sistema aqui produzido visa o apoio à agricultura familiar e
          sustentável, além do combate à fome, já que se dá aos mais pobres
          acesso a alimentos baratos e aos agricultores uma promoção e renda
          relativa a suas vendas e proteção ao meio ambiente.
        </S.textoSobre>
      </S.containerSobre>
      <Footer></Footer>
    </>
  );
};

export { PageSobre };
