import React, { useState, useEffect } from "react";
import "./style.css";
import image_placeholder from "../../assets/image_placeholder.png";
import rank from "../../assets/rank.png";

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
    id: 1,
    name: "Cenoura",
    price: "R$ 0.73 Kg",
  },
];

const lista = [];

produtos.forEach((item) => {
  lista.push(
    `<div className="product-background" id="${item.id}">
      <img src="https://raw.githubusercontent.com/thxjao/Agrisus-Frontend/master/my-app/src/assets/image_placeholder.png" alt="" id="${item.id}" />
      <div className="produto-info" id={item.id}>
      <h1 id="${item.id}">Safra de ${item.name}</h1>
      <p id="${item.id}">Em estoque</p>
      <img id="${item.id}" src="https://raw.githubusercontent.com/thxjao/Agrisus-Frontend/master/my-app/src/assets/rank.png" className="rank" />
      <p id="${item.id}" className="produto-price">
        ${item.price}
      </p>
      <div id="${item.id}" className="produto-buttons">
        <button id="${item.id}" className="button-first">
          Tenho interesse
        </button>
        <button id="${item.id}">Mais informações</button>
      </div>
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
        <div dangerouslySetInnerHTML={{ __html: item }} />
      ))}
    </div>
  );
}

export default Produto;
