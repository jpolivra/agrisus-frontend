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
            />
            <div class="produto-info">
              <h1
                class="produto-info-title"
                nome={item.nome}
                price={item.valor}
              >
                Safra de {item.nome}
              </h1>
              <p>Em estoque</p>
              <img
                src="https://raw.githubusercontent.com/thxjao/Agrisus-Frontend/master/my-app/src/assets/rank.png"
                class="rank"
              />
              <p class="produto-price">
                R$ {item.valor.toFixed(2).replace(".", ",")}
              </p>
              <div class="produto-buttons">
                <button class="button-first">Tenho interesse</button>
                <button>Mais informações</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Produto;
