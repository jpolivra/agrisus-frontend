import React, { useState, useEffect } from "react";
import "./style.css";
import Produto from "../../Components/Produto";
import searchIcon from "../../assets/search-solid.svg";

import Header from "../../Components/Header";

function Home() {
  let productInfo = {
    nome: "Tomate",
    price: "R$ 1.29 Kg",
    fazenda: "Fazenda Vale Verde",
    motivacao: "lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    telefone: "75 9 8882839123",
    endereco: "rua tal bairro tal",
  };

  function openModal(event) {
    let productBg = document.querySelector(".modal-produto-info-bg");
    let productName = document.querySelector("#productName");
    let productPrice = document.querySelector("#productPrice");
    productInfo.nome = `Safra de ${event.target.getAttribute("nome")}`;
    productInfo.price = `R$ ${event.target.getAttribute("price")}`;
    productBg.style.display = "flex";
    productName.innerText = productInfo.nome;
    productPrice.innerText = productInfo.price;
    console.log(productInfo.nome);
  }

  function closeModal() {
    let productBg = document.querySelector(".modal-produto-info-bg");
    productBg.style.display = "none";
  }

  return (
    <div className="home-background">
      <div className="modal-produto-info-bg">
        <div className="modal-produto-info">
          <div onClick={closeModal} className="close-product-info">
            <p onClick={closeModal}>X</p>
          </div>
          <div className="modal-container">
            <img
              className="product-info-img"
              src="https://raw.githubusercontent.com/thxjao/Agrisus-Frontend/master/my-app/src/assets/milho_bg_big.png"
              alt=""
            />
          </div>
          <div className="product-info">
            <h1 id="productName">default</h1>
            <p id="productPrice" className="preco">
              default
            </p>
            <p id="productFazenda">{productInfo.fazenda}</p>
            <p id="productMotivacao">{productInfo.motivacao}</p>
            <p id="productTelefone">Telefone: {productInfo.telefone}</p>
            <p id="productEndereco">Endereço: {productInfo.endereco}</p>
          </div>
        </div>
      </div>
      <Header />
      <div className="home-header">
        <h1>Mercado</h1>
        <div className="search-bar">
          <div className="search-bg">
            <img className="search-icon" src={searchIcon} />
            <input
              type="text"
              class="searchBar"
              id="searchBar"
              placeholder="Procurar produtos"
            />
          </div>

          <select name="state" id="state" class="select">
            <option value="todos">Categoria</option>
            <option value="true">Verduras</option>
            <option value="false">Frutas </option>
          </select>
        </div>
      </div>
      <div onClick={openModal}>
        <Produto />
      </div>
    </div>
  );
}

export default Home;
