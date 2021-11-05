import React, { useState, useEffect } from "react";
import "./style.css";

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
    <div className="produtos-container">
      {produtos.map((item) => {
        return (
          <div key={item.id} className="product-background">
            <img
              class="product-image"
              src="https://raw.githubusercontent.com/thxjao/Agrisus-Frontend/master/my-app/src/assets/image_placeholder.png"
              alt=""
              id="${item.id}"
            />
            <div class="produto-info" id="${item.id}">
              <h1 id="{item.id}" class="produto-info-title">
                Safra de {item.nome}
              </h1>
              <p id="${item.id}">Em estoque</p>
              <img
                id="${item.id}"
                src="https://raw.githubusercontent.com/thxjao/Agrisus-Frontend/master/my-app/src/assets/rank.png"
                class="rank"
              />
              <p id="${item.id}" class="produto-price">
                R$ {item.valor.toFixed(2).replace(".", ",")}
              </p>
              <div id="${item.id}" class="produto-buttons">
                <button id="${item.id}" class="button-first">
                  Tenho interesse
                </button>
                <button id="${item.id}">Mais informações</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Produto;
