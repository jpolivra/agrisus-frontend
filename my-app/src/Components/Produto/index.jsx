import React, { useState, useEffect } from "react";
import "./style.css";

const produtos = [
  {
    id: 1,
    name: "Milho",
    price: "R$ 1.31 Kg",
  },
  {
    id: 2,
    name: "Tomate",
    price: "R$ 2.29 Kg",
  },
  {
    id: 3,
    name: "Cenoura",
    price: "R$ 0.73 Kg",
  },
  {
    id: 4,
    name: "Milho",
    price: "R$ 1.31 Kg",
  },
  {
    id: 5,
    name: "Tomate",
    price: "R$ 2.29 Kg",
  },
  {
    id: 6,
    name: "Cenoura",
    price: "R$ 0.73 Kg",
  },
  {
    id: 7,
    name: "Milho",
    price: "R$ 1.31 Kg",
  },
  {
    id: 8,
    name: "Tomate",
    price: "R$ 2.29 Kg",
  },
  {
    id: 9,
    name: "Cenoura",
    price: "R$ 0.73 Kg",
  },
];

const lista = [];

produtos.forEach((item) => {
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
});

const getItems = () =>
  new Promise((resolve) => setTimeout(() => resolve(lista), 1000));

function Produto() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems().then((result) => setItems(result));
  }, []);

  if (!items.length) {
    return "Loading...";
  }

  return (
    <div className="produtos-container" id="produtosLista">
      {items.map((item) => (
        <div
          className="product-background"
          dangerouslySetInnerHTML={{ __html: item }}
        />
      ))}
    </div>
  );
}

export default Produto;
