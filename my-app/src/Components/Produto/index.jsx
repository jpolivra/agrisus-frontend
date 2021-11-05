import React, { useState, useEffect } from "react";
import "./Produto.css";
import imagem from "../../assets/image_placeholder.png"
import imagem2 from "../../assets/rank.png"

/* produtos.forEach((item) => {
  lista.push(
    `
      <img class="product-image" src="https://raw.githubusercontent.com/thxjao/Agrisus-Frontend/master/my-app/src/assets/image_placeholder.png" alt="" id="${item.id}" />
      <div class="produto-info" id="${item.id}">
        <h1 id="${item.id}" class="produto-info-title">Safra de ${item.name}</h1>
        <p id="${item.id}">Em estoque</p>
        <img id="${item.id}" src="https://raw.githubusercontent.com/thxjao/Agrisus-Frontend/master/my-app/src/assets/rank.png" class="rank" />
        <p id="${item.id}" class="produto-price">
          ${item.price}
        </p>
        <div id="${item.id}" class="produto-buttons">
          <button id="${item.id}" class="button-first">
            Tenho interesse
          </button>
          <button id="${item.id}">Mais informações</button>
        </div>
      </div>`
  );
}); */

function Produto() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    function loadProdutos() {
      let url = "https://localhost:44362/api/produto/produto";
      fetch(url)
        .then((r) => r.json())
        .then((data) => {
          setProdutos(data);
          console.log(data);
        });
    }
    loadProdutos();
  }, []);

  return (
    <div className="produtos-api container">
      {produtos.map((item) => {
        return (
          <div key={item.id} className="produto">
            <div className="box">
              <div className="imagem">
                <img src={imagem} />
              </div>
              <div className="conteudo-produto">
                <h4>{item.nome}</h4>
                <h6>Em estoque</h6>
                <img src={imagem2} />
                <h5 className="valor">R$ {item.valor.toFixed(2).replace('.', ',')}</h5>
                <div className="agricultor">
                <h5 >{item.agricultor.nome}</h5>
                </div>
                <div className="botoes">
                  <button className="button-tenho-interesse">Tenho interesse</button>
                  <button className="button-mais-info">Mais informações</button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Produto;
